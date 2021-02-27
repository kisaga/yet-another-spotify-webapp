scriptLoader = {
	loadedScripts: [],
	getScript: function ( url, callback )  {
		callback = (typeof callback != 'undefined') ? callback : {};

		if(this.loadedScripts.includes(url)){
			callback();
		}else{
			$.getScript(url,  () => {
				scriptLoader.loadedScripts.push(url);
				callback();
			});
		}

	}
}