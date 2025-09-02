// let val1 = 10
// let val2 = 5
// function addNum(num1, num2){
//   let total = num1 + num2
//   return total
// }

// let result1 = addNum(val1, val2)

// let result2 = addNum(10, 2)

function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}
one()
two()
three()

/*

Call Stack Execution Flow:

1. one() is called

Call stack: [ one ]
console.log("one") → prints one
Then calls two()

2. two() is called (from inside one)

Call stack: [ one, two ]
console.log("two") → prints two
Then calls three()

3. three() is called (from inside two)

Call stack: [ one, two, three ]
console.log("three") → prints three
three() finishes → popped off stack
Stack now: [ one, two ]


4. two() finishes → popped off stack
Stack now: [ one ]

5. one() finishes → popped off stack
Stack now: []

✅ First batch of output:
one
two
three

6. Next: two() (direct call)

Call stack: [ two ]
Prints two
Calls three()
Call stack: [ two, three ]
Prints three
three() finishes → [ two ]
two() finishes → []

✅ Second batch of output:
two
three

7. Finally: three() (direct call)
Call stack: [ three ]
Prints three
three() finishes → []

✅ Last output:
three

📌 Final Console Output:

one
two
three
two
three
three

*/