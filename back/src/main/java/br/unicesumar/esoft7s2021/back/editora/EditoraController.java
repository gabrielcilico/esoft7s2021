package br.unicesumar.esoft7s2021.back.editora;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/editora")
public class EditoraController {

    @Autowired
    private EditoraService service;

    @PostMapping
    public Editora create(@RequestBody Editora editora) {
        return service.save(editora);
    }

    @GetMapping("/{page}/{size}")
    public List<Editora> getAll(@PathVariable("page") int page, @PathVariable("size") int size) {
        return service.getAll(PageRequest.of(page, size)).toList();
    }

    @GetMapping("/{id}")
    public Editora getById(@PathVariable("id") String id) {
        return service.getById(id).orElseGet(Editora::new);
    }

    @PutMapping
    public Editora update(@RequestBody Editora editora) {
        return service.save(editora);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") String id) {
        service.delete(id);
    }
}
