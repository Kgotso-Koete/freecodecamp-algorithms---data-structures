function palindrome(str)
{
  // Good luck!
  var pureStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  // Return true if the string is empty or has 1 charachter
  if(pureStr.length === 0 || pureStr.length === 1)
  {
  	return true;
  }

  //  Recursively slice the string and test
  if(pureStr[0] === pureStr[pureStr.length - 1])
  {
  	return palindrome(pureStr.slice(1, pureStr.length - 1));
  }
  return false;
}

palindrome("eye"); 
