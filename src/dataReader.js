import { sys } from 'typescript';

const path = require('path');
const fs = require('fs');
const app = require('electron').remote.app;

export default class DataReader{
    constructor(){
       
        this.content = {
            folderPath: app.getPath('userData')
        };
       if(!fs.existsSync(path.join(app.getPath('userData'),'systemSettings.json'))){
            fs.writeFileSync(path.join(app.getPath('userData'), 'systemSettings.json'), JSON.stringify(this.content));
        }
        this.systemSettings = JSON.parse(fs.readFileSync(`${app.getPath('userData')}/systemSettings.json`));
        
      
        console.log('Data Reader Class was constructed');
        this.folderPath = this.systemSettings.folderPath != null ? this.systemSettings.folderPath : app.getPath('userData');
        

        this.items = {};
        this.clientes = {};
        this.settings = {};
        this.reloadObject();
    }

    reloadObject(){
        if(!fs.existsSync(path.join(this.folderPath,'itemsList.json'))){
            this.items = JSON.parse(fs.readFileSync(`${app.getAppPath()}/src/assets/configurations/itemsList.json`));
            fs.writeFileSync(path.join(this.folderPath, 'itemsList.json'), JSON.stringify(this.items));
        }
        else this.items = JSON.parse(fs.readFileSync(`${this.folderPath}/itemsList.json`));
        //console.log(this.items);
    

        if(!fs.existsSync(path.join(this.folderPath,'clientList.json'))){
            this.clientes = JSON.parse(fs.readFileSync(`${app.getAppPath()}/src/assets/configurations/clientList.json`));
            fs.writeFileSync(path.join(this.folderPath, 'clientList.json'), JSON.stringify(this.clientes));
        }
        else this.items = JSON.parse(fs.readFileSync(`${this.folderPath}/clientList.json`));


        if(!fs.existsSync(path.join(this.folderPath,'settings.json'))){
            this.settings = JSON.parse(fs.readFileSync(`${app.getAppPath()}/src/assets/configurations/settings.json`));
            fs.writeFileSync(path.join(this.folderPath, 'settings.json'), JSON.stringify(this.settings));
        }
        else this.settings = JSON.parse(fs.readFileSync(`${this.folderPath}/settings.json`));
    }

    changeFolder(newPath){
       this.systemSettings.folderPath = newPath;
       fs.writeFileSync(`${app.getPath('userData')}/systemSettings.json`, JSON.stringify(this.systemSettings));
       this.folderPath = this.systemSettings.folderPath;
    }

    updateClientes(clientes){
        this.clientes = clientes;
        fs.writeFileSync(`${this.folderPath}/clientList.json`, JSON.stringify(this.clientes));
    }

    updateSettings(settings){
        this.settings = settings;
        fs.writeFileSync(`${this.folderPath}/settings.json`, JSON.stringify(this.settings));
    }

    updateSystemSettings(sysSettings){
        this.systemSettings = sysSettings;
        fs.writeFileSync(`${app.getPath('userData')}/systemSettings.json`, JSON.stringify(this.systemSettings));
    }

    updateItems(items){
        this.items = items;
        fs.writeFileSync(`${this.folderPath}/itemsList.json`, JSON.stringify(this.items));
        console.log('Items updated Succesfully');
    }

    readItems(){
        this.items = JSON.parse(fs.readFileSync(`${this.folderPath}/itemsList.json`));
    }

    readClientes(){
        this.clientes = JSON.parse(fs.readFileSync(`${this.folderPath}/clientList.json`));
    }

    readSettings(){
        this.settings = JSON.parse(fs.readFileSync(`${this.folderPath}/settings.json`));
    }

    getClientes(){
        this.readClientes();
        return this.clientes.clientes;
    }

    getItems(){
        this.readItems();
        return this.items.items;
    }

    getAdvancedItems(){
        this.readItems();
        console.log("Advanced Items where called");
        console.log(this.items);
        return this.items;
    }

    getSettings(){
        this.readSettings();
        return this.settings;
    }

}
