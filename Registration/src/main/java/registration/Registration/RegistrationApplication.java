package registration.Registration;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
//jest odpowiedzialny za konfigurację, skanowanie składników i definiuje dodatkową konfiguracje klasy aplikacji
//jest tym samym co użycie @EnableAutoConfiguration(auto-konfiguracja), @ComponentScan(skanuje paczkę, w poszukiwaniu składników w paczce, w której znajduję się aplikacja), @Configuration (importuje dodatkowe klasy konfiguracyjne)
public class RegistrationApplication {

	public static void main(String[] args) {
		//uruchamiamy naszą aplikacje
		SpringApplication.run(RegistrationApplication.class, args);
	}
}
