package registration.Registration;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//wskazuje, że klasa będzie miała REST-owe punkty końcowe, andotacja mówi, że klasa to kontroler a wartość zwrócona będzie przekonwertowana na JSON(domyślnie) lub XML
@RestController
public class UserService {
    @Autowired //umożliwia wstrzykiwanie do pola
    UserRepository userRepository;
    @Autowired
    ObjectMapper objectMapper;  //zapewnia funkcjonalność do odczytywania i zapisywania JSON do i z POJO lub do i z ogólnego modelu drzewa JSON

    //umożliwiamy udostępnianie zasobów dla naszej aplikacji stworzonej w react
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users")
    //w klasach oznaczonych @Controller(RestController) obsługuje żądania HTTP GET dopasowane do danego wyrażenia URI(wyświetla naszą listę po dopisaniu "/users" do URI)
    //throw służy do deklarowania wyjątków które mogą zdarzyć się podczas wykonywania programu
    //JsonProcessingException to podstawowa klasa dla wszystkich problemów napotkanych podczas wykonywania procesu JSON(oprocz problemów I/O(wejscia-wyjścia))
    public ResponseEntity getUsers() throws JsonProcessingException {
        List<User> users = userRepository.findAll(); //lista z wszystkimi podmiotami zapisanymi w bazie danych
        return ResponseEntity.ok(objectMapper.writeValueAsString(users));
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/users")  //służy do mapowania żądań HTTP POST na określone metody obsługi
    public ResponseEntity addUser(@RequestBody User user) { //@RequestBody mapuje treść HttpRequest do obiektu transferu lub domeny, umożliwiając automatyczną deserializację przychodzącej treści HttpRequest na obiekt Java
        Optional<User> userFromDb = userRepository.findByUsername(user.getUsername()); //sprawdzamy czy istnieje użytkownik o danej nazwie w bazie danych

        if (userFromDb.isPresent()) {    //jeśli użytkownik w bazie danych istnieje
            return ResponseEntity.status(HttpStatus.UNPROCESSABLE_ENTITY).build();  //zwracamy informacje o błędzie
        }

        User savedUser = userRepository.save(user); //zapisujemy nowego użytkownika
        return ResponseEntity.ok(savedUser);    //zwracamy zapisanego użytkownika
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody User user) {    //przekazujemy nasz obiekt z klasy User
        Optional<User> userFromDb = userRepository.findByUsername(user.getUsername());  //pobieramy usera z User Repository i zapisujemy w userFromDb

        if (userFromDb.isEmpty() || wrongPassword(userFromDb, user)) { //jeśli taki użytkownik nie istnieje lub hasło jest nieprawidłowe
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();  //to zwróć komunikat
        }
        //zwracamy ResponseEntity
        return ResponseEntity.ok().build();
    }

    private boolean wrongPassword(Optional<User> userFromDb, User user) {
        //kiedy hasła nie zgadzają się to zwracamy true(wywołujemy metode wrongPassword)
        return !userFromDb.get().getPassword().equals(user.getPassword());
    }

   @CrossOrigin(origins = "http://localhost:3000")
   @DeleteMapping("/users/{id}")
   public void deletePost(@PathVariable long id ){
        userRepository.deleteById(id);
   }
}
