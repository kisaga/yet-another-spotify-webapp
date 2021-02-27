function clickOnArtist(event){
	artistId = event.target.id.split("_")[1];

	musicContentClient.getSongsOfArtist.call(artistId);
}

