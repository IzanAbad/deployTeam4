package main.service;

import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import main.dao.IPoblacionDao;
import main.dto.Hotel;
import main.dto.Poblacion;
import main.dto.Categoria;
import main.dto.Valoracion;

/*
 * 	@autor Diego Manriquez Canales
 * 	@version 0.2
 * 
 */

@Service
public class PoblacionServiceImpl implements IPoblacionService {

	@Autowired
	IPoblacionDao pobDao;
	
	@Override
	public List<Poblacion> listar_poblaciones(){
		return pobDao.findAll();
	}
	
	@Override
	public Poblacion buscar_id(int id){
		return pobDao.findById(id).get();
	}
	
	@Override
	public Poblacion insertar_poblacion(Poblacion pob) {
		return pobDao.save(pob);
	}

	@Override
	public Poblacion actualizar_poblacion(Poblacion pob) {
		return pobDao.save(pob);
	}
	
	@Override
	public String eliminar_poblacion(int id) {
		pobDao.deleteById(id);
		return "Eliminado el registro con ID: "+id;
	}
	
	@Override
	public Poblacion findByName(String nombre) {
		List<Poblacion> lista = pobDao.findAll();
		for(int i=0;i<lista.size();i++) {
			if(lista.get(i).getNombre().toLowerCase().equals(nombre.toLowerCase())) {
				return lista.get(i);
			}
		}
		return null;
	}
	
	@Override
	public List<Hotel> findHotelsByLocation(String nombre){
		Poblacion pobla = findByName(nombre);
		if(pobla==null) {
			List<Hotel> listita = new ArrayList<Hotel>();
			return listita;
		}
		return pobla.getHoteles();
	}
	
	@Override
	public List<Hotel> findHotelsByPrice(String nombre, float precio_minimo, float precio_maximo){
		List<Hotel> hoteles_en_poblacion = findHotelsByLocation(nombre);
		List<Hotel> listaFinal = new ArrayList<Hotel>();
		for(int i=0;i<hoteles_en_poblacion.size();i++) {
			if(hoteles_en_poblacion.get(i).getPrecio_noche()<=precio_maximo && hoteles_en_poblacion.get(i).getPrecio_noche()>=precio_minimo) {
				listaFinal.add(hoteles_en_poblacion.get(i));
			}
		}
		return listaFinal;	
		
	}
		
	@Override
	public List<Hotel> findHotelsByCategory(String nombre, int num){
		List<Hotel> hoteles_en_poblacion = findHotelsByLocation(nombre);
		List<Hotel> hotels = new ArrayList<Hotel>();
		Categoria cat;
		if(num<=5 && num>=1) {
			switch(num) {
			case 1:
				cat = Categoria.valueOf("uno");
				break;
			case 2:
				cat = Categoria.valueOf("dos");
				break;
			case 3:
				cat = Categoria.valueOf("tres");
				break;
			case 4:
				cat = Categoria.valueOf("cuatro");
				break;
			case 5:
				cat = Categoria.valueOf("cinco");
				break;
			default:
				cat = Categoria.valueOf("uno");
			}
			for(int i=0;i<hoteles_en_poblacion.size();i++) {
				if(hoteles_en_poblacion.get(i).getCategoria().compareTo(cat)==0) {
					hotels.add(hoteles_en_poblacion.get(i));
				}
			}
		}
		return hotels;		
	}
	
	@Override
	public List<Hotel> findHotelsByValoration(String nombre, String val){
		List<Hotel> listaFinal = new ArrayList<Hotel>();
		if(val.toLowerCase().equals("basico") || val.toLowerCase().equals("bien") || val.toLowerCase().equals("muybien") || val.toLowerCase().equals("excelente")) {
				Valoracion valoracion = Valoracion.valueOf(val);
				List<Hotel> listaAll = findHotelsByLocation(nombre);
				for(int i=0;i<listaAll.size();i++) {
					if(listaAll.get(i).getValoracion().compareTo(valoracion)==0) {
						listaFinal.add(listaAll.get(i));
					}
				}
		}
		return listaFinal;
	}
}
