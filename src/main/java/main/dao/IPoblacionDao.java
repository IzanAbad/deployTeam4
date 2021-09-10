package main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import main.dto.Poblacion;

/*
 * 	@autor Diego Manriquez Canales
 * 	@version 0.1
 * 
 */

public interface IPoblacionDao extends JpaRepository<Poblacion, Integer>{

}
