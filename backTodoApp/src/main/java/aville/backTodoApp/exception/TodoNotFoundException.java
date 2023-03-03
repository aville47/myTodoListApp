package aville.backTodoApp.exception;

/**
 * @author aville
 * @version 1.0
 * @since 03/03/2023
 */

public class TodoNotFoundException extends RuntimeException {

    public TodoNotFoundException(String message) {
        super(message);
    }

}
