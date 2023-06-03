// Adapted from: https://stackoverflow.com/a/15310966
// Fungsi ini digunakan untuk mengambil tanggal dan waktu saat ini dalam format tertentu.
function getCurrentDateTime() {
    var date = new Date(); // Membuat objek Date baru yang mewakili tanggal dan waktu saat ini.
    var day = date.getDate(); // Mendapatkan tanggal (1-31).
    var month = date.getMonth() + 1; // Mendapatkan bulan (0-11). Perlu ditambahkan 1 karena bulan dimulai dari 0.
    var year = date.getFullYear(); // Mendapatkan tahun (4 digit).
    var hours = date.getHours(); // Mendapatkan jam (0-23).
    var minutes = date.getMinutes(); // Mendapatkan menit (0-59).
    var seconds = date.getSeconds(); // Mendapatkan detik (0-59).
  
    // Membuat string dengan format "tanggal/bulan/tahun jam:menit:detik"
    var formattedDateTime = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;
  
    return formattedDateTime; // Mengembalikan string tanggal dan waktu yang diformat.
  }
  
  // Update date and time every second
  // Fungsi ini digunakan untuk memperbarui tanggal dan waktu setiap detik.
  setInterval(function() {
    var dateElement = document.getElementById("date"); // Mengambil elemen dengan id "date".
    dateElement.textContent = getCurrentDateTime(); // Mengubah teks konten elemen tersebut dengan tanggal dan waktu saat ini.
  }, 1000);
  