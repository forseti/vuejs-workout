package vuejs.workout

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

/**
 * Created by wolf on 9/1/17.
 */
@Entity
class User(
        @Id @GeneratedValue(strategy = GenerationType.AUTO)
        var id: Long = 0,
        var username: String = "",
        var email: String = ""
)