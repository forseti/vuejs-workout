package udemy.vuejs

/**
 * Created by wolf on 17/1/17.
 */
data class Trader (
    var funds: Long = 0,
    var stocks: List<Stock> = mutableListOf<Stock>(),
    var portfolios: List<Portfolio> = mutableListOf<Portfolio>()
)
