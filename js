// Fungsi untuk menghitung BMI berdasarkan berat badan dan tinggi badan
function calculateBMI(weight, height) {
    height = height / 100; // Mengonversi tinggi badan dari cm ke meter
    return weight / (height * height); // Rumus BMI = berat / (tinggi * tinggi)
}

// Fungsi untuk menampilkan hasil BMI ke dalam elemen HTML
function displayResult(bmi, gender) {
    const resultText = document.getElementById('bmi-result');
    const explanationText = document.getElementById('bmi-explanation');

    let category = '';
    let explanation = '';

    // Menentukan kategori BMI berdasarkan hasil perhitungan
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

    // Menampilkan hasil BMI dan kategori ke halaman
    resultText.textContent = `BMI Anda: ${bmi.toFixed(2)} (${category})`;
    explanationText.textContent = explanation;
}

// Event listener untuk menangani pengiriman form
document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah reload halaman saat form disubmit

    // Mengambil nilai input dari form
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;

    // Validasi input untuk memastikan nilai yang dimasukkan valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert('Masukkan nilai yang valid untuk berat badan dan tinggi badan.');
        return;
    }

    // Menghitung BMI dan menampilkan hasilnya
    const bmi = calculateBMI(weight, height);
    displayResult(bmi, gender);
});
