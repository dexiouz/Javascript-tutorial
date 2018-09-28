// let name = 'chidera paul'
// console.log(name.length)
// //convert to uppercase
// console.log(name.toUpperCase())
// //convert to lowerCase
// console.log(name.toLowerCase())

// //includes method
// let password = 'abc123'
// console.log(password.includes(ab))


function isValidPassword(password){
    return password.length >= 8 && !password.includes('password')
    
}
console.log(isValidPassword('passworui'))