/* CHALLENGE
Given a sentence containing two or more words, 
return the equivalent of the sentence when capitalised. E.g
  capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!' 
*/




function capSentence(text) {
    let words = text.toLowerCase().split(' ')
    let newArr = []
    words.forEach((word) => {
        newArr.push(word[0].toUpperCase() + word.slice(1))
        console.log(newArr)
    })
    return newArr.join(' ')

}



module.exports = capSentence