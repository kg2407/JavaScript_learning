const accountId = 768686868;
let accountEmail = "iamkg2407@gmail.com"
var accountPassword = "445465464"
accountCity = "Hasanpur"
let accountState

// accountId = 2 Not allowed as declared as const

accountEmail = "me.sunny@gmail.com"
accountPassword = "hjkhj445"
accountCity = "Noida"

console.log(accountId)

/*
Prefer not to use var
because of issue of block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])