function clickOnSong(event){
	songId = event.target.id.split("_")[1];
	alert("Clicked on song with id: " + songId);
}