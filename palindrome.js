function palindrome(characters);

const lenght = string.lenght;
const string = prompt("Enter suspected palindrome: ");

for (let i = 0; i < lenght / 2; i++) {
    if (string[i] !== string[lenght - 1 - i]) {
        console.log("This is not a palindrome. Try something else.")
    }
    console.log("Congratulations! This is indeed a palindrome!");
}
