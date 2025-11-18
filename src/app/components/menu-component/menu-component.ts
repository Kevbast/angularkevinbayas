import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.css',
})
export class MenuComponent implements OnInit{
@Output()updateToken:EventEmitter<any>=new EventEmitter()

public marcas!:Array<string>;
constructor(private _service:ServiceCubos,private _router:Router){}
  ngOnInit(): void {
    this._service.getMarcas().subscribe(response=>{
      this.marcas=response;
      console.log("Cargando marcas:"+ this.marcas);
    })
  }

  cerrarSesion():void{
    this._service.cerrarSesion();
    console.log("SESION CERRADA!")
    this.updateToken.emit();
    this._router.navigate(["/login"])
  }

}
