import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {

  name: string = "";
  direccion: string = "Rambla Nova 123, 43001, Tarragona";
  ubi_lat: number = 41.132424;
  ubi_long: number = 1.2522;
  precio_noche: number = 67;
  valoracion: string = "Excelente";
  telefono: string = "977112233";
  imagen: string = "https://drive.google.com/file/d/1w73oJ5JJYMBtheq7ssAdycC9JI4i9ftw/view?usp=sharing";
  categoria: number = 4;
  poblation: any = {
    id_poblacion: 1,
    nombre: 'Tarragona',
    ubi_lat: 41.11667,
    ubi_long: 1.25
  }
  distancia: number = Math.round(this.getDistancia(this.ubi_lat, this.ubi_long)*100)/100;
  numbers: Array<number> = [];
  focus_point = {
    lat: this.ubi_lat,
    lng: this.ubi_long
  }
  marker = {
    position: this.focus_point,
    label: {
      color: 'white',
      text: this.acRoute.snapshot.params.name
    },
    clickeable: true,
    options: {
      animation: google.maps.Animation.DROP
    }
  }

  constructor(private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.acRoute.snapshot.params.name;
    let i = 0;
    while(i<this.categoria){
      this.numbers.push(i);
      i++;
    }
  }

  getDistancia(lat: number, long: number){
    return Math.sqrt(Math.pow(this.poblation.ubi_lat-lat, 2)+Math.pow(this.poblation.ubi_long-long, 2));
  }

}
