/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function longestWord(text) {
    // Code goes here
    text = text.split('')
    return text.reduce((max, curr) => {
        if (max.length > curr.length) {
            return max
        } else { return curr }
    })
}


module.exports = longestWord