import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  @ViewChild('cajaemail') cajaemail!: ElementRef;
  @ViewChild('cajapassword') cajaPassword!: ElementRef;

  constructor(private _service: ServiceCubos, private _router: Router) { }

  login(): void{
    let usuario = this.cajaemail.nativeElement.value;
    let password = this.cajaPassword.nativeElement.value;

    this._service.login(usuario,password).subscribe(response=>{
          localStorage.setItem('authToken', response.response);//establecemos el token
          console.log('Token JWT almacenado:', response.response);
          this._router.navigate(["/perfil"])
    })
  }
}
