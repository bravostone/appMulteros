import {Injectable} from "@angular/core";
import { Router } from '@angular/router';
import { Usuario } from "../interfaces/usuario.interface";

@Injectable()
export class StorageService {
  private localStorageService;
  private currentUsuario : Usuario = null;
  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentUsuario = this.loadSessionData();
  }
  setCurrentSession(session: Usuario): void {
    this.currentUsuario = session;
    this.localStorageService.setItem('currentUser', JSON.stringify(session));
  }
  loadSessionData(): Usuario{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return (sessionStr) ? <Usuario> JSON.parse(sessionStr) : null;
  }
  getCurrentSession(): Usuario {
    return this.currentUsuario;
  }
  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentUser');
    this.currentUsuario = null;
  }
  getCurrentUser(): Usuario {
    var session: Usuario = this.getCurrentSession();
    return session;
  };
  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };
  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session.Token != null ? session.Token : null);
  };
  logout(): void{
    this.removeCurrentSession();
    this.router.navigate(['/login-component']);
  }
}