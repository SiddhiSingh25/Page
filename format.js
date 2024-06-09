function convertToPDF() {
    const element = document.getElementById('content');
    const opt = {
        margin: 0.5,
        filename: 'front_page.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save();
}

function BackToIndex() {
    window.location.href = 'index.html';
}
