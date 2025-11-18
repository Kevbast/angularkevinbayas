import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { Router } from '@angular/router';
import { Compra } from '../../models/compra';
import { Cubos } from '../../models/cubos';

@Component({
  selector: 'app-insertar-compra',
  standalone: false,
  templateUrl: './insertar-compra.html',
  styleUrl: './insertar-compra.css',
})
export class InsertarCompra implements OnInit{
public compras!:Array<Compra>;
public cubos!:Array<Cubos>;
@ViewChild("selectCubo") selectCubo!:ElementRef;

constructor(private _service:ServiceCubos,private _router:Router){}

  ngOnInit(): void {
    if(this._service.getToken()){
    console.log("Entrando a insert compra")
    this._service.getCubos().subscribe(response=>{
      this.cubos=response;
    })
  }else{
  this._router.navigate(["/login"])
    }
  }

  insertarCompra(){
    let idCubo=parseInt(this.selectCubo.nativeElement.value);
    console.log("Comprando cubo... "+idCubo)

    this._service.insertCompra(idCubo).subscribe(response=>{
      console.log("CUBO COMPRADO!!");
      this._router.navigate(["/compras"])
    })

  }


}
