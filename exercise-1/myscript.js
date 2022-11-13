let firstNum = document.getElementById("firstNum"),
secondNum = document.getElementById("secondNum"),
btnCheck = document.getElementById("check"),
result = [],
sum = 0;
btnCheck.onclick = () => {
for (
  let i = Number(firstNum.value);
  i <= Number(secondNum.value);
  i += 1
) {
  let check = 0;
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      check += 1;
    }
  }
  if (check < 1) {
    result.push(i);
  }
}
for (let x = 0; x < result.length; x += 1) {
  sum += result[x];
}
let resultDes = "Các số nguyên tố có trong khoảng là:" +
  result.join(", ") +
  " \n " +
  "Tổng các số nguyên tố là: " +
  sum;
document.getElementById("result").innerHTML = resultDes;
result = [];
sum = 0;
};