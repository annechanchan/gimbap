const { app, BrowserWindow } = require('electron');
const path = require( 'path' );
require(path.resolve( __dirname, 'server/index.js'));

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true, 
      enableRemoteModule: true,
    }
  });
  win.loadURL('http://localhost:3000/');
  win.focus();
}

app.whenReady().then(() => {
    app.on('activate', function () {
        // // On macOS it's common to re-create a window in the app when the
        // // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});