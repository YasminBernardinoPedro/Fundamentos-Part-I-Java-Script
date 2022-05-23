/*Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK �
*/
const alturaMark = 1.69;
const kgMark = 78.00;
const alturaJohn = 1.95;
const kgJohn = 92.00;
const imcMark = kgMark / alturaMark ** 2;
console.log(imcMark)
const imcJohn = kgJohn / alturaJohn ** 2;
console.log(imcJohn)
const imcMaior = imcMark > imcJohn;
console.log(imcMaior)

if (imcMark >= imcJohn) {
    console.log(`O IMC de Mark é ${imcMark} e o de John é ${imcJohn}, sendo assim o de Mark é ${imcMark - imcJohn} maior que o de John.`)
}