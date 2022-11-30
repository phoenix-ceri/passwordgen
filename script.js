let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
function writePassword()
{
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword()
{
  let passLen = getPasswordLength();
  if (checkForNull(passLen))
  { 
    return 'Oi, ya clicked the bloody cancel button.\n\nClick the Generate Password button to restart.';
  }

  let charSet = getCharacterSelections();
  if (checkForNull(charSet))
  {

    return 'Oi, ya clicked the bloody cancel button.\n\nClick the Generate Password button to restart.';
  }

  let newPassword = '';
  for (let i = 0; i < passLen; i++)
  {
    newPassword += charSet[Math.floor(Math.random() * charSet.length)];
  }

  return 'heres ya bloody password:\n' + newPassword;
}
function getPasswordLength()
{
  let userInput;
  while (true)
  {
    userInput = prompt("Enter password length (8 - 128)");
    if (checkForNull(userInput))
    {
      return;
    }
    if (userInput === '' || isNaN(userInput) || userInput.split('', 1) == 0 || userInput < 8 || userInput > 128) 
    {
      window.alert('Ope, theres a bloody problem.\n please specify how many numbers');
    } else
    {
      return userInput;
    }
  }
}

function getCharacterSelections()
{
  let userArr = [];
  let messages = ["Include Lowercase?  y/n", "Include Uppercase?  y/n", "Include Numbers? y/n", "Include Specials? y/n"];
  while (true)
  {
    for (let i = 0; i < messages.length; i++)
    {
      while (true)
      {
        let userInput = prompt(messages[i]);
        if (checkForNull(userInput))
        {
          return;
        }
        userArr[i] = userInput.toLowerCase().split('', 1).toString();
        if (userArr[i] === 'y' || userArr[i] === 'n')
        {
          break;
        } else 
        {
          window.alert('Ope, Something went wrong.\nType (y)es or (n)o.')
        }
      }
    }
    if (!userArr.includes('y'))
    {
      window.alert('Ope, Something went wrong.\nChoose at least one character set.');
    } else
    {
      break;
    }
  }
  return getCharSet(userArr);
}

function getCharSet(arrValues)
{
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let numbers = '1234567890';
  let specials = ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
  let charArr = ['abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz'.toUpperCase(), '1234567890', ' !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~']
  let charSet = '';

  for (let i = 0; i < arrValues.length; i++)
  {
    if (arrValues[i] == 'y')
    {
      charSet += charArr[i];
    }
  }
  return charSet;
}
function checkForNull(valueToCheck)
{
  if (valueToCheck == null)
  {
    return true;
  }
  else 
  {
    return false;
  }
}

//lol i am here at like 2 am. Morning time fifi please delete this before making the coffee