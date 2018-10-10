const fetch = require('node-fetch')

exports.get = async (req, res) => {
    const resultArray = []
    const count = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${req.params.title}`).then(x => x.json()).then(x => x.total_pages)
    for(let i = 1; i <= count; i++) {
        await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${req.params.title}&page=${i}`).then(x => x.json()).then(x => {
            for(let o = 0; o < x.data.length; o++) resultArray.push(x.data[o].Title)
        })
    }
    return res.status(200).json(resultArray.sort());
}