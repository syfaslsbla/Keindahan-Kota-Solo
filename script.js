// JavaScript untuk menampilkan alert setelah pengunjung mengirimkan feedback
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Mencegah form untuk submit secara default
    alert("Terima kasih atas feedback Anda!");
});