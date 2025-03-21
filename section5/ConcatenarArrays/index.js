const num = [1,2,3];
const num2 = [4,5,6];
//vconst nums = num.concat(num2);

const nums = [...num, ...num2]
console.log(nums);
