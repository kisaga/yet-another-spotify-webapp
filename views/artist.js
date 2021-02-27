artistView = {
	artistDiv: function artistDiv(data) {
		return $('<div/>', {
			id: "artist_" + data.id,
			html:  JSON.stringify(data),
			click: clickOnArtist
		});
	}
};