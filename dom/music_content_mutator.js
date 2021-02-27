musicContentMutator = {
	insertArtists: function (data) {
		scriptLoader.getScript('views/artist.js', () => {
			scriptLoader.getScript('events/clickOnArtist.js', () => {

				resultPanel = $("#resultPanel");
				resultPanel.empty();
				for (var i = 0 ; i < data.length; i++) {
					resultPanel.append(artistView.artistDiv(data[i]));
				}

			})
		});
	},
	insertSongs: function (data) {
		scriptLoader.getScript('views/song.js', () => {
			scriptLoader.getScript('events/clickOnSong.js', () => {

				resultPanel = $("#resultPanel");
				resultPanel.empty();
				for (var i = 0 ; i < data.length; i++) {
					resultPanel.append(songView.songDiv(data[i]));
				}
				
			})
		});
	}
}