const scrape = require('../../scrape');
const chalk = require('chalk');
const request = require('request');
const cheerio = require('cheerio');


exports.scrapeItBaby = async function(req, res) {
    
    console.log(chalk.green('gotta scrape them all'));
    const search = req.params.search;

    const result = await scrapeThisSite(search);
    res.send(`success :: ${search} :: ${result}`);

}


const scrapeHere = async (url) => {
    let result = resolveAfter2Seconds();
    return result;
}




function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }


async function scrapeThisSite(url) {
    const requestOptions = {
		'url' : url
	};
    request(requestOptions, function (error, response, body) {
		if(error) {
			console.log(chalk.red('error => ', error.message));
		}
		if (!error && response.statusCode === 200) {

            var $ = cheerio.load(body);
            
        }    
    });

}