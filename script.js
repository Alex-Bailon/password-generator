// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Defining what we know.
  let i = 0 // Random var for while loop count
  let password = [] // Empty array for the users password
  let passArray = [] // Empty array to insert requested user criteria for password
  // Arrays for possible outputs for password
  let lowercase = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`,`u`, `v`, `w`, `x`, `y`, `z`]
  let uppercase = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`]
  let specialchar = [`!`, `@`, `#`, `$`, `%`, `&`, `*`, `-`]
  let nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  // Asking user length of password
  let passlength = prompt(`Between 8 to 128 characters, how long would you like your password to be?`)
  // If user enters a nunber between 8 and 128, if statement will be true and will move on. If not code will skip to line 51 and end.
  if ( passlength >7 && passlength < 129) {
  let lowercaseConfirm = confirm(`Would you like lower-case letters for you password? (Presss Cancel for "No" and OK for "Yes")`)
  let uppercaseConfirm = confirm(`Would you like upper-case letters for you password? (Presss Cancel for "No" and OK for "Yes")`)
  let specialCharConfirm = confirm(`Would you like special characters letters for you password? (Presss Cancel for "No" and OK for "Yes")`)
  let numsConfirm = confirm(`Would you like numbers for your password? (press Cancel for "No and OK for "Yes")`)
  // If user anwers "yes" to to at least one of the above code will continue if not code will skip to line 48 and end.
  if (lowercaseConfirm == true || uppercaseConfirm == true || specialCharConfirm == true || numsConfirm == true){
    // Confirming user password has everything user would like in the password.
    let passwordConfirm = confirm(`You would like ${ passlength } character password. It is ${ lowercaseConfirm } that you want lower-case letters. It is ${ uppercaseConfirm } that you want upper-case letters. It is ${ specialCharConfirm } that you want special characters. It is ${ numsConfirm } that you want numbers.`)   
    // If user confirms all of their criterias are met the following code will add the users creiteria to the passArray.
    if( passwordConfirm == true ) {
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
      // After passArray has the user criteria's the code will create a random password.
      while ( i < passlength ){
            // RandoArray will randomly select a random object from the passArray.
            randoArray = passArray[Math.floor(Math.random() * passArray.length)]
            // Code will then add a random character from the randomly picked array  and add it to password.
            password.push(randoArray[Math.floor(Math.random() * randoArray.length)])
            i++

      }
      // Output password to html.
      document.getElementById(`password`).textContent = password.join("")
    }
  }
  else {
    alert(`Please ensure you select at least one character type.`)
  }
}
else {
  alert(`Please ensure your password length is between 8 and 128.`)
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

