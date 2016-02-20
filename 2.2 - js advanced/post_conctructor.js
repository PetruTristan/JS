(function () {
	var container = document.getElementById("container");
	var posts = [];

	var Post = function (content) {
		var body, header;
		this.content = content;
		this.element = document.createElement('div');
		this.body = document.createElement('div');
		this.body.classList.add("hidden");
		this.header = document.createElement('div');
		this.element.appendChild(this.header);
		this.element.appendChild(this.body);
	}

	Post.prototype.render = function () {
		this.body.innerHTML = this.content.body;
		this.header.innerHTML = this.content.postname;
	}

	Post.prototype.toggleBody = function () {
		this.body.classList.toggle("hidden");
	}

	getPosts("", "posts", getAllPostsAndRener, failedRequest);

	function getAllPostsAndRener (content) {
		for (var i in content) {
			posts[i] = new Post(content[i]);
			container.appendChild(posts[i].element);
			posts[i].render();
		}
	}

	function failedRequest (response) {
		console.error(responseText);
	}

	function getPosts (id, locator, callbackSuccess, callbackFailure) {   
		var myGetRequest = new XMLHttpRequest();

		myGetRequest.open('GET', 'http://localhost:3000/' + locator + "/" + id, true);

		myGetRequest.send(null);

		myGetRequest.addEventListener("load", function () {
			console.log("Request complete");
			if (myGetRequest.status === 200) {
				callbackSuccess(JSON.parse(myGetRequest.responseText));
			} else {
				callbackFailure(JSON.parse(myGetRequest.responseText));
			}
		});
	}

	function createPost (data) {

		var myPostRequest = new XMLHttpRequest();

		myPostRequest.open('POST', 'http://localhost:3000/posts', true);

		//setRequestHeader - Задает заголовоки для запроса. 
		//В данном случае, сервер принимает JSON, для этого устанавливаем тип содержимого
		myPostRequest.setRequestHeader("Content-Type", "application/json");

		//JSON.stringify превращает JavaScript-обьект в JSON строку
		myPostRequest.send(JSON.stringify(data));

		myPostRequest.addEventListener("load", function () {
			console.log("Request complete");
			if (myPostRequest.status === 201) {
				console.log("Success!!!");
				console.log(myPostRequest.responseText);
			}
		});
	}
	
})()