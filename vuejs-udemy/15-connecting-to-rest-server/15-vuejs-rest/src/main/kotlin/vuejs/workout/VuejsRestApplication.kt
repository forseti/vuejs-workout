package vuejs.workout

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class VuejsRestApplication

fun main(args: Array<String>) {
    SpringApplication.run(VuejsRestApplication::class.java, *args)
}