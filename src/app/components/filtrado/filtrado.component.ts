import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel.model';
import { Poblacion } from 'src/app/models/poblacion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {

  currentPoblation: any = {
    id_poblacion: 0,
    nombre: "Tarragona",
    ubi_lat: 41.11667,
    ubi_long: 1.25
  }
  currentCenter = {
    lat: this.currentPoblation.ubi_lat,
    lng: this.currentPoblation.ubi_long
  }
  listaKm = [1, 2, 5, 10];

  hotel_filtrado: any = {
    categoria: [false, false, false, false, false],
    precio_min: 0,
    precio_max: 0,
    valoracion: [false, false, false, false],
    distancia: 1000
  }

  listaAllHotels: Array<any> = [
    {
      id_hotel: 2,
      nombre: 'H10',
      categoria: '4',
      ubi_lat: 41.115248,
      ubi_long: 1.256901,
      precio_noche: 150,
      valoracion: 'excelente',
      imagen: 'url',
      telefono: '900400466',
      id_poblacion: 1,
    },
    {
      id_hotel: 4,
      nombre: 'Astari',
      categoria: '3',
      ubi_lat: 41.117412,
      ubi_long: 1.265011,
      precio_noche: 70,
      valoracion: 'muybien',
      imagen: 'url',
      telefono: '977236900',
      id_poblacion: 1
    }
  ];

  listaHotelesFiltrados: Array<any> = [];

  listaCategorias: Array<Array<number>> = [];

  markers: Array<any> = []

  constructor(private acRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    // Cogemos el nombre de la ciudad buscada
    this.currentPoblation.nombre=this.acRoute.snapshot.params.ciudad;
    // Haremos una lista de listas donde guardaremos el numero de estrellas de cada hotel
    // El indice de cada lista se correspondra con el indice del hotel en listaAllHotels
    let i = 0;
    while(i<this.listaAllHotels.length){
      // Aprovechamos el bucle para hacer una copia en listaHotelesFiltrados de listaAllHotels
      this.listaHotelesFiltrados.push(this.listaAllHotels[i]);
      let j = 0;
      let numeritos: Array<number> = [];
      while(j<parseInt(this.listaAllHotels[i].categoria)){
        numeritos.push(j);
        j++;
      }
      this.listaCategorias.push(numeritos);
      // Guardamos los datos necesarios de cada hotel en un marker para que en un principio salgan todos en el mapa
      this.markers.push({
        position: {
          lat: this.listaAllHotels[i].ubi_lat,
          lng: this.listaAllHotels[i].ubi_long
        },
        label: {
          color: 'white',
          text: ""+(i+1)
        },
        clickeable: true,
        options: {
          animation: google.maps.Animation.DROP
        }
      });
      i++;
    }
    console.log("listaValor al inicio: "+this.hotel_filtrado.valoracion);
  }

  goHotel(hotel: string){
    this.route.navigate(["hotel-info/"+hotel]);
  }

  aplicarFiltros() {
    this.markers = [];
    this.listaHotelesFiltrados = this.listaAllHotels.slice();
    console.log(this.listaHotelesFiltrados);
    console.log("Al aplicar los filtros: "+this.hotel_filtrado.valoracion);
    for(let i=0;i<this.listaAllHotels.length;i++){
      console.log("Estamos estudiando el hotel "+this.listaAllHotels[i].nombre);
      this.eliminarPorDist(this.listaAllHotels[i]);
      this.eliminarPorCat(this.listaAllHotels[i]);
      this.eliminarPorPrecio(this.listaAllHotels[i]);
      this.eliminarPorVal(this.listaAllHotels[i]);
    }
    for(let i=0;i<this.listaHotelesFiltrados.length;i++){
      this.markers.push({
        position: {
          lat: this.listaHotelesFiltrados[i].ubi_lat,
          lng: this.listaHotelesFiltrados[i].ubi_long
        },
        label: {
          color: 'white',
          text: ""+(i+1)
        },
        clickeable: true,
        options: {
          animation: google.maps.Animation.DROP
        }
      });
    }
    console.log(this.listaHotelesFiltrados);
  }

  eliminarPorCat(hotel: Hotel){
    let condicion = true;
    let estanSelected = false;
    for(let i=0;i<this.hotel_filtrado.categoria.length;i++){
      if(this.hotel_filtrado.categoria[i]==true){
        estanSelected = true;
        if(parseInt(hotel.categoria)==i+1){
          // Si la categoria del hotel coincide con alguna de las estrellas del filtrado cambiamos
          // el valor de condicion para indicar que el hotel no tiene que ser borrado
          condicion = false;
        }
      }
    }
    if(condicion==true && estanSelected==true){
      // Si no se ha cambiado el valor de condicion y hay algun checkbox seleccionado, eliminamos el hotel
      this.listaHotelesFiltrados.splice(this.listaHotelesFiltrados.indexOf(hotel), 1);
    }
  }

  eliminarPorPrecio(hotel: Hotel){
    if(this.hotel_filtrado.precio_min!=0 && hotel.precio_noche<this.hotel_filtrado.precio_min){
      this.listaHotelesFiltrados.splice(this.listaHotelesFiltrados.indexOf(hotel), 1);
    }
    if(this.hotel_filtrado.precio_max!=0 && hotel.precio_noche>this.hotel_filtrado.precio_max){
      this.listaHotelesFiltrados.splice(this.listaHotelesFiltrados.indexOf(hotel), 1);
    }
  }

  eliminarPorVal(hotel: Hotel){
    let condicion = true;
    let estanSelected = false;
    for(let i=0;i<this.hotel_filtrado.valoracion.length;i++){
      if(this.hotel_filtrado.valoracion[i]==true){
        estanSelected = true;
        switch(i){
          case 0:
            if(hotel.valoracion=="basico") condicion=false;
            break;
          case 1:
            if(hotel.valoracion=="bien") condicion=false;
            break;
          case 2:
            if(hotel.valoracion=="muybien") condicion=false;
            break;
          default:
            if(hotel.valoracion=="excelente") condicion=false;
            break;
        }
      }
    }
    if(condicion==true && estanSelected==true){
      // Si no ha coincidido con ninguna de las valoraciones seleccionadas y mininmo hay una seleccionada eliminamos el hotel
      this.listaHotelesFiltrados.splice(this.listaHotelesFiltrados.indexOf(hotel), 1);
    }
  }

  eliminarPorDist(hotel: Hotel){
    // Si el filtro es 11 quiere decir que buscamos los hoteles que esten a mas de 10km del centro
    if(this.hotel_filtrado.distancia=='11'){
      if(10>this.getDistancia(hotel.ubi_lat, hotel.ubi_long)){
        // Si la distancia es menor que 10 eliminamos este hotel de la lista
        this.listaHotelesFiltrados.splice(this.listaHotelesFiltrados.indexOf(hotel), 1);
      }
    }else{
      // Si el filtro no es 11 quiere decir que buscamos que esten a menos km que el value del radio button
      // Si no hay ninguno clicado tenemos por defecto 1000km
      if(this.hotel_filtrado.distancia<this.getDistancia(hotel.ubi_lat, hotel.ubi_long)){
        this.listaHotelesFiltrados.splice(this.listaHotelesFiltrados.indexOf(hotel), 1);
      }
    }
  }

  getDistancia(lat: number, long: number){
    return Math.sqrt(Math.pow(this.currentPoblation.ubi_lat-lat, 2)+Math.pow(this.currentPoblation.ubi_long-long, 2));
  }
}
