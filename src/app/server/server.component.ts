import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId = 10;
    serverStatus = "Active";

    constructor(){
        this.serverId = Math.ceil(Math.random()*10);
        this.serverStatus = Math.random() > 0.5 ?'online':'offline';
    }

    getColor(){
        var color = this.serverStatus == 'online'? 'green' : 'red';
        return color;
    }
}