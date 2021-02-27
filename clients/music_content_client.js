musicContentClient = {
	getArtistsByName: {
		cache: {},
		call: function (artistName) {
			if(this.cache[artistName]){
				musicContentMutator.insertArtists(this.cache[artistName]);
			}else{
				this.tempParameterValue = artistName;
				$.ajax({
					method: "GET",
					url: this.url(artistName),
					error: this.callbacks.handleError
				})
				.done(this.callbacks.handleSuccess);
			}
		},
		url: (artistName)  => {
			return configuration.baseUrl + configuration.artistMethodName + "?artistName=" + artistName;
		},
		callbacks: {
			handleSuccess: function (data, textStatus, jqXHR) {
				//cache the response
				musicContentClient.getArtistsByName.cache[musicContentClient.getArtistsByName.tempParameterValue]=data
				//populate dom
				scriptLoader.getScript('dom/music_content_mutator.js', () => {
					musicContentMutator.insertArtists(data);
				});
			},
			handleError: function (data, textStatus, jqXHR){
				alert("Something went wrong");
			}
		}
	},
	getSongsOfArtist: { 
		cache: {},
		call: function (artistId) {
			if(this.cache[artistId]){
				musicContentMutator.insertSongs(this.cache[artistId]);
			}else{
				this.tempParameterValue = artistId;
				$.ajax({
					method: "GET",
					url: this.url(artistId),
					error: this.callbacks.handleError
				})
				.done(this.callbacks.handleSuccess);
			}
			
		},
		url: (artistId) => {
			return configuration.baseUrl + configuration.artistSongsMethodName + "?" + "artistId" + "=" + artistId;
		},
		callbacks: {
			handleSuccess: function (data, textStatus, jqXHR) {
				//cache the response
				musicContentClient.getSongsOfArtist.cache[musicContentClient.getSongsOfArtist.tempParameterValue]=data
				//populate dom
				musicContentMutator.insertSongs(data);
			},
			handleError: function (data, textStatus, jqXHR){
				alert("Something went wrong");
			}
		}
	}
};

