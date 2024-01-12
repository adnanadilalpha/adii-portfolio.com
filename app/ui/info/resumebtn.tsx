// components/DownloadResumeButton.js
const DownloadResumeButton = () => {
    const handleDownload = () => {
      const link = document.createElement('a');
      link.href = '/adnancv.pdf';
      link.download = 'Adnancv.pdf';
      link.click();
    };
  
    return (
      <button className="bg-blue-700 py-2 w-44 rounded-sm hover:bg-white hover:text-blue-700" onClick={handleDownload}>
        Download Resume
      </button>
    );
  };
  
  export default DownloadResumeButton;
  