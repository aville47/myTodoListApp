package aville.backTodoApp.repository;

import aville.backTodoApp.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @author aville
 * @version 1.0
 * @since 03/03/2023
 */
public interface TodoRepo extends JpaRepository<Todo, Long> {

    @Query(value="Select * from todo order by created_at desc",nativeQuery = true)
    public List<Todo> getAllTodoCreatedAtDesc();

}
