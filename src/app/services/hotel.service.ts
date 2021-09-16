<<<<<<< Updated upstream
import { Injectable } from '@angular/core';
=======
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel.model';
>>>>>>> Stashed changes

@Injectable({
  providedIn: 'root'
})
export class HotelService {

<<<<<<< Updated upstream
  constructor() { }
=======
  constructor(private http: HttpClient) { }

  public getHotel(id_hotel: number): Observable<Hotel> {
    return this.http.get<Hotel>("https://team4-back-end.herokuapp.com/api/hoteles/"+id_hotel);
  }
>>>>>>> Stashed changes
}
