import { Component, OnInit } from '@angular/core';
import {StorageService} from "../.../../../../services/storage.service";
import { Usuario } from "../../../interfaces/usuario.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  user: Usuario;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

  cerrarSesion(): void{
    this.storageService.logout();
  }
}