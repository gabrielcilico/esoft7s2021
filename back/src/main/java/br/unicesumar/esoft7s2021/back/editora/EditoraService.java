package br.unicesumar.esoft7s2021.back.editora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EditoraService {

    @Autowired
    private EditoraRepository repository;

    public Editora save(Editora editora) {
        return repository.save(editora);
    }

    public Page<Editora> getAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Optional<Editora> getById(String id) {
        return repository.findById(id);
    }

    public void delete(String id) {
        repository.deleteById(id);
    }

    public List<Editora> getByNome(String nome) {
        return (List<Editora>) repository.findByNomeContendo(nome);
    }
}
