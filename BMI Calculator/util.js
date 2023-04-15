function calculateBMI() {
    // Get input values
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    // Calculate BMI
    var bmi = weight / Math.pow(height / 100, 2);

    // Determine BMI category
    var category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display result
    var result = " " + category + " ";
    var result1 = " BMI : " + bmi.toFixed(2);
    document.getElementById("result").innerHTML = result;
    document.getElementById("result1").innerHTML = result1;
}