package main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import main.dto.Poblacion;

public interface IPoblacionDao extends JpaRepository<Poblacion, Integer>{

}
