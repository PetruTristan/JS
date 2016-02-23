var App = App || {};

App.main = (function () {
	var posts = [];
	function getAllPostsAndRener (content) {
		for (var i in content) {
			posts[i] = new App.Post(content[i]);
			container.appendChild(posts[i].element);
		}
	}

	function failedRequest (response) {
		console.error(responseText);
	}

	xhrUtils.getAll("posts", getAllPostsAndRener, failedRequest);
})()


