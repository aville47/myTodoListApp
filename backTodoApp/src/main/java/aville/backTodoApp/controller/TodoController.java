package aville.backTodoApp.controller;

import aville.backTodoApp.exception.TodoNotFoundException;
import aville.backTodoApp.model.Todo;
import aville.backTodoApp.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

/**
 * @author aville
 * @version 1.0
 * @since 03/03/2023
 */

@RestController
@RequestMapping("/api/todos")
//@CrossOrigin("http://localhost:4200")
@CrossOrigin("*")
@AllArgsConstructor
public class TodoController {

    private TodoService todoService;


    @GetMapping()
    public List<Todo> getTodosList(){
        return todoService.getTodos();
    }

    @PostMapping()
    public Todo addTodo(@RequestBody Todo todo) {
        return todoService.save(todo);
    }

    @GetMapping("/{id}")
    public Todo getTById(@PathVariable Long id) {
        return todoService.getTodoById(id).orElseThrow(()->new TodoNotFoundException("Requested Todo not found"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> addTodo(@RequestBody Todo todoData, @PathVariable Long id) {
        if (todoService.existById(id)) {
            Todo todo = todoService.getTodoById(id).orElseThrow(()->new TodoNotFoundException("Requested Todo not found"));
            todo.setTitle(todoData.getTitle());
            todo.setCreatedAt(todoData.getCreatedAt());
            todo.setIsCompleted(todoData.getIsCompleted());
            todo.setDescription(todoData.getDescription());
            todoService.save(todo);
            return ResponseEntity.ok().body(todo);
        } else {
            HashMap<String, String> message= new HashMap<>();
            message.put("message", id + " todo not found or matched");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteTodo(@PathVariable Long id) {
        if (todoService.existById(id)) {
            todoService.delete(id);
            HashMap<String, String>message= new HashMap<>();
            message.put("message", id + " todo removed");
            return ResponseEntity.status(HttpStatus.OK).body(message);
        } else {
            HashMap<String, String>message= new HashMap<>();
            message.put("message", id + " todo not found or matched");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(message);
        }
    }

}
