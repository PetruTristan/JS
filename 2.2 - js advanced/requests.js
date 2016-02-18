(function () {
	var input = document.getElementById("postid");
	var btn = document.getElementById("btn");
	var header = document.getElementById("header");
	var body = document.getElementById("post");

	btn.addEventListener("click", function () {
		getPosts(input.value, "posts", renderPost, failedRequest);
	});

	function renderPost (response) {
		header.innerHTML = response.postname;
		body.innerHTML = response.body;
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


		// var myRequest = new XMLHttpRequest();	
		// open - открывает запрос с заданными параметрами.
		// аргументы - тип запроса (GET, POST, PUT, PATCH, DELETE),
		// uri - адрес, по которому мы отправляем запрос
		// async (true, false) - выполнять ли запрос асинхронно

		// myRequest.open('GET', 'http://localhost:3000/comments/2', true);
		// /*
		// 	свойство readystate - одно из 5 значений
		// 	0 - Unitialized
		// 	1 - Loading
		// 	2 - Loaded
		// 	3 - Interactive
		// 	4 - Complete
		// */
		// console.log(myRequest.readystate);

		// //send - отправляет запрос на сервер
		// //аргументы - данные, которые станут телом запроса
		// //в случае с GET - не нужны, так как мы хотим только получить ответ
		// myRequest.send(null);

		// // событие readystatechange - изменение состояния готовности запроса
		// myRequest.addEventListener("readystatechange", function () {

		// 	//свойство status - определяет текущий статус запроса
		// 	//https://msdn.microsoft.com/en-us/library/ms767625(v=vs.85).aspx - возможные статус-коды
		// 	// status 200 - OK - значит, запрос прошел успешно
		// 	// 201 - created - при использовании POST означает, что запись была создана
		// 	console.log(myRequest.readystate);
		// 	console.log(myRequest.status);
		// 	if (myRequest.readyState === 4 && myRequest.status === 404) {
		// 		console.error("404 Not found." + myRequest.responseText);
		// 	}
		// });

		// //событие load - срабатывает, когда запрос завершился
		// myRequest.addEventListener("load", function () {
		// 	console.log("Request complete");
		// 	if (myRequest.status === 201 || myRequest.status === 200) {
		// 		console.log("Success!!!");
		// 		console.log(myRequest.responseText);
		// 	}
		// });	

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