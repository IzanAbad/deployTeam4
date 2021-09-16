import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  ciudad = '';
  titulo = "NOMAD";
  lista_ciudades = [{
    nombre: 'Tarragona',
    foto: "https://imagenes.20minutos.es/files/article_amp/uploads/imagenes/2021/07/29/anfiteatro-romano-de-tarragona-construido-en-el-siglo-ii.jpeg"
  },
  {
    nombre: 'Barcelona',
    foto: "https://img2.rtve.es/imagenes/ciudades-para-siglo-xxi-barcelona-ciudad-vertebrada-2/1561977573130.jpg"
  },
  {
    nombre: 'Zaragoza',
    foto: "https://static1.abc.es/Media/201509/24/Zaragoza--644x362.jpg"
  },
  {
    nombre: 'Sevilla',
    foto: "https://static.retema.es/media/images/noticias/Ij2f9AbTSKPE8gTsrhv2R96v1t7c3fSW.jpg"
  },
  {
    nombre: 'Madrid',
    foto: "https://viajes.nationalgeographic.com.es/medio/2021/05/12/madrid_987c90d2_1254x836.jpg"
  },
  {
    nombre: 'Girona',
    foto: "https://www.ajuntament.gi/wp-content/uploads/2019/03/imagen-de-la-ciudad-de-gerona-1024x683.jpg"
  }];

  constructor(private router: Router, private carConfig: NgbCarouselConfig) {
    carConfig.interval = 3500;
    carConfig.pauseOnHover = true;
    carConfig.showNavigationArrows = false;
    carConfig.showNavigationIndicators = true;
   }

  ngOnInit(): void {
  }

  buscar(ciudad: string){
    this.router.navigate(["filtros/"+ciudad]);
  }

}
