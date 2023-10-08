import React from 'react';


function PDFDownloadButton() {
  const handleDownload = () => {
    // Create a link to the PDF file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with the actual path to your PDF file
    link.download = 'downloaded-pdf.pdf'; // Rename the downloaded file if needed

    // Trigger the download
    link.click();
  };

  return (
    <div>
      <button className='absolute top-0 right-0 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 m-2 mt-8 rounded-full' onClick={handleDownload}>Resume</button>
    </div>
  );
}

export default PDFDownloadButton;
