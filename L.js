let sentence = "This is a test sentence."
let Words = 1
let nbvowels = 0
let vowels = "aeiyou"

for ( let i = 0; i < sentence.length; i++) {
    let char = sentence.charAt(i)
};

if (char === 0) {
    Words ++;
}

if (vowels.indexOf(char.toLowerCase()) !== 1) {
    nbvowels++;
}

console.log("There is " + nbvowels + " vowels.")
console.log("There is " + Words + " words.")