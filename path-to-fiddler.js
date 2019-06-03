const clipboardy = require('clipboardy');
const projectFolder = process.argv[2];
const inputFileName = process.argv[3];
const appFolder = '\\application';
let outputFileName;

function convertToTargetFileName(fileName) {
   if (~fileName.indexOf('.ts')) {
      fileName = fileName.replace('.ts', '.js');
   }
   if (~fileName.indexOf('.less')) {
      fileName = fileName.replace('.less', '.css');
   }
   fileName = fileName.replace(projectFolder, '');
   fileName = fileName.replace(/\\/img, '/');
   return fileName;
}

function convertToSourceFileName(fileName) {
   if (~fileName.indexOf('.ts')) {
      fileName = fileName.replace('.ts', '.js');
   }
   if (~fileName.indexOf('.less')) {
      fileName = fileName.replace('.less', '.css');
   }
   fileName = fileName.replace(projectFolder, projectFolder + appFolder);
   return fileName;
}

if (process.argv[4] === 'target') {
   outputFileName = convertToTargetFileName(inputFileName);
} else {
   outputFileName = convertToSourceFileName(inputFileName);
}
// console.log('\n', outputFileName);
clipboardy.writeSync(outputFileName);