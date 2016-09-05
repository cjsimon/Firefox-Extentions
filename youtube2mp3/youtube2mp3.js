function get() {
	// Get the youtube video id
	var regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
	var url = window.location.href;
	var matches = url.match(regex);

	// If the id was found generate the mp3 link and button
	if(matches) {
		var id = matches[1];
		var mp3url = 'http://www.youtube-mp3.org/#v_id=' + id;
		console.log(mp3url);
		window.open(mp3url, 'blank');
	}
}

var path = 'http://www.youtube-mp3.org/redir?url=' + encodeURIComponent(window.location);
window.open(path);