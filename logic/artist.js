function clickOnArtist(event){
	artistId = event.target.id.split("artist_")[0];

	$.ajax({
        method: "GET",
        url: artistProperties.buildArtistSongsUrl(artistId),
        error: artistProperties.handleError
    })
    .done(artistProperties.handleSuccess);
}
