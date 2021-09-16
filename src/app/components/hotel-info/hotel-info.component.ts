import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< Updated upstream

=======
import { Hotel } from 'src/app/models/hotel.model';
import { HotelService } from 'src/app/services/hotel.service';
>>>>>>> Stashed changes

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {

<<<<<<< Updated upstream
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
=======
  // Definimos una instancia de Hotel para guardar la informacion
  hotel: Hotel = {
    id_hotel: 0,
    nombre: '',
    categoria: '1',
    ubi_lat: 0,
    ubi_long: 0,
    precio_noche: 0,
    valoracion: 'basico',
    imagen: '',
    telefono: '',
    direccion: '',
  }

  // Calculamos la distancia del hotel al centro de la ciudad
  distancia: number = 0;

  // Array auxiliar para pintar las estrellas de la categoria del hotel
  numbers: Array<number> = [];

  // Guardamos las coordenadas de la poblacion para centrar el mapa y construimos un marker
  focus_point = {
    lat: 0,
    lng: 0
  }
  marker = {
    position: {
      lat: this.hotel.ubi_lat,
      lng: this.hotel.ubi_long
    },
    label: {
      color: 'white',
      text: '·'
>>>>>>> Stashed changes
    },
    clickeable: true,
    options: {
      animation: google.maps.Animation.DROP
    }
  }

<<<<<<< Updated upstream
  constructor(private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.acRoute.snapshot.params.name;
    let i = 0;
    while(i<this.categoria){
      this.numbers.push(i);
      i++;
=======
  constructor(private acRoute: ActivatedRoute, private hotServ: HotelService) { }

  ngOnInit(): void {
    this.hotel.id_hotel = this.acRoute.snapshot.params.id;
    this.focus_point.lat = parseFloat(this.acRoute.snapshot.params.lat);
    this.focus_point.lng = parseFloat(this.acRoute.snapshot.params.long);

    this.hotServ.getHotel(this.hotel.id_hotel).subscribe(hotelito => {this.hotel = hotelito;
      this.crearMarkersYNums();});;
  }

  crearMarkersYNums(){
    this.marker = {
      position: {
        lat: this.hotel.ubi_lat,
        lng: this.hotel.ubi_long
      },
      label: {
        color: 'white',
        text: '·'
      },
      clickeable: true,
      options: {
        animation: google.maps.Animation.DROP
      }
    }
    this.distancia = Math.round(this.getDistancia(this.hotel.ubi_lat, this.hotel.ubi_long)*100)/100;
    for(let i=0;i<this.cambiaTipo(this.hotel.categoria);i++){
      this.numbers.push(i);
>>>>>>> Stashed changes
    }
  }

  getDistancia(lat: number, long: number){
<<<<<<< Updated upstream
    return Math.sqrt(Math.pow(this.poblation.ubi_lat-lat, 2)+Math.pow(this.poblation.ubi_long-long, 2));
=======

    var earthRadius: number = 6371; // En Km

    // Pasamos de grados a radianes para utilizar la formula
    lat = this.degrees_to_radians(lat);
    long = this.degrees_to_radians(long);
    let lat2 = this.degrees_to_radians(this.focus_point.lat);
    let lng2 = this.degrees_to_radians(this.focus_point.lng);

    let dlon = (lng2-long);
    let dlat = (lat2-lat);

    let sinlat = Math.sin(dlat / 2);
    let sinlon = Math.sin(dlon / 2);

    let a = (sinlat * sinlat) + Math.cos(lat)*Math.cos(lat2)*(sinlon*sinlon);
    let c = 2 * Math.asin (Math.min(1.0, Math.sqrt(a)));

    let distanceInKm = earthRadius * c;

    return distanceInKm;
  }

  degrees_to_radians(degrees: number){
    var pi = Math.PI;
    return degrees * (pi/180);
  }

  capitalize(cadena: string){
    // Metodo para poner la primera letra en mayuscula y el resto en minuscula
    cadena = cadena.toLowerCase();
    let primera_letra = cadena.substring(0,1).toUpperCase();
    return primera_letra+cadena.substring(1);
  }

  cambiaTipo(categ: string){

    // Metodo para cambiar a entero los string uno, dos, tres, cuatro y cinco

    switch(categ){
      case 'uno':
        return 1;
      case 'dos':
        return 2;
      case 'tres':
        return 3;
      case 'cuatro':
        return 4;
      default:
        return 5;
    }
>>>>>>> Stashed changes
  }

}
