import { Component, signal } from '@angular/core';
import { ServiceCubos } from './services/service.cubos';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  //Situamos el update en app 
  public token: string |null = null;

  protected readonly title = signal('angularkevinbayas');
  
  constructor(private _service:ServiceCubos){
    this.updateToken();
  }
  updateToken(): void {
    this.token = this._service.getToken();
    console.log("Token vista app: "+this._service.getToken())
  }
}
