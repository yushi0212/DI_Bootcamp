let sentence='The movie is not that bad, I like it';
console.log(sentence);

let wordNot= sentence.indexOf('not');
console.log(wordNot);

let wordBad = sentence.indexOf('bad');
console.log(wordBad);

if (wordNot>wordBad) {
    console.log(sentence.replace(/not that bad/,'good'));
} else {
    
}


// let wordNot=console.log('The movie is not that bad, I like it'.indexOf('not'));
// console.log(wordNot);

// let wordBad=console.log('The movie is not that bad, I like it'.indexOf('bad'));
// console.log(wordBad);
