var App = App || {};

App.main = (function () {
	var container = document.getElementById('container');
	var posts = [];
	var comments = [];

	xhrUtils.getAll("posts", getAllPostsAndComments, xhrUtils.failedRequest);

	function getAllPostsAndComments (postContent) {
		xhrUtils.getAll('comments', function (commentData){
			renderAllPosts(postContent, commentData);
		}, xhrUtils.failedRequest);		
	}

	function renderAllPosts (postContent, commentData) {
		for (var i in postContent) {
			createPost(postContent[i], commentData.filter(function (comment) {
				return comment.postId === postContent[i].id;
			}));
		}

		createPostBlock(function () {
			xhrUtils.getAll("posts", getAllPostsAndRener, xhrUtils.failedRequest);
		});
	}

	function createPostBlock (handler) {
		var head = document.createElement("input");
		var body = document.createElement("input");
		var create = document.createElement("button");
		var wrap =  document.createElement("div");
		head.type = "text";
		body.type = "text";
		create.innerHTML = "Create";
		wrap.appendChild(head);
		wrap.appendChild(body);
		wrap.appendChild(create);
		document.body.appendChild(wrap);

		create.addEventListener("click", function () {
			xhrUtils.create({body: body.value, postname: head.value }, "posts", function (data) {
				createPost(data);
			});			
		});
	}	

	function createPost (data, comments) {
		var newPost = new App.blog.Post(data, comments);
		var self = this;

		posts.push(newPost);
		container.appendChild(newPost.element);
	}	
})();


