/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // Code goes here

    stringA = stringA.split('').sort().join('')
    stringB = stringB.split('').sort().join('')
    return stringA === stringB
}
module.exports = isAnagram