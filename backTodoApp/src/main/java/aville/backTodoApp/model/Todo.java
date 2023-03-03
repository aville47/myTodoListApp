package aville.backTodoApp.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @author aville
 * @version 1.0
 * @since 03/03/2023
 */

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;
    @Column(unique = true)
    @NotEmpty(message = "The todo Title cannot be empty.")
    private String title;
    private Boolean isCompleted;
    private LocalDateTime createdAt;
    private String description;

}
