package main.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import main.dto.Usuario;

public interface IUsuarioDAO extends JpaRepository<Usuario, Long> {

	Usuario findByUsername(String username);
}