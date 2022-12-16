package registration.Registration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserFunctions {

    @Autowired
    JdbcTemplate jdbcTemplate;

    //pobieramy użytkownika na podstawie id
    public User getById(long id){
        return jdbcTemplate.queryForObject("SELECT id, username, password, image, quizzes_played, correct_answers, uncorrect_answers FROM users WHERE " + "id = ?", BeanPropertyRowMapper.newInstance(User.class), id);
    }

    //aktualizujemy użytkownika na podstawie id
    public int update(User user){
        return jdbcTemplate.update("UPDATE users SET username=?, password=? WHERE id=?", user.getUsername(), user.getPassword(), user.getId());
    }

    //aktualizujemy statystyki użytkownika na podstawie id
    public int updateStats(User user){
        return jdbcTemplate.update("UPDATE users SET quizzes_played=?, correct_answers=?, uncorrect_answers WHERE id=?", user.getQuizzes_played(), user.getCorrect_answers(), user.getUncorrect_answers());
    }
}
