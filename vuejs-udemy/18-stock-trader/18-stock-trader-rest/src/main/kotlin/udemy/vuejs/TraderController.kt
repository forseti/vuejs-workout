package udemy.vuejs

import org.slf4j.LoggerFactory
import org.springframework.web.bind.annotation.*

/**
 * Created by wolf on 17/1/17.
 */
@CrossOrigin
@RestController
class TraderController {
    val logger = LoggerFactory.getLogger(javaClass)

    val trader: Trader = Trader(0, mutableListOf<Stock>(), mutableListOf<Portfolio>())

    @PutMapping
    fun save(@RequestBody trader: Trader): Trader {
        this.trader.funds = trader.funds
        this.trader.portfolios = trader.portfolios
        this.trader.stocks = trader.stocks

        logger.info("after save: trader: " + this.trader)

        return this.trader
    }

    @GetMapping
    fun load(): Trader {
        logger.info("load trader: " + this.trader)
        return this.trader
    }
}