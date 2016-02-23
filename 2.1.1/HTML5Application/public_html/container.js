(function () {
	var container = document.getElementById("container");
	var posts = [];

	var Post = function (content) {
		var body, header;
		
		this.content = content;
		this.element = document.createElement('div');
		this.body = document.createElement('div');
		this.body.classList.add("hidden");
		this.body.classList.add("post_body");
		this.header = document.createElement('div');
		this.header.classList.add("post_header");
		this.header.toggle = document.createElement('span');
		this.header.toggle.innerHTML = '+ ';
		this.header.content = document.createElement('span');
		this.header.appendChild(this.header.toggle);
		this.header.appendChild(this.header.content);
		this.element.appendChild(this.header);
		this.element.appendChild(this.body);

		this.initListeners();
                
            }    
	
