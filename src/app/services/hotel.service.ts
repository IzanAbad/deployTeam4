import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }

  public getHotel(id_hotel: number): Observable<Hotel> {
    return this.http.get<Hotel>("https://team4-back-end.herokuapp.com/api/hoteles/"+id_hotel);
  }
}
