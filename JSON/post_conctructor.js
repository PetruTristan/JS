var App = App || {};

App.Post = (function () {
	var container = document.getElementById("container");

	var Post = function (content) {
		var body, header;
		this.content = content;
		this.element = document.createElement('div');

		this.id = content.id;

		this.createHeader();

		this.createBody();

		this.initListeners();

		this.renderContent();
	}

	Post.prototype.renderContent = function () {
		this.body.innerHTML = this.content.body;
		this.header.content.innerHTML = this.content.postname;
	}

	Post.prototype.createBody = function () {		
		this.body = document.createElement('div');
		this.body.classList.add("hidden");		
		this.body.classList.add("post_body");	
		this.body.classList.add("post_body--normal");	
		this.body.setAttribute("contenteditable", "");
		this.element.appendChild(this.body);
	}

	Post.prototype.createHeader = function () {		
		this.header = document.createElement('div');
		this.header.classList.add("post_header");
		this.header.toggle = document.createElement('span');
		this.header.toggle.innerHTML = '  + ';
		this.header.content = document.createElement('span');
		this.header.appendChild(this.header.toggle);
		this.header.appendChild(this.header.content);
		this.element.appendChild(this.header);
	}

	Post.prototype.toggleBody = function () {
		this.body.classList.toggle("hidden");
	}

	Post.prototype.sendChanges = function () {		
		this.content.body = this.body.innerHTML;
		xhrUtils.update(this.content, this.id, 'posts', this.onUpdate.bind(this));
	}

	Post.prototype.onUpdate = function () {
		var self = this;
		this.body.classList.add("post_body--update");
		setTimeout(function () {
			self.body.classList.remove("post_body--update");
		}, 3000);
	}

	Post.prototype.initListeners = function () {
		var self = this;
		this.header.toggle.addEventListener('click', function () {
			self.toggleBody();
			this.innerHTML = this.innerHTML === "  + " ? "  - " : "  + ";
		});

		this.body.addEventListener("focus", function (e) {
			this.classList.remove("post_body--normal")
			this.classList.add("post_body--focus");
		});
		this.body.addEventListener("blur", function (e) {
			this.classList.add("post_body--normal")
			this.classList.remove("post_body--focus");
			self.sendChanges();
		});

	}
	
	return Post;
})()
