// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let i = 0
  let password = []
  let lowercase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`,`u`, `v`, `w`, `x`, `y`, `z`]
  let uppercase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`]
  let specialchar = [`!`, `@`, `#`, `$`, `%`, `&`, `*`, `-`]
  let nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  let passArray = []
  let passlength = prompt(`Between 8 to 128 characters, how long would you like your password to be?`)
  let lowercaseConfirm = confirm(`Would you like lower-case letters for you password? (Presss cancel for "No" and okay for "Yes")`)
  let uppercaseConfirm = confirm(`Would you like upper-case letters for you password? (Presss cancel for "No" and okay for "Yes")`)
  let specialCharConfirm = confirm(`Would you like lower-case letters for you password? (Presss cancel for "No" and okay for "Yes")`)
  let numsConfirm = confirm(`Would you like numbers for your password? (press cancel for "No and okay for "Yes"`)
  if ((lowercaseConfirm == true || uppercaseConfirm == true || specialCharConfirm == true || numsConfirm == true) && passlength < 129 && passlength > 7 ){
    let passwordConfirm = confirm(`You would like ${ passlength } character password. It is ${ lowercaseConfirm } that you want lower-case letters. It is ${ uppercaseConfirm } that you want upper-case letters. It is ${ specialCharConfirm } that you want special characters. It is ${ numsConfirm } that you want numbers.`)   
    if( passwordConfirm == true ) {
      // var passArray = []
      if (lowercaseConfirm == true ){
        passArray.push(lowercase)
      }
      if (uppercaseConfirm == true ){
        passArray.push(uppercase)
      }
      if (specialCharConfirm == true ){
        passArray.push(specialchar)
      }
      if (numsConfirm == true ){
        passArray.push(nums)
      }
      while ( i < passlength ){
            randoArray = passArray[Math.floor(Math.random() * passArray.length)]
            password.push(randoArray[Math.floor(Math.random() * randoArray.length)])
            i++

      }
      
      console.log(password.join(""))
      console.log(passArray)
      console.log(window)
    }
  
  }
  else {
    alert(`Please ensure you select at least one character type and that your password length is between 8-128 chaaracters.`)
  }



  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

