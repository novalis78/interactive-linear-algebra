const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

async function generateContent() {
  try {
    console.log('Starting content generation from PDF...');
    
    // Path to the PDF
    const pdfPath = path.resolve(__dirname, '../../la.pdf');
    console.log(`Reading PDF from: ${pdfPath}`);
    
    // Read the PDF file
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    
    console.log(`PDF loaded successfully. Total pages: ${data.numpages}`);
    
    // Raw text from the PDF
    const text = data.text;
    
    // Save the raw text for debugging
    const outputDir = path.resolve(__dirname, '../data');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(outputDir, 'raw-text.txt'),
      text,
      'utf8'
    );
    
    console.log('Raw text extracted and saved to data/raw-text.txt');
    
    // Here you would implement the parsing logic to extract chapters, sections,
    // exercises, etc. from the PDF text based on its structure
    
    // For now, we'll create a simple placeholder JSON structure
    const contentStructure = {
      title: 'Interactive Linear Algebra',
      chapters: [
        {
          id: '1',
          title: 'Vectors and Spaces',
          sections: [
            {
              id: '1.1',
              title: 'What is a Vector?',
              content: 'This section introduces the concept of vectors...',
              exercises: [
                {
                  id: '1.1.1',
                  question: 'What is the magnitude of the vector (3, 4)?',
                  answer: '5',
                  hint: 'Use the Pythagorean theorem'
                }
              ]
            }
          ]
        }
      ]
    };
    
    // Save the structured content
    fs.writeFileSync(
      path.join(outputDir, 'content.json'),
      JSON.stringify(contentStructure, null, 2),
      'utf8'
    );
    
    console.log('Content structure saved to data/content.json');
    console.log('Content generation completed!');
    
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

generateContent();