0. npm install
1. Open "File -> Settings -> External tools".
2. Create two tools:
    a)
        Name: "fiddler target" 
        Program: "node.exe"
        Arguments: "C:\sbis\DevPlugin\path-to-fiddler.js $ProjectFileDir$ $FilePath$ target"
    b)
        Name: "copy source" 
        Program: "node.exe"
        Arguments: "C:\sbis\DevPlugin\path-to-fiddler.js $ProjectFileDir$ $FilePath$"
3. Add two buttons to main toolbar.
4. Profit.
