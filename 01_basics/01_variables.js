const accountId = 144553
let accountEmail = "Sanskar@google.com"
var accountPassword = "12345"
accountCity = "Agra"

let accountState; //it will be act as a undefined.


//accountId = 2 // not allowed bec we use const with another accountId.

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bombay"



console.log(accountId);

console.table([accountId ,accountEmail, accountPassword, accountCity , accountState]);
// in this method output show as a table.
// declare constant value when we use const .
// declare  for variaable there are two method var aand let .
// var is not more use because of scope specially for (block scope).

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/
