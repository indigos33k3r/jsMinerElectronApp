const electron = require('electron');
const url = require('url');
const path = require('path');


const {app, BrowserWindow} = electron;


let mainWindow;

// listen for the app to b ready 

app.on("ready", function(){
   // create new window
    mainWindow = new BrowserWindow({ });
    // load the main template 
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname,'main.html'),
        protocol:'file',
        slashes:true
        // file://dhsjd/main.html this is also same
    }));
});