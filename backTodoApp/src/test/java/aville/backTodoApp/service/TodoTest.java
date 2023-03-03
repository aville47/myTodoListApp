package aville.backTodoApp.service;

import aville.backTodoApp.model.Todo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class TodoTest {

    @Autowired
    private TodoService todoService;

    @Test
    @Transactional
    void addTodoTest() {
        Todo todo = new Todo(7l,"Go Shopping", false, LocalDateTime.now(), "");
        todoService.save(todo);
        assertNotNull(todo.getId());
        assertNotNull(todo.getTitle());
        assertNotNull(todo.getIsCompleted());
        assertNotNull(todo.getCreatedAt());
    }

    @Test
    @Transactional
    void updateTodoTest() {
        Todo todo = new Todo(7l,"Go Shopping", false, LocalDateTime.now(), "");
        todoService.save(todo);
        todo.setDescription("Test");
        todoService.save(todo);
        assertEquals(todo.getDescription(), "Test");
    }

    @Test
    @Transactional
    void deleteTodoByIdTest() {
        Todo todo = new Todo(7l,"Go Shopping", false, LocalDateTime.now(), "");
        todoService.save(todo);
        todoService.delete(todo.getId());
        List<Todo> listTodo = todoService.getTodos();
        assertEquals(listTodo.size(),6);
    }

    @Test
    @Transactional
    void getAllTodosTest() {
        Todo todo = new Todo(7l,"Go Shopping", false, LocalDateTime.now(), "");
        todoService.save(todo);
        List<Todo> listTodo = todoService.getTodos();
        assertEquals(listTodo.size(), 7);
    }

    @Test
    @Transactional
    void getTodoByIdTest() {
        Todo todo = new Todo(7l,"Go Shopping", false, LocalDateTime.now(), "");
        todoService.save(todo);
        Optional<Todo> todoId = todoService.getTodoById(todo.getId());
        assertEquals(todo.getTitle(), "Go Shopping");
    }

}
