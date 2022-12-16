package registration.Registration;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> { //rozszerzenie interfejsu(API CRudRepository i PgingAndSortingRepository)
    Optional<User> findByUsername(String username);
    //Optional służy do reprezentowania wartości, która jest obecna lub nie
    //zwraca nazwy użytkownika
}
