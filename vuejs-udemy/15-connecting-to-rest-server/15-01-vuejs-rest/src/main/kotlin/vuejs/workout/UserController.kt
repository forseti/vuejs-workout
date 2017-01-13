package vuejs.workout

import org.jetbrains.annotations.Mutable
import org.springframework.http.MediaType
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.*

/**
 * Created by wolf on 9/1/17.
 */
@CrossOrigin
@RestController
class UserController(val repository: UserRepository) {
    @RequestMapping(method = arrayOf(RequestMethod.POST, RequestMethod.PUT))
    fun save(@RequestBody user: User): User {
        return repository.save(user)
    }

    @GetMapping
    fun list(): List<User> {
        return repository.findAll() as List<User>
    }
}