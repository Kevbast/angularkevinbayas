import { Component, OnInit } from '@angular/core';
import { Compra } from '../../models/compra';
import { ServiceCubos } from '../../services/service.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras-component',
  standalone: false,
  templateUrl: './compras-component.html',
  styleUrl: './compras-component.css',
})
export class ComprasComponent implements OnInit{
public compras!:Array<Compra>;
constructor(private _service:ServiceCubos,private _router:Router){}
ngOnInit(): void {
  
  if(this._service.getToken()){
    this._service.getCompras().subscribe(response=>{
    this.compras=response;
    })
  }else{
  this._router.navigate(["/login"])
  }
}

}
