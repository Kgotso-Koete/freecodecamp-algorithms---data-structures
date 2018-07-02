function telephoneCheck(str) {
  // Good luck!

  // strip " " from string
  str = str.replace(/\s/g, "");
  let regex = /^[1]*\d{3}[-]*\d{3}[-]*\d{4}$|^[1]*[(]\d{3}[)]\d{3}[-]*\d{4}$/;
  let status = regex.test(str)
  return status;
}

let answer = telephoneCheck("-1 (757) 622-7382");
console.log(answer);  
