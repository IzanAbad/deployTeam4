package main.service;

import main.dto.*;
import main.dao.*;
import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/*
 * 	@autor Diego Manriquez Canales
 * 	@version 0.1
 * 
 */

@Service
public class HotelServiceImpl implements IHotelService {
	
	@Autowired
	IHotelDao hotelDao;
	
	@Autowired
	IPoblacionDao ipobDao;
	
	@Override
	public List<Hotel> listar_hoteles(){
		return hotelDao.findAll();
	}
	
	@Override
	public Hotel buscar_id(int id){
		return hotelDao.findById(id).get();
	}
	
	@Override
	public Hotel insertar_hotel(Hotel hotel, int id_pob) {
		Poblacion pob = ipobDao.findById(id_pob).get();
		hotel.setPoblacion(pob);
		return hotelDao.save(hotel);
	}

	@Override
	public Hotel actualizar_hotel(Hotel hotel, int id_pob) {
		Poblacion pob = ipobDao.findById(id_pob).get();
		hotel.setPoblacion(pob);
		return hotelDao.save(hotel);
	}
	
	@Override
	public String eliminar_hotel(int id) {
		hotelDao.deleteById(id);
		return "Eliminado el registro con ID: "+id;
	}
	
	@Override
	public List<Hotel> findByName(String nombre){
		List<Hotel> listaAll = hotelDao.findAll();
		List<Hotel> listaFinal = new ArrayList<Hotel>();
		for(int i=0;i<listaAll.size();i++) {
			if(listaAll.get(i).getNombre().toLowerCase().equals(nombre.toLowerCase())) {
				listaFinal.add(listaAll.get(i));
			}
		}
		return listaFinal;
	}
	
	@Override
	public List<Hotel> findByPrice(float precio_minimo, float precio_maximo){
		List<Hotel> listaAll = hotelDao.findAll();
		List<Hotel> listaFinal = new ArrayList<Hotel>();
		for(int i=0;i<listaAll.size();i++) {
			if(listaAll.get(i).getPrecio_noche()<=precio_maximo && listaAll.get(i).getPrecio_noche()>=precio_minimo) {
				listaFinal.add(listaAll.get(i));
			}
		}
		return listaFinal;		
	}
	
	@Override
	public List<Hotel> findByValoracion(String val){
		List<Hotel> listaFinal = new ArrayList<Hotel>();
		if(val.toLowerCase().equals("basico") || val.toLowerCase().equals("bien") || val.toLowerCase().equals("muybien") || val.toLowerCase().equals("excelente")) {
				Valoracion valoracion = Valoracion.valueOf(val);
				List<Hotel> listaAll = hotelDao.findAll();
				for(int i=0;i<listaAll.size();i++) {
					if(listaAll.get(i).getValoracion().compareTo(valoracion)==0) {
						listaFinal.add(listaAll.get(i));
					}
				}
		}
		return listaFinal;
	}
	
	@Override
	public List<Hotel> findByCategoria(int num){
		List<Hotel> listaFinal = new ArrayList<Hotel>();
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
			List<Hotel> listaAll = hotelDao.findAll();
			for(int i=0;i<listaAll.size();i++) {
				if(listaAll.get(i).getCategoria().compareTo(cat)==0) {
					listaFinal.add(listaAll.get(i));
				}
			}
		}
		return listaFinal;
	}
}
