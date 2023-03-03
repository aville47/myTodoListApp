package aville.backTodoApp.service;

import aville.backTodoApp.model.Todo;
import aville.backTodoApp.repository.TodoRepo;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * @author aville
 * @version 1.0
 * @since 03/03/2023
 */

@Service
@Transactional
@AllArgsConstructor
public class TodoService {

    private TodoRepo todoRepo;

    public List<Todo> getTodos(){
        return todoRepo.getAllTodoCreatedAtDesc();
    }

    public Todo save(Todo todo) {
        return todoRepo.saveAndFlush(todo);
    }

    public boolean existById(Long id) {
        return todoRepo.existsById(id);
    }
    public Optional<Todo> getTodoById(Long id) {
        return todoRepo.findById(id);
    }
    public void delete(Long id) {
        todoRepo.deleteById(id);
    }

}
