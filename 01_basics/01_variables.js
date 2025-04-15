const accountId = 101
let accountEmail = "varshit@yopmail.com"
var accountPassword = "2025"
accountCity = "Jabalpur"
let accountState;


//If we leave a variable without assigning it any value, it will show as undefined.

// accountId = 1 Not allowed

accountEmail = "abc@yopmail.com"
accountPassword = "2001"
accountCity = "Indore"

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
