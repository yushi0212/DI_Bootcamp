let number = prompt('input a number!');
console.log(number);

number = parseInt(number)

if ((number % 2) === 0) {
    alert(number + ' is an even number')
} else {
    alert(number + ' is an odd number')
}