package main.dto;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Enumerated;

/*
 * 	@Autor Diego Manriquez Canales
 * 	@Version 0.1
 * 
 */

@Entity
@Table(name="hoteles")
public class Hotel {

	/*
	 * 		Atributos
	 */
	
	// El identificador sera un entero autogenerado
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_hotel;
	// El nombre sera un String
	private String nombre;
	// La categoria sera un char representando los numeros del 1 al 5
	@Enumerated(EnumType.ORDINAL)
	private Categoria categoria;
	// Dos numeros reales que representaran la latitud y longitud de la ubicacion del hotel
	private double ubi_lat;
	private double ubi_long;
	// El precio por noche sera un float
	private float precio_noche;
	// La valoracion sera un String que solo puede tomar 4 valores
	@Enumerated(EnumType.STRING)
	private Valoracion valoracion;
	// La imagen sera un URL, asi que lo guardamos en un Strign
	private String imagen;
	// El telefono de contacto sera un String de 9 caracteres
	private String telefono;
	// El identificador de la poblacion como foreign key resulta en un objeto Poblacion
	@ManyToOne
	@JoinColumn(name="id_poblacion")
	private Poblacion poblacion;
	
	/*
	 * 		Constructores
	 */
	
	// Por defecto
	public Hotel() {
		this.id_hotel=0;
		this.nombre="";
		this.categoria=Categoria.uno;
		this.ubi_lat=0;
		this.ubi_long=0;
		this.precio_noche=0;
		this.valoracion=Valoracion.basico;
		this.imagen="";
		this.telefono="";
	}

	// Constructor Principal
	public Hotel(int id_hotel, String nombre, Categoria categoria, double ubi_lat, double ubi_long, float precio_noche,
			Valoracion valoracion, String imagen, String telefono, Poblacion poblacion) {
		this.id_hotel = id_hotel;
		this.nombre = nombre;
		this.categoria = categoria;
		this.ubi_lat = ubi_lat;
		this.ubi_long = ubi_long;
		this.precio_noche = precio_noche;
		this.valoracion = valoracion;
		this.imagen = imagen;
		this.telefono = telefono;
		this.poblacion=poblacion;
	}
	
	/*
	 * 		Getters y Setters
	 */

	// Id del Hotel
	public int getId_hotel() {
		return id_hotel;
	}

	public void setId_hotel(int id_hotel) {
		this.id_hotel = id_hotel;
	}

	// Nombre del Hotel
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	// Categoria del Hotel
	public Categoria getCategoria() {
		return categoria;
	}

	public void setCategoria(Categoria categoria) {
		this.categoria = categoria;
	}

	// Ubicacion 
	public double getUbi_lat() {
		return ubi_lat;
	}

	public void setUbi_lat(double ubi_lat) {
		this.ubi_lat = ubi_lat;
	}

	public double getUbi_long() {
		return ubi_long;
	}

	public void setUbi_long(double ubi_long) {
		this.ubi_long = ubi_long;
	}

	// Precio por Noche
	public float getPrecio_noche() {
		return precio_noche;
	}

	public void setPrecio_noche(float precio_noche) {
		this.precio_noche = precio_noche;
	}

	// Valoracion del Hotel
	public Valoracion getValoracion() {
		return valoracion;
	}

	public void setValoracion(Valoracion valoracion) {
		this.valoracion = valoracion;
	}

	// URL de la imagen
	public String getImagen() {
		return imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}

	// Telefono de contacto
	public String getTelefono() {
		return telefono;
	}

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}

	// Objeto de la poblacion donde esta ubicado el hotel
	public Poblacion getPoblacion() {
		return poblacion;
	}

	public void setPoblacion(Poblacion poblacion) {
		this.poblacion = poblacion;
	}

	/*
	 * 		Metodo toString
	 */
	
	@Override
	public String toString() {
		return "Hotel [id_hotel=" + id_hotel + ", nombre=" + nombre + ", categoria=" + categoria + ", ubi_lat="
				+ ubi_lat + ", ubi_long=" + ubi_long + ", precio_noche=" + precio_noche + ", valoracion=" + valoracion
				+ ", imagen=" + imagen + ", telefono=" + telefono + ", poblacion=" + poblacion + "]";
	}	
}
