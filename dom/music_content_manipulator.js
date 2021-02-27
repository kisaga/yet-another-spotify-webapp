musicContentManipulator = {
	insertArtists: function (data) {
		resultPanel = $("#resultPanel");
		resultPanel.empty();
		for (var i = 0 ; i < data.length; i++) {
			resultPanel.append(artistView.artistDiv(data[i]));
		}
	},
	insertSongs: function (data) {
		resultPanel = $("#resultPanel");
		resultPanel.empty();
		for (var i = 0 ; i < data.length; i++) {
			resultPanel.append(songView.songDiv(data[i]));
		}
	}
}