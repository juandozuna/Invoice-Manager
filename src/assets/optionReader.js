const path = require('path');
const fs = require('fs');
const app = require('electron').remote.app;


export class DataReader{
    constructor(){
        this.folderPath = app.getPath('userData');
        this.systemSettings = JSON.parse(fs.readFileSync(`${app.getPath('userData')}/systemSettings.json`));
        //The settings route will never change, will hold the settings for a specific computer
        if(this.settings.hasOwnProperty('folderPath')) this.folderPath = this.settings.folderPath;
        this.clientes = JSON.parse(fs.readFileSync(`${this.folderPath}/clientList.json`));
        this.items = JSON.parse(fs.readFileSync(`${this.folderPath}/itemsList.json`));
        this.settings = JSON.parse(fs.readFileSync(`${this.folderPath}/settings.json`));
    }

    changeFolder(newPath){
       this.settings.folderPath = newPath;
       fs.writeFileSync(`${app.getPath('userData')}/systemSettings.json`, JSON.stringify(this.settings));
       this.folderPath = this.settings.folderPath;
    }

    updateClientes(clientes){
        this.clientes = clientes;
        fs.writeFileSync(`${this.folderPath}/clientList.json`, JSON.stringify(this.clientes));
    }

    updateSettings(settings){
        this.settings = settings;
        fs.writeFileSync(`${this.folderPath}/settings.json`, JSON.stringify(this.settings));
    }

    updateItems(items){
        this.items = items;
        fs.writeFileSync(`${this.folderPath}/itemsList.json`, JSON.stringify(this.items));
    }

    readItems(){
        this.items = JSON.parse(fs.readFileSync(`${this.folderPath}/itemsList.json`));
    }

    readClientes(){
        this.clientes = JSON.parse(fs.readFileSync(`${this.folderPath}/clientList.json`));
    }

}

