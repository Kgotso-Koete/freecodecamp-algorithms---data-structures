function rot13(str)
{
	var res = [];
	var arr = str.split('');

	for(var i = 0; i < arr.length; i++)
	{
		if(arr[i].charCodeAt() <= 90 && arr[i].charCodeAt() >= 65)
		{
			// calculate the new position
			var index = (arr[i].charCodeAt() + 13);
			var newPos = 0;

			if(index <= 90)
			{
				newPos = index;
			}
			else if(index > 90)
			{
				newPos = (65 + (index % 90) - 1);
			}

			var chr = String.fromCharCode(newPos);
			//console.log(chr);
			res.push(chr);
		}
		else
		{
			res.push(arr[i]);
		}
	}
	return res.join("");
}

// Change the inputs below to test
rot13("SERR CVMMN!");   
