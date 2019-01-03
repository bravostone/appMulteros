import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../../interfaces/usuario.interface";
import {StorageService} from "../.../../../../services/storage.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  user: Usuario;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
  }

}
