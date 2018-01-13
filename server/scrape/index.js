const chalk = require('chalk');
const config = require('../config/config');
const http = require('http');
const request = require('request');
const cheerio = require('cheerio');

exports.scrapeByUrl = function(url, cb) {
	return scrape(url, cb);
}



function scrape(url, cb) {
	let requestOptions = {
		'url' : url
	};
	if(config.usingProxy) {
		requestOptions.proxy = config.proxyAddress;
	}

	console.log(chalk.green('making the call now'))

	request(requestOptions, function (error, response, body) {
		if(error) {
			console.log(chalk.red('error => ', error.message));
		}
		if (!error && response.statusCode === 200) {

			var $ = cheerio.load(body);

			var directions = [];

			if(url.indexOf('marthastewart') > -1) {
				console.log(chalk.red('its a marthastewart'));

				var ins = $('div .col2 p').contents();

				var insCounter = 1;
				for(var y = 0; y < ins.length; y++) {
					var cleanedIns = ins[y].data.trim();
					if(cleanedIns.length > 2
						&& (cleanedIns.indexOf('delivered to your inbox') === -1)
						&& (cleanedIns.indexOf('Subscribe to Martha Stewart') === -1)
						&& (cleanedIns !== 'Gallery')
						&& (cleanedIns !== 'Aggregate')
						) {
						directions.push({id: insCounter, instruction: cleanedIns});
						insCounter++;
					}
				}
			}

			if(url.indexOf('myrecipes.com') > -1) {
				var instructions = $('div .field-instructions p').contents();

				for(var x = 0; x < instructions.length; x++) {
					var cleanedInsts = instructions[x].data.trim();
					if(cleanedInsts.length > 2) {
						directions.push({id: x + 1, instruction: cleanedInsts})
					}
				}
			}

			directions.forEach((dir) => {
				console.log(chalk.blue(dir.id), chalk.green(dir.instruction))
			});
			cb(directions);
		}
	});
}
