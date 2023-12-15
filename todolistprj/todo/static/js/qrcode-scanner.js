// static/js/qrcode-scanner.js
document.addEventListener('DOMContentLoaded', function () {
    let scanner = new Instascan.Scanner({ video: document.getElementById('qr-video') });

    scanner.addListener('scan', function (content) {
        // Handle the scanned QR code content
        console.log('Scanned content:', content);

        // Optionally, you can redirect the user or perform other actions based on the scanned content
    });

    Instascan.Camera.getCameras().then(function (cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]);
        } else {
            console.error('No cameras found.');
        }
    }).catch(function (error) {
        console.error('Error while initializing camera:', error);
    });
});
