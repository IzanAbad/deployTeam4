<<<<<<< Updated upstream
import { Poblacion } from "./poblacion.model";

export class Hotel {
  id_hotel: number = 0;
  nombre: string = "";
  categoria: string = "";
  ubi_lat: number = 0;
  ubi_long: number = 0;
  precio_noche: number = 0;
  valoracion: string = "";
  imagen: string = "";
  telefono: string = "";
  id_poblacion: number = 0;
=======
export class Hotel {
  public id_hotel!: number;
  public nombre!: string;
  public categoria!: '1' | '2' | '3' | '4'| '5';
  public ubi_lat!: number;
  public ubi_long!: number;
  public precio_noche!: number;
  public valoracion!: 'basico' | 'bien' | 'muybien' | 'excelente';
  public imagen!: string;
  public telefono!: string;
  public direccion!: string;
>>>>>>> Stashed changes
}
