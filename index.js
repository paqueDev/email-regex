"use strict";

var re = "[^\\.\\s@:](?:[^\\s@:]*[^\\s@:\\.])?@[^\\.\\s@]+(?:\\.[^\\.\\s@]+)*";


module.exports = function(options){
	if(options.exact) {
		return new RegExp(`^${re}$`);
	}else{
		return new RegExp(re, "g");
	}
}



