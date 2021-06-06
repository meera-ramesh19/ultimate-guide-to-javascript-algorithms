/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/

1.712

function vowelsCounter(text) {
    // Code goes here
    var exp = text.match(/[aeiou]/gi)

    if (exp) {
        return exp.length
    } else {
        return 0
    }
}





module.exports = vowelsCounter;