import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Definindo a versão do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ViewPdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Função para definir o número de páginas do PDF
  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/public/PDF/Curriculo1.pdf" onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

      <div>
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Anterior
        </button>
        <span>{`Página ${pageNumber} de ${numPages}`}</span>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default ViewPdf;
