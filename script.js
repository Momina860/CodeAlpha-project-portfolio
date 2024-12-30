document.getElementById('download-pdf').addEventListener('click', () => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Temporarily hide nav, footer, and download button
    const elementsToHide = document.querySelectorAll('nav, footer, .resume');
    elementsToHide.forEach(el => el.style.visibility = 'hidden');

    // Generate the PDF
    html2canvas(document.body).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 190; // PDF width
        const pageHeight = 297; // PDF height
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const position = 0; // start position for the first page

        doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        doc.save('Momina_Ishtiaq_Portfolio.pdf');

        // Restore visibility
        elementsToHide.forEach(el => el.style.visibility = 'visible');
    }).catch((error) => {
        console.error('Error generating PDF:', error);
    });
});