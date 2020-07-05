var electron = require('electron')
var app = electron.app

var ipcMain = electron.ipcMain

var BrowserWindow = electron.BrowserWindow

var win = null

ipcMain.on('message', (event, param) => {
  console.log(param)
})

app.on('ready', function () {
  win = new BrowserWindow({
    // 集成node环境
    webPreferences: { nodeIntegration: true }
  })
  win.loadFile('index.html')
  win.on('closed', function () {
    win = null
  })
})

app.on('window-all-closed', function () {
  app.quit()
})
