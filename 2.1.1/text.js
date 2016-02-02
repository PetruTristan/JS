{
	text: "aaa@bbb.com",
validator: /[a-z0-9.-_]{3,}@([a-z0-9.-]{2,}.[a-z]{2,})+/, 

}

{
text: "+380964445533",
validator: /\+\d{12}/
}

var validators = (function()) {
	var valObj = {
	mail: /[a-z0-9.-_]{3,}@([a-z0-9.-]{2,}.[a-z]{2,})+/,
	phone: /\+\d{12}/;

};
return {
	getValidator: function (valType){
		return valObj[valType];
	};
	addValidator; function (valType, red) {
		if (valObj[valType]){
		valObj[valType] = red;
		} else {
			this.addValidator(valType + 1, red)
		}
	}
}
})();


var ValidString = function (text, validator) {
	this.validator = validators[validator];
	this.text = text
	this.isValid = this.validate();

}
ValidString.prototype.validate = function () {
	return this.validator.test(this.text);
}

ValidString.create = function (text. red) {
	return.new ValidString(text.red);
}

var mailValidator = /[a-z0-9.-]
var.email = new ValidString("aaa@bbb.com")

