import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name = 'E-commerce App';
  // showCredentials = false;
  // logs:string[] = [];

  // toggleCredentials(){
  //   this.showCredentials = !this.showCredentials;
  //   var mode = this.showCredentials?"shown":"hidden";
  //   this.logs.push(`Credentials were ${mode} at ${new Date().toLocaleString()}`);
  // }

  // getDisplay(){
  //   return this.showCredentials?"":"none";
  // }

//   serverElements = [
//     {
//       type:'server', 
//       name:'TestServer', 
//       content: 'Just a test!'
//     },
//     {
//       type:'blueprint', 
//       name:'Test Blueprint', 
//       content: 'Just a test bluprint!'
//     }];

//       /**
//    * onAddServer
//    */
//   public onServerAdded(serverData: {serverName:string, serverContent: string}) {
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }

//  /**
//   * onAddBlueprint
//   */
//  public onBlueprintAdded(blueprintData: {serverName:string, serverContent: string}) {
//    this.serverElements.push({
//       type: 'blueprint',
//       name: blueprintData.serverName,
//       content: blueprintData.serverContent
//    });
//  }
  values: number[] = [];
  constructor(){}

  public onIncrement(event: {value : number}){
    this.values.push(event.value);
  }
}
