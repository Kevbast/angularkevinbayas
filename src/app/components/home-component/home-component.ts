import { Component, OnInit } from '@angular/core';
import { Cubos } from '../../models/cubos';
import { ServiceCubos } from '../../services/service.cubos';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit{
  public cubos!:Array<Cubos>;
  constructor(private _service:ServiceCubos){}
  ngOnInit(): void {
    this._service.getCubos().subscribe(response=>{
      this.cubos=response;
    })
  }
}
