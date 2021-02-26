artistProperties = {
	artistSongsMethodName: "getSongsByArtist",
	handleSuccess: function handleSuccessArtist(data, textStatus, jqXHR) {
		resultPanel = $("#resultPanel");

		resultPanel.empty();
		for (var i = 0 ; i < data.length; i++) {
			resultPanel.append(songProperties.songDiv(data[i]));
		}
	},
	handleError: function (data, textStatus, jqXHR){
		alert("Something went wrong");
	},
	buildArtistSongsUrl: function buildRequestUrl(artistId){
		return searchProperties.baseUrl + this.artistSongsMethodName + "?" + "artistId" + "=" + artistId;
	},
	artistDiv: function artistDiv(data) {
		return $('<div/>', {
			id: "artist_" + data.id,
			html:  JSON.stringify(data),
			click: clickOnArtist
		});
	}
};