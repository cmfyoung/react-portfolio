export default function Resume() {
  const pdfUrl = 'https://drive.google.com/file/d/1E5tWYIRQAgMYc8yzrxTFMcQzh2fxjScd/view?usp=sharing';  
  
  return (
      <div>
        <h1>Resume</h1> 
        <a href={pdfUrl}>
        View Resume (PDF)
      </a>
    </div>
  );
};

