0. npm install
1. Open "File -> Settings -> External tools".
2. Create two tools:
    a)
        Name: "copy target" 
        Program: "node"
        Arguments: "C:\Games\DevPlugin\path-to-fiddler.js $FilePath$ target"
    b)
        Name: "copy source" 
        Program: "node"
        Arguments: "C:\Games\DevPlugin\path-to-fiddler.js $FilePath$"
3. Add two buttons to main toolbar.
4. Profit.