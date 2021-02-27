
function clickOnSearch(){

	artistName = $("#nameInput").val();

	if(!artistName){
		alert("please enter an Artist Name");
		return;
	}

	scriptLoader.getScript('clients/music_content_client.js', () => {
		scriptLoader.getScript('config/music_content_client_config.js', () => {

			musicContentClient.getArtistsByName.call(artistName);

		})
	});
}
