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
}
