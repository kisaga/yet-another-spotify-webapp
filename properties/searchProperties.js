searchProperties = {
	baseUrl: "https://virtserver.swaggerhub.com/threeAmigos/YetAnotherSpotify/0.0.1/",
	artistMethodName: "getArtistsByName",
	handleSuccess: function (data, textStatus, jqXHR) {
		resultPanel = $("#resultPanel");
		resultPanel.empty();
		for (var i = 0 ; i < data.length; i++) {
			resultPanel.append(artistProperties.artistDiv(data[i]));
		}
	},
	handleError: function (data, textStatus, jqXHR){
		alert("Something went wrong");
	},
	buildSearchByArtistNameUrl: function (artistName){
		return searchProperties.baseUrl + searchProperties.artistMethodName + "?artistName=" + artistName;
	}
};