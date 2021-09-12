import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  ciudad = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscar(ciudad: string){
    this.router.navigate(["filtros/"+ciudad]);
  }

}
