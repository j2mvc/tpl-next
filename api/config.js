
const LRU = require("lru-cache")
    , options = {
    max: 500
    , length: function (n, key) { return n * 2 + key.length }
    , dispose: function (key, n) { n.close() }
    , maxAge: 1000 * 60 * 60 }

let config
if (process.__API__) {
    config = process.__API__
} else {
    config = process.__API__ = {
        api: 'http://api.ptjp.gov.cn',
        apiKey : '66bb75d01825f4e06963dd645d901bbe',
        cached:new LRU(options),
        cachedItem: {}
    }
}

module.exports = config
