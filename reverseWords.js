function reverseWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');
    // Reverse each word
    const reversedWords = words.map(word => reverseWord(word));
    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}

function reverseWord(word) {
    return word.split('').reverse().join('');
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWords(inputSentence);
console.log(reversedSentence);
