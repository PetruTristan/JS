var mydiv = document.getElementById("one");

mydiv.addEventListener("click", function (event) {

	console.log(event)
});

mydiv.addEventListener("click", function() {

	if (mydiv.classList.contains("one"))
		mydiv.classList.remove("one");
	else {mydiv.classList.add("one")}
});