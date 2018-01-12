import axios from 'axios';

const scrapeEndPoint = 'http://localhost:9000/api/scrape';

export function getSearchResults(searchString) {
    console.log('search', searchString);
    const fullOn = `${scrapeEndPoint}/${searchString}`;
    return axios.post(fullOn)
    .then(response => {
		return response.data;
    });
}