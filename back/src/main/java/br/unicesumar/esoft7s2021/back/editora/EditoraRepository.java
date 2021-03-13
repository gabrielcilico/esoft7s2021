package br.unicesumar.esoft7s2021.back.editora;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EditoraRepository extends JpaRepository<Editora, String> {

    @Query("SELECT a FROM Editora a WHERE UPPER(a.nome) LIKE UPPER(concat('%', concat(?1, '%')))")
    List<Editora> findByNomeContendo(String nome);
}
