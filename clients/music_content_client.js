musicContentClient = {
	getArtistsByName: {
		call: function (artistName) {
			$.ajax({
				method: "GET",
				url: this.url(artistName),
				error: this.callbacks.handleError
			})
			.done(this.callbacks.handleSuccess);
		},
		url: function (artistName){
			return configuration.baseUrl + configuration.artistMethodName + "?artistName=" + artistName;
		},
		callbacks: {
			handleSuccess: function (data, textStatus, jqXHR) {
				musicContentManipulator.insertArtists(data);
			},
			handleError: function (data, textStatus, jqXHR){
				alert("Something went wrong");
			}
		}
	},
	getSongsOfArtist: { 
		call: function (artistId) {
			$.ajax({
				method: "GET",
				url: this.url(artistId),
				error: this.callbacks.handleError
			})
			.done(this.callbacks.handleSuccess);
		},
		url: function (artistId){
			return configuration.baseUrl + configuration.artistSongsMethodName + "?" + "artistId" + "=" + artistId;
		},
		callbacks: {
			handleSuccess: function (data, textStatus, jqXHR) {
				musicContentManipulator.insertSongs(data);
			},
			handleError: function (data, textStatus, jqXHR){
				alert("Something went wrong");
			}
		}
	}
};

