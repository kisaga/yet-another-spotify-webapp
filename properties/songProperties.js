songProperties = {
	songDiv: function (data){
		return $('<div/>', {
			id: "song_" + data.id,
			html:  JSON.stringify(data),
			click: clickOnSong
		});
	}
}