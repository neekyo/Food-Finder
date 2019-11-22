import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer pop0Jc-kbbuaSQSyKeWQID-AhovPYqJaNJsfbjM50NlAv_mfS2twigoXR6xoOd0UsIz7Ad07Y_KB1BhsDcjEFkBvAB3LCGNj1HeeDSF6rUqm5u-VIgSChrCaIW7UXXYx'
	}
});
