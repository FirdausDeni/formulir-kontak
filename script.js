document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const whatsappNumber = document.getElementById('whatsappNumber').value; 

            const targetWhatsApp = '6281367914366'; // Nomor WhatsApp tujuan 

            // Ini adalah bagian yang menentukan isi pesan WhatsApp.
            // Hanya mengambil teks dari kolom 'Isi Pesan'.
            let whatsappMessage = `${message}`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappURL = `https://wa.me/${targetWhatsApp}?text=${encodedMessage}`;

            window.open(whatsappURL, '_blank');
        });
    }
});
