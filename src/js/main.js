const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link'); 





  // buat scroll smooth
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Fungsi buat send ke Wa

  function sendToWhatsApp() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const orderDate = document.getElementById('orderDate').value;
    const message = document.getElementById('message').value;

    const waNumber = "6287892219615"; 
    const waLink = `https://wa.me/${waNumber}?text=` +
        `*Form Sukma Tailor*%0A%0A` +
        `*Nama Lengkap:* ${encodeURIComponent(name)}%0A` +
        `*Alamat:* ${encodeURIComponent(address)}%0A` +
        `*No Hp:* ${encodeURIComponent(phone)}%0A` +
        `*Tanggal Pesan:* ${encodeURIComponent(orderDate)}%0A` +
        `*Pesan:* ${encodeURIComponent(message)}`;

    window.open(waLink, '_blank');
}