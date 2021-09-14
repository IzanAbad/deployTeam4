package main.controller;

import main.dto.Poblacion;
import main.dto.Hotel;
import main.service.PoblacionServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "https://team4-back-end.herokuapp.com/", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT,RequestMethod.DELETE})
public class PoblacionController {

	@Autowired
	PoblacionServiceImpl pobServ;
	
	@GetMapping("/poblaciones")
	public List<Poblacion> listar_poblaciones(){
		return pobServ.listar_poblaciones();
	}
	
	@GetMapping("/poblaciones/{id_poblacion}")
	public Poblacion buscar_por_id(@PathVariable(name="id_poblacion") int id) {
		return pobServ.buscar_id(id);
	}
	
	@GetMapping("/poblaciones/nombre/{nombre}")
	public Poblacion buscar_por_nombre(@PathVariable(name="nombre") String nombre) {
		return pobServ.findByName(nombre);
	}
	
	@GetMapping("/poblaciones/{nombre}/hoteles")
	public List<Hotel> buscar_hoteles(@PathVariable(name="nombre") String nombre){
		return pobServ.findHotelsByLocation(nombre);
	}
	
	@GetMapping("/poblaciones/{nombre}/hoteles/{min}/{max}")
	public List<Hotel> buscar_por_precio(@PathVariable(name="nombre") String nombre, @PathVariable(name="min") float min, @PathVariable(name="max") float max){
		return pobServ.findHotelsByPrice(nombre, min, max);
	}
	
	@GetMapping("/poblaciones/{nombre}/hoteles/categoria/{cat}")
	public List<Hotel> buscar_por_categoria(@PathVariable(name="nombre") String nombre, @PathVariable(name="cat") int cat){
		return pobServ.findHotelsByCategory(nombre, cat);
	}
	
	@GetMapping("/poblaciones/{nombre}/hoteles/valoracion/{val}")
	public List<Hotel> buscar_por_valoracion(@PathVariable(name="nombre") String nombre, @PathVariable(name="val") String val){
		return pobServ.findHotelsByValoration(nombre, val);
	}
	
	@PostMapping("/poblaciones")
	public Poblacion insertar_poblacion(@RequestBody Poblacion pob) {
		return pobServ.insertar_poblacion(pob);
	}
	
	@PutMapping("/poblaciones/{id_poblacion}")
	public Poblacion actualizar_poblacion(@PathVariable(name="id_poblacion") int id, @RequestBody Poblacion pob) {
		Poblacion poblacion = pobServ.buscar_id(id);
		poblacion.setNombre(pob.getNombre());
		poblacion.setUbi_lat(pob.getUbi_lat());
		poblacion.setUbi_long(pob.getUbi_long());
		poblacion.setHoteles(pob.getHoteles());
		return pobServ.actualizar_poblacion(poblacion);
	}
	
	@DeleteMapping("/poblaciones/{id_poblacion}")
	public String eliminar_poblacion(@PathVariable(name="id_poblacion") int id) {
		return pobServ.eliminar_poblacion(id);
	}
}
