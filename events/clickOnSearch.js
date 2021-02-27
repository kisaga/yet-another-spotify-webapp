function clickOnSearch(){

	artistName = $("#nameInput").val();

	if(!artistName){
		alert("please enter an Artist Name");
		return;
	}

	musicContentClient.getArtistsByName.call(artistName);
}
