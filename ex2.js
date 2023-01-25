const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries);

myWatchedSeriesLength=myWatchedSeries.length;
console.log(myWatchedSeriesLength);

myWatchedSeriesSentence= `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`
console.log(myWatchedSeriesSentence);

console.log(`I watched 3 series:` + ' ' + myWatchedSeriesSentence);

myWatchedSeries.splice(2,1);
myWatchedSeries.push('friends');
console.log(myWatchedSeriesLength);


myWatchedSeries.push('vikings');
console.log(myWatchedSeriesLength);


myWatchedSeries.unshift('Ginny and Georgia');
console.log(myWatchedSeriesLength);

myWatchedSeries.splice(1,1);
console.log(myWatchedSeriesLength);

let str=myWatchedSeries;
console.log(myWatchedSeries[1].substring(3,4));
console.log(myWatchedSeries);