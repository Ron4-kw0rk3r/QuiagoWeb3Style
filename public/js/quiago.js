document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Generador de QR
    const qr = qrcode(0, 'M');
    qr.addData('https://quiagoapp.com/download');
    qr.make();
    document.getElementById('app-qr').innerHTML = qr.createImgTag(5);

    // Efectos de parallax
    document.addEventListener('mousemove', (e) => {
        const floatingElements = document.querySelectorAll('.floating');
        floatingElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 5;
            const x = (window.innerWidth - e.pageX * speed) / 100;
            const y = (window.innerHeight - e.pageY * speed) / 100;
            element.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    });
});

// Manejadores de HTMX
htmx.on('htmx:afterSwap', function(evt) {
    if (evt.detail.target.id === 'wallet-modal') {
        // Inicializar conexión con wallet
        initializeWalletConnection();
    }
});

function initializeWalletConnection() {
    // Implementar lógica de conexión de wallet
    console.log('Initializing wallet connection...');
} 