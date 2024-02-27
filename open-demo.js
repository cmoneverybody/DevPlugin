const openurl = require('openurl');
const inputFileName = process.argv[2];
const urlPrefix = 'http://localhost:777/DemoStand/app/';

function extractDemoPath(fileName) {
   const matches = fileName.match(/[a-z]+-demo.+/img);
   if (matches && matches.length) {
      let url = matches[0];
      url = url.replaceAll('\\', '/');
      url = url.replaceAll('.tsx', '');
      url = url.replaceAll('.ts', '');
      return url;
   }
   return '';
}

const demoPath = extractDemoPath(inputFileName);
if (demoPath) {
   const url = urlPrefix + demoPath;
   // console.log('\n', url);
   openurl.open(url)
}
