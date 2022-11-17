package registration.Registration;

import lombok.*;

import javax.persistence.*;

@Entity //umożliwia mapowanie klasy w tabeli znajdującej się w bazie danych
@Table(name = "users") //okerślamy tabele w bazie danych, z którą ta klasa jest mapowana
@Getter //metoda zwracająca zmienną o wartości ustawionej przez setter
@Setter //metoda umożliwia ustawianie i aktualizacje zmiennej
@AllArgsConstructor //generuje dla wszystkich pól(klasy, interfejsy) w klasie konstruktor z jednym parametrem
@NoArgsConstructor //tworzy konstruktor bez parametru, jeśli nie jest możlie utworzenie wystąpi błąd
@RequiredArgsConstructor    //generuje kontruktor z wymaganym argumentem, wymaganym argumentem może być pole końcowe(musi mieć przypisaną wartość początkową, która nie może zostać zmieniona) lub pole z ograniczeniem(@NotNull)
@ToString   //wypisuje nazwe klasy wraz z każdą niestatyczną nazwą pola i jego wartością uzyskaną przez wywołanie metody pobierającej (getter)
public class User {

    @Id //określa klucz podstawowy jednostki
    @GeneratedValue(strategy = GenerationType.IDENTITY) //generuje strategie dla wartości kluczy, GenerationType.IDENTITY wskazuje, że klucze mają być przypisane do jednostki przy użyciu kolumny tożsamości bazy danych
    private long id;

    @NonNull //nie może być zerem ale może być pusty
    private String username;

    @NonNull
    private String password;
}
