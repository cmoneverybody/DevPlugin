0. npm install
1. Open "File -> Settings -> External tools".
2. Create two tools:

    a)
    
        Name: "fiddler target" 
        Program: "node.exe"
        Arguments: "C:\sbis\DevPlugin\path-to-fiddler.js $ProjectFileDir$ $FilePath$ target"
        ![target](https://raw.githubusercontent.com/cmoneverybody/DevPlugin/master/docs/fiddler_target.png)
    
    b)
    
        Name: "fiddler source" 
        Program: "node.exe"
        Arguments: "C:\sbis\DevPlugin\path-to-fiddler.js $ProjectFileDir$ $FilePath$"
        ![target](https://raw.githubusercontent.com/cmoneverybody/DevPlugin/master/docs/fiddler_source.png)
3. Add two buttons to main toolbar.
4. Profit.
