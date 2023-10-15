function reverseWordsInSentence(sentence) {
    // Split the sentence into words using a space as the delimiter
    const words = sentence.split(' ');

    // Reverse each word and store them in a new array
    const reversedWords = words.map(word => {
        return word.split('').reverse().join('');
    });

    // Join the reversed words to form the final reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage
const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
