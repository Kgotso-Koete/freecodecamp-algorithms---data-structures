/* adopted from: https://stackoverflow.com/questions/9083037/convert-a-number-into-a-roman-numeral-in-javascript */

function convertToRoman(num)
{
  //dictionary of roman numbers
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

  // empty string
  var roman = '';

  // iterator
  var i;

  // iterate over each letter
  for ( i in lookup )
  {
  	// keep moving along roman letters
    while ( num >= lookup[i] )
    {
      roman += i;// add each letter to the Roman translation
      num -= lookup[i]; // remove translated base 10 and move on to the next best translation
    }
  }
  return roman;
}

convertToRoman(45);  
