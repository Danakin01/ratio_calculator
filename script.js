document.addEventListener('DOMContentLoaded', 
function() {
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2');
    let ratio1 = document.getElementById('ratio1');
    let ratio2 = document.getElementById('ratio2');

function calculateRatio() {
    let val1 = parseInt(input1.value);
    let val2 = parseInt(input2.value);
// Function to calculate the HCF
let hcf = function(val1, val2) {
    if (val2 === 0) {
      return val1;
    }
    return hcf(val2, val1 % val2);
  }
    let divider = hcf(val1, val2); // Calculate the HCF
    ratio1.value = val1 / divider;
    ratio2.value = val2 / divider;
}
    input1.addEventListener('input', calculateRatio);
    input2.addEventListener('input', calculateRatio);
});
