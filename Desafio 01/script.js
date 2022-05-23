/*Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
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