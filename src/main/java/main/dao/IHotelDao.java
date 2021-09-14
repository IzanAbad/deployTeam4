package main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import main.dto.Hotel;


public interface IHotelDao extends JpaRepository<Hotel, Integer>{
 
}
