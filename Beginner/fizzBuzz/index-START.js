/*
    Write a program that prints the numbers from 1 to n. But for 
    multiples of three print “Fizz” instead of the number and for 
    the multiples of five print “Buzz”. For numbers which are 
    multiples of both three and five print “FizzBuzz”.
*/

1.721 s,

// function fizzBuzz(n) {
//     // Code goes here
//     for (let i = 1; i <= n; i++) {
//         if (i % 15 === 0) {
//             console.log('fizzbuzz')
//         } else if (i % 5 === 0) {
//             console.log('buzz')
//         } else if (i % 3 === 0) {
//             console.log('fizz')
//         } else {
//             console.log(i)
//         }


//     }
// }

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Is a multiple of 3 and 5?
        if (i % 15 === 0) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            // Is a multiple of 3?
            console.log('fizz')
        } else if (i % 5 === 0) {
            // Is a multiple of 5?
            console.log('buzz')
        } else {
            // Is neither of the above?
            console.log(i)
        }
    }
}


function fizzBuzz(n) {
    for (let i = 0; i < n;)
        console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
}

module.exports = fizzBuzz