package vuejs.workout

import org.springframework.data.repository.CrudRepository

/**
 * Created by wolf on 9/1/17.
 */
interface UserRepository : CrudRepository<User, Long> {
}