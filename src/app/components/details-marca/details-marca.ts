import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from '../../services/service.cubos';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubos } from '../../models/cubos';

@Component({
  selector: 'app-details-marca',
  standalone: false,
  templateUrl: './details-marca.html',
  styleUrl: './details-marca.css',
})
export class DetailsMarca implements OnInit{
public marcarecibida!:string;
public cubos!:Array<Cubos>;
constructor(private _service:ServiceCubos,private _activeRoute:ActivatedRoute){}
ngOnInit(): void {
  this._activeRoute.params.subscribe((parametros:Params)=>{
      //DENTRO DE PARAMS es donde recibimos los parámetros por su :name
        this.marcarecibida=parametros['marca'];

        //Seguimos con el find
        this._service.findCubosMarca(this.marcarecibida).subscribe(response=>{
          this.cubos=response
        })
      }) 
}
}
