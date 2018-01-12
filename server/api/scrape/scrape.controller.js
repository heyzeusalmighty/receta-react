const scrape = require('../../scrape');
const chalk = require('chalk');


exports.scrapeItBaby = function(req, res) {
    
    console.log(chalk.green('gotta scrape them all'));
    const search = req.params.search;
    res.send(`success :: ${search}`);

}