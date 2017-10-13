var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#country-name').keyup(searchCountries);

function searchCountries() {
	countriesList.empty();
	var countryName = $('#country-name').val();
	if (!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	for (var  i = 0; i < resp.length; i++) {
		var country = document.createElement('li');
		$('<h3>').text(resp[i].name).appendTo(country);
		$('<p>').html('<span>Capital: </span>' + resp[i].capital + '<br>' + '<span>Population: </span>' + resp[i].population + '<br>' + '<span>Language: </span>' + resp[i].demonym + '<br>' + '<span>Currency: </span>' + resp[i].currencies).appendTo(country);
		countriesList.append(country);
	}
}