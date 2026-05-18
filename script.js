// script.js

/**
 * Fungsi untuk berpindah tab/bab pada halaman belajar.html
 * @param {string} tabId - ID dari section bab yang ingin ditampilkan
 */
function buka(tabId) {
    // 1. Ambil semua elemen section konten dan tombol menu
    const sections = document.querySelectorAll('.content-card, .content-section');
    const buttons = document.querySelectorAll('.menu-btn');

    // 2. Sembunyikan semua section dengan menghapus kelas 'active'
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 3. Nonaktifkan semua tombol menu dengan menghapus kelas 'active'
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 4. Tampilkan section yang dipilih berdasarkan ID
    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 5. Berikan kelas 'active' pada tombol yang baru saja diklik
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 6. Otomatis scroll ke posisi paling atas agar materi terbaca dari awal
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Event Listener untuk menangani interaksi tambahan
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log("LMS Gen-Mu siap digunakan!");
    
    // Opsional: Menambahkan efek suara klik atau log aktivitas sederhana
    const allLinks = document.querySelectorAll('a.btn-lms');
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log("Membuka sumber luar: " + link.href);
        });
    });
});
