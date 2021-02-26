function searchByName(){

	artistName = $("#nameInput").val();

	if(!artistName){
		alert("please enter an Artist Name");
		return;
	}

	$.ajax({
        method: "GET",
        url: searchProperties.buildSearchByArtistNameUrl(artistName),
        error: searchProperties.handleError
    })
    .done(searchProperties.handleSuccess);
    
}

$("#btn").click(searchByName);