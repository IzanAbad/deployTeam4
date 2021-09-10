package main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import main.dto.Hotel;

/*
 * 	@autor Diego Manriquez Canales
 * 	@version 0.1
 * 
 */

public interface IHotelDao extends JpaRepository<Hotel, Integer>{
 
}
