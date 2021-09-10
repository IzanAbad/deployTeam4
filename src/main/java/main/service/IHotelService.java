package main.service;

import java.util.List;
import main.dto.Hotel;

/*
 * 	@autor Diego Manriquez Canales
 * 	@version 0.1
 * 
 */

public interface IHotelService {
	
	public List<Hotel> listar_hoteles();
	
	public Hotel buscar_id(int id);
	
	public Hotel insertar_hotel(Hotel hotel, int id_pob);
	
	public Hotel actualizar_hotel(Hotel hotel, int id_pob);
	
	public String eliminar_hotel(int id);
	
	// Metodo para buscar hoteles por el nombre
	public List<Hotel> findByName(String nombre);

	// Metodo para buscar hoteles por un rango de precios
	public List<Hotel> findByPrice(float precio_minimo, float precio_maximo);

	// Metodo para buscar hoteles por valoracion
	public List<Hotel> findByValoracion(String val);

	// Metodo para buscar hoteles por categoria
	public List<Hotel> findByCategoria(int num);

}
