import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { LoginComponent } from './components/login-component/login-component';
import { DetailsMarca } from './components/details-marca/details-marca';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { ComprasComponent } from './components/compras-component/compras-component';
import { InsertarCompra } from './components/insertar-compra/insertar-compra';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"detailsmarca/:marca",component:DetailsMarca},
  {path:"perfil",component:PerfilComponent},
  {path:"compras",component:ComprasComponent},
  {path:"insertcompra",component:InsertarCompra},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
