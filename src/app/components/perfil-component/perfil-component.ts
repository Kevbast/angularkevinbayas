import { Component, OnInit } from '@angular/core';
import { Manage } from '../../models/manage';
import { ServiceCubos } from '../../services/service.cubos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  templateUrl: './perfil-component.html',
  styleUrl: './perfil-component.css',
})
export class PerfilComponent implements OnInit{
public user!:Manage;

constructor(private _service:ServiceCubos,private _router:Router){}

ngOnInit(): void {
  if(this._service.getToken()){
    this._service.getPerfil().subscribe(response=>{
      this.user=response;
    })
  }else{
  this._router.navigate(["/login"])
  }
}

}
