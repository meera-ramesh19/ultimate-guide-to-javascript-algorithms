/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

1.712

function vowelsCounter(text) {
    // Code goes here
    var regular = text.match(/[aeiou]/gi)

    if (regular) {
        return regular.length
    } else {
        return 0
    }
}

1.727 s
// const vowels = ['a', 'e', 'i', 'o', 'u']

// function vowelsCounter(text) {
//     // Code goes here


//     let count = 0
//     for (let char of text.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }
//     }
//     return count
// }





module.exports = vowelsCounter;