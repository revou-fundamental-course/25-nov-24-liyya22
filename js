// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    height = height / 100; // ubah cm ke meter
    return weight / (height * height); // rumus BMI
}

// Fungsi untuk menampilkan hasil
function displayResult(bmi, gender) {
    const resultText = document.getElementById('bmi-result');
    const explanationText = document.getElementById('bmi-explanation');

    let category = '';
    let explanation = '';

    if (bmi < 18.5) {
        category = 'Kekurangan Berat Badan';
        explanation = 'BMI Anda berada di bawah normal, pertimbangkan untuk meningkatkan berat badan.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal';
        explanation = 'BMI Anda normal, tetap pertahankan pola hidup sehat.';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Kelebihan Berat Badan';
        explanation = 'BMI Anda sedikit tinggi, cobalah untuk mengontrol berat badan.';
    } else {
        category = 'Obesitas';
        explanation = 'BMI Anda tinggi, pertimbangkan untuk menurunkan berat badan untuk kesehatan.';
    }

    resultText.textContent = `BMI Anda: ${bmi.toFixed(2)} (${category})`;
    explanationText.textContent = explanation;
}

// Event listener untuk form submit
document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault(); // mencegah form dari reload

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;

    // Validasi input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Masukkan nilai yang valid!');
        return;
    }

    // Hitung dan tampilkan hasil BMI
    const bmi = calculateBMI(weight, height);
    displayResult(bmi, gender);
});
