import axios from 'axios';

const yummlyEndPoint = 'http://localhost:9000/api/yummly';

export function getSearchResults(searchString) {
    console.log('search', searchString);
    const fullOn = `${yummlyEndPoint}/${searchString}/1`;
    return axios.get(fullOn)
    .then(response => {
		return response.data;
    });
}