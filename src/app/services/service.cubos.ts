import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Cubos } from "../models/cubos";
import { Manage } from "../models/manage";
import { Compra } from "../models/compra";

@Injectable()
export class ServiceCubos{
    constructor(private _http:HttpClient){}
    //home
    getCubos():Observable<Array<Cubos>>{
        let request="api/cubos";
        let apiUrl=environment.apiCubos + request;
        return this._http.get<Array<Cubos>>(apiUrl);
    }   

    //menu
    getMarcas():Observable<Array<string>>{
        let request="api/cubos/marcas";
        let apiUrl=environment.apiCubos + request;
        return this._http.get<Array<string>>(apiUrl);
    }

    findCubosMarca(marca:string):Observable<Array<Cubos>>{
        let request="api/cubos/cubosmarca/"+marca;
        let apiUrl=environment.apiCubos + request;
        return this._http.get<Array<Cubos>>(apiUrl);
    }

    //Seguimos con el login
    login(nombre: string,contraseña:string): Observable<any> {
        let apiUrl=environment.apiCubos+"api/manage/login";
        let credentials={
            email:nombre,
            password:contraseña
        }
        console.log(credentials);
        return this._http.post<any>(apiUrl, credentials);   
    }
    getToken(): string | null {
    return localStorage.getItem('authToken');
    }

    cerrarSesion(): void{
        localStorage.removeItem("authToken");
        this.getToken();
    }

    //Procedemos con el header del cuerpo
    // Función auxiliar para generar los encabezados con el token
    private createAuthHeaders(): HttpHeaders {
        const token = this.getToken();
        let headers = new HttpHeaders();
        
        if (token) {
            // Si hay token, lo añadimos como Authorization Bearer
            headers = headers.set('Authorization', `Bearer ${token}`);
            console.log("Headers creados manualmente con token.");
        } else {
            console.warn("Advertencia: Intento de acceso a ruta protegida sin token.");
        }
        return headers;
    }

    //Seguimos con lo demás

    getPerfil():Observable<Manage>{
        let request="api/manage/perfilusuario";
        let apiUrl=environment.apiCubos + request;
        // CORRECCIÓN: Aplicar los encabezados aquí
        const headers = this.createAuthHeaders();
        return this._http.get<Manage>(apiUrl, { headers: headers });
    }

    getCompras():Observable<Array<Compra>>{
        let request="api/compra/comprasusuario";
        let apiUrl=environment.apiCubos + request;
        
        // CORRECCIÓN: Aplicar los encabezados aquí
        const headers = this.createAuthHeaders();
        return this._http.get<Array<Compra>>(apiUrl, { headers: headers });
    }
    //HACEMOS LA COMPRA
    insertCompra(idCubo:number):Observable<any>{
        let request="api/compra/insertarpedido/"+idCubo;
        let apiUrl=environment.apiCubos + request;
        // CORRECCIÓN: Aplicar los encabezados aquí
        const headers = this.createAuthHeaders();
        return this._http.post(apiUrl,"", { headers: headers });
    }

}