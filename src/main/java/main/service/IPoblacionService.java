package main.service;

import java.util.List;
import main.dto.Poblacion;
import main.dto.Hotel;

/*
 * 	@autor Diego Manriquez Canales
 * 	@version 0.2
 * 
 */

public interface IPoblacionService {

	public List<Poblacion> listar_poblaciones();
	
	public Poblacion buscar_id(int id);
	
	public Poblacion insertar_poblacion(Poblacion poblacion);
	
	public Poblacion actualizar_poblacion(Poblacion poblacion);
	
	public String eliminar_poblacion(int id);
	
	// Metodo para buscar por nombre
	public Poblacion findByName(String nombre);
	
	// Metodo para buscar los hoteles de una poblacion
	public List<Hotel> findHotelsByLocation(String nombre);
	
	// Metodo para buscar hoteles por precio dentro de una poblacion
	public List<Hotel> findHotelsByPrice(String nombre, float precio_minimo, float precio_maximo);
	
	// Metodo para buscar hoteles por categoria dentro de una poblacion
	public List<Hotel> findHotelsByCategory(String nombre, int num);
	
	// Metodo para buscar hoteles por valoracion dentro de una poblacion
	public List<Hotel> findHotelsByValoration(String nombre, String val);
	
}
