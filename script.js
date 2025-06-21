function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const result = document.getElementById('result');

  if (!weight || !height || weight <= 0 || height <= 0) {
    result.innerHTML = "Please enter valid height and weight!";
    result.style.color = "red";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = '';
  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obese';
  }

  result.style.color = "#00b894";
  result.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`;
}
