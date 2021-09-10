package main.dto;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

/*
 * 	@autor Diego Manríquez Canales
 * 	@version 0.1
 * 
 */

@Entity
@Table(name="poblaciones")
public class Poblacion {
	
	/*
	 * 		Atributos
	 */
	
	// El identificador sera un entero autogenerado
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id_poblacion;
	// El nombre de la poblacion por el cual se buscara
	private String nombre;
	// Dos numeros reales que representaran la latitud y longitud de la poblacion
	private double ubi_lat;
	private double ubi_long;
	
	// Lista de hoteles de la relacion de uno a muchos
	@OneToMany
	@JoinColumn(name="id_poblacion")
	private List<Hotel> hoteles;
	
	/*
	 * 		Constructores
	 */
	
	// Constructor por defecto
	public Poblacion() {
		this.id_poblacion=0;
		this.nombre="";
		this.ubi_lat=0;
		this.ubi_long=0;
	}
	
	// Constructor Principal
	public Poblacion(int id_poblacion, String nombre, double ubi_lat, double ubi_long) {
		this.id_poblacion=id_poblacion;
		this.nombre=nombre;
		this.ubi_lat=ubi_lat;
		this.ubi_long=ubi_long;
	}
	
	/*
	 * 		Getters y Setters
	 */

	// Para el id poblacion
	public int getId_poblacion() {
		return id_poblacion;
	}

	public void setId_poblacion(int id_poblacion) {
		this.id_poblacion = id_poblacion;
	}

	// Para el nombre
	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	// Para la latitud
	public double getUbi_lat() {
		return ubi_lat;
	}

	public void setUbi_lat(double ubi_lat) {
		this.ubi_lat = ubi_lat;
	}

	// Para la longitud
	public double getUbi_long() {
		return ubi_long;
	}

	public void setUbi_long(double ubi_long) {
		this.ubi_long = ubi_long;
	}

	@JsonIgnore
	@OneToMany(fetch=FetchType.LAZY, mappedBy="Hotel")
	public List<Hotel> getHoteles() {
		return hoteles;
	}

	public void setHoteles(List<Hotel> hoteles) {
		this.hoteles = hoteles;
	}

	/*
	 * 		Metodo toString
	 */
	
	@Override
	public String toString() {
		return "Poblacion [id_poblacion=" + id_poblacion + ", nombre=" + nombre + ", ubi_lat=" + ubi_lat + ", ubi_long="
				+ ubi_long + "]";
	}
	
}
