import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
import { Hotel } from 'src/app/models/hotel.model';
import { Poblacion } from 'src/app/models/poblacion.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HtmlParser } from '@angular/compiler';
=======
import { PoblacionService } from 'src/app/services/poblacion.service';
import { Hotel } from 'src/app/models/hotel.model';
import { Poblacion } from 'src/app/models/poblacion.model';
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> Stashed changes

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {

<<<<<<< Updated upstream
  currentPoblation: any = {
    id_poblacion: 0,
    nombre: "Tarragona",
    ubi_lat: 41.11667,
    ubi_long: 1.25
  }
=======
  // Definimos una poblacion por defecto, este atributo cambiara dependiendo de la ciudad buscada
  currentPoblation: Poblacion = {
    id_poblacion: 0,
    nombre: "",
    ubi_lat: 41.15612,
    ubi_long: 1.10687
  }
  // Definimos un punto en la superficie terrestre donde se centrara el mapa
>>>>>>> Stashed changes
  currentCenter = {
    lat: this.currentPoblation.ubi_lat,
    lng: this.currentPoblation.ubi_long
  }
<<<<<<< Updated upstream
  listaKm = [1, 2, 5, 10];

=======

  // Definimos un array para guardar todos los hoteles de la poblacion buscada
  listaAllHotels: Array<Hotel> = [];

  // Definimos un array que usaremos para hacer los filtros
  listaHotelesFiltrados: Array<Hotel> = [];

  // Definimos un array que nos ayudara a pintar las estrellas de la categoria de cada hotel
  listaCategorias: Array<Array<number>> = [];

  // Lista de los marcadores que se mostraran en el mapa
  markers: Array<any> = [];

  // Lista auxiliar para pintar los filtros en el html template
  listaKm = [1, 2, 5, 10];

  // Hotel que tendra los atributos que se marquen en el filtrado
>>>>>>> Stashed changes
  hotel_filtrado: any = {
    categoria: [false, false, false, false, false],
    precio_min: 0,
    precio_max: 0,
    valoracion: [false, false, false, false],
    distancia: 1000
  }

<<<<<<< Updated upstream
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
=======
  constructor(private acRoute: ActivatedRoute, private route: Router, private pobServ: PoblacionService) { }

  ngOnInit(): void {
    // Cogemos el nombre de la ciudad buscada
    this.currentPoblation.nombre=this.capitalize(this.acRoute.snapshot.params.ciudad);
    // Usamos la capa service para obtener una lista con todos los hoteles
    this.pobServ.getHoteles(this.currentPoblation.nombre).subscribe(hoteles => {this.listaAllHotels = hoteles;
      this.crearListas();});
    // Volvemos a usar la capa service para obtener informacion sobra la ciudad buscada
    this.pobServ.getPoblacion(this.currentPoblation.nombre).subscribe(poblacion => {this.currentPoblation = poblacion;
      this.guardar_centro();})
  }

  guardar_centro(){
    this.currentCenter = {
      lat: this.currentPoblation.ubi_lat,
      lng: this.currentPoblation.ubi_long
    }
  }

  crearListas(){

    /*
       Metodo llamado en el ngOnInit que usa la lista de hoteles completa y crea un array auxiliar
       para pintar las estrellas que tiene cada hotel, hace una copia de este array para el filtrado y
       crea una lista de markers para pintarlos en el mapa
    */

    for(let i=0;i<this.listaAllHotels.length;i++){
      // Aprovechamos el bucle para hacer una copia en listaHotelesFiltrados de listaAllHotels
      this.listaHotelesFiltrados.push(this.listaAllHotels[i]);
      // Definimos un array para cada hotel que servira para hacer un for en el html template y pintar el numero de estrellas de este
      let numeritos: Array<number> = [];
      // Cambiamos el tipo de dato de la categoria de string a int
      let auxiliar = this.cambiaTipo(this.listaAllHotels[i].categoria);
      // Y lo usamos para llenar el array de numeritos antes definido
      for(let j=0;j<auxiliar;j++){
        numeritos.push(j);
      }
      // La añadimos a la lista de listas, cada elemento de esta lista correspondra al hotel con el mismo indice
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    }
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
  }

  goHotel(hotel: number, lat: number, long: number){
    // Metodo para ir a la pagina de cada hotel
    this.route.navigate(["hotel-info/"+hotel+"/"+lat+"/"+long]);
  }

  aplicarFiltros() {

    /*
        Metodo que se lanza al aplicar los filtros. Crea una copia de la lista de hoteles completa y dependiendo de las
        opciones marcadas en el filtrado ira eliminando los registros que no cumplen las propiedades.
    */

    // Eliminamos los registros de las lista auxiliares para volver a llenarlas con los hoteles que queden el filtrado
    this.markers = [];
    this.listaCategorias = [];
    this.listaHotelesFiltrados = this.listaAllHotels.slice();

    console.log("Al aplicar los filtros: "+this.hotel_filtrado.valoracion);
    console.log("Al aplicar los filtros: "+this.hotel_filtrado.categoria)

    // Recorremos la lista de todos los hoteles y vamos aplicando los filtros
>>>>>>> Stashed changes
    for(let i=0;i<this.listaAllHotels.length;i++){
      console.log("Estamos estudiando el hotel "+this.listaAllHotels[i].nombre);
      this.eliminarPorDist(this.listaAllHotels[i]);
      this.eliminarPorCat(this.listaAllHotels[i]);
      this.eliminarPorPrecio(this.listaAllHotels[i]);
      this.eliminarPorVal(this.listaAllHotels[i]);
    }
<<<<<<< Updated upstream
    for(let i=0;i<this.listaHotelesFiltrados.length;i++){
=======

    // Al salir del for anterior tenemos que tener en la lista hotelesFiltrados los que cumplen las condiciones
    for(let i=0;i<this.listaHotelesFiltrados.length;i++){
      // La recorremos y actualizamos los markers del mapa
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    }
    console.log(this.listaHotelesFiltrados);
=======
      // Ahora actualizamos la lista de categorias
      let numeritos: Array<number> = [];
      let auxiliar = this.cambiaTipo(this.listaHotelesFiltrados[i].categoria);
      for(let j=0;j<auxiliar;j++){
        numeritos.push(j);
      }
      this.listaCategorias.push(numeritos);
    }

    console.log(this.listaHotelesFiltrados);

>>>>>>> Stashed changes
  }

  eliminarPorCat(hotel: Hotel){
    let condicion = true;
    let estanSelected = false;
    for(let i=0;i<this.hotel_filtrado.categoria.length;i++){
      if(this.hotel_filtrado.categoria[i]==true){
<<<<<<< Updated upstream
        estanSelected = true;
        if(parseInt(hotel.categoria)==i+1){
=======
        // Si no hubiera ninguna casilla seleccionada nunca entrariamos en este if y no aplicariamos el filtro por categoria
        estanSelected = true;
        if(this.cambiaTipo(hotel.categoria)==i+1){
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
        // Si no hubiera ninguna casilla seleccionada nunca entrariamos en este if y no aplicariamos el filtro por valoracion
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    return Math.sqrt(Math.pow(this.currentPoblation.ubi_lat-lat, 2)+Math.pow(this.currentPoblation.ubi_long-long, 2));
=======
    var earthRadius: number = 6371; // En Km

    // Pasamos de grados a radianes para utilizar la formula
    lat = this.degrees_to_radians(lat);
    long = this.degrees_to_radians(long);
    let lat2 = this.degrees_to_radians(this.currentPoblation.ubi_lat);
    let lng2 = this.degrees_to_radians(this.currentPoblation.ubi_long);

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
>>>>>>> Stashed changes
  }
}
