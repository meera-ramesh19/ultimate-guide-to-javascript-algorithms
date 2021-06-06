/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

//1.961

// function reverseString(text) {
//     // Code goes here
//     return [...text].reverse().join('')
// }

//2.41
// function reverseString(text) {
//     // Code goes here
//     return [...text].reduce((acc, char) => char + acc, '')

// }
//1.711

// function reverseString(text) {
//     // Code goes here
//     let result = ''
//     for (char of text) {
//         result = char + result
//     }
//     return result

// }
//2.266

function reverseString(text) {
    // Code goes here
    if (text === '') return ''
    else {
        return reverseString(text.substr(1)) + text[0]
    }

}

module.exports = reverseString