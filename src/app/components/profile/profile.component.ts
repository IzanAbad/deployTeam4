import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ActivatedRoute } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  nombre = "Diego";
  apellidos = "Manríquez Canales";
  email = "ejemplo@dominio.com";
<<<<<<< Updated upstream
  historial = "Vacío";

  constructor() { }

  ngOnInit(): void {
=======
  historial = "...";

  constructor(private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.acRoute.snapshot.params.user;
>>>>>>> Stashed changes
  }

}
