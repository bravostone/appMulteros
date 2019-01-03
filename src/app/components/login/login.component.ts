import { Component,OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import { LoginObject } from "../../interfaces/LoginObject";
import { Router } from "@angular/router";
import { StorageService } from "../../services/storage.service";
import { Usuario } from "../../interfaces/usuario.interface";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    public usuario:string="";
    public contrasenia:string="";
    request: LoginObject;
      result: Usuario;

    constructor(private _loginService: LoginService, private router: Router, private storageService: StorageService) {
      }
  
    ngOnInit() {
    }

    onSubmit() {
        this.request = {
            Usuario: this.usuario,
            Contrasena: this.contrasenia,
            domain: ""
          };

        this._loginService.getLogin(this.request).subscribe(
            data => this.correctLogin(data),
            error => this.error = JSON.parse(error._body)
        );
      }

      private correctLogin(data: Usuario){
       
        if(data.Exito)
        {
        this.storageService.setCurrentSession(data);
        this.router.navigate(['/menu'])
        }else{
            alert("Usuario y/o contraseña incorrecta");
        }
    }

    private error(data: Usuario){
        alert("Usuario y/o contraseña incorrecta");
    }
  }