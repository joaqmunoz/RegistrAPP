import { Injectable } from '@angular/core';
import { getAuth, Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(Auth);

  // Método para iniciar sesión con correo y contraseña
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Método para cerrar sesión
  logout() {
    return signOut(this.auth);
  }
  
}
