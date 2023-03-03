package aville.backTodoApp;

import aville.backTodoApp.model.Todo;
import aville.backTodoApp.repository.TodoRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;

@SpringBootApplication
public class BackTodoAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackTodoAppApplication.class, args);
	}

	@Bean
	CommandLineRunner run(TodoRepo todoRepo) {
		return args -> {
			todoRepo.save(
					new Todo(null,
							"Build backend structure",
							false,
							LocalDateTime.of(2023,01,15,14,00,00),
							"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.")
			);

			todoRepo.save(
					new Todo(null,
							"Build frontend structure",
							false,
							LocalDateTime.of(2023,02,10,11,45,00),
							"It is a long established fact that a reader will be distracted.")
			);

			todoRepo.save(
					new Todo(null,
							"Connect app with bdd",
							false,
							LocalDateTime.of(2023,01,01,18,05,00),
							"")
			);

			todoRepo.save(
					new Todo(null,
							"Add new functionalities",
							false,
							LocalDateTime.of(2023,02,28,8,10,00),
							"")
			);

			todoRepo.save(
					new Todo(null,
							"Merge with master",
							false,
							LocalDateTime.of(2023,03,1,20,22,00),
							"")
			);

			todoRepo.save(
					new Todo(null,
							"Send project",
							false,
							LocalDateTime.of(2023,01,30,22,22,00),
							"It is a long established fact that a reader will be distracted by the readable content of a page ")
			);

		};
	}

}
