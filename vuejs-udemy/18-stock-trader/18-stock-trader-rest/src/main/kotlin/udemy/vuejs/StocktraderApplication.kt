package udemy.vuejs

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class StocktraderApplication

fun main(args: Array<String>) {
    SpringApplication.run(StocktraderApplication::class.java, *args)
}
