var select = function(el){
	return document.querySelector(el)
};
var selectAll = function(el){
	return document.querySelectorAll(el);
}
var message_all_data = null;
function message_callback(data){
	message_all_data = data;
}

var app = new Vue({
	el: '#content',
	data: {
		message_data: [],
		leftName: "",
		currentIndex: 0
	},
	created: function(){
		var _this = this;
		if(message_all_data == null){
			var time = setInterval(function(){
				if(message_all_data != null){
					_this.nextPageData();
					clearInterval(time);
				}
			},100);
		}
	},
	methods: {
		nextPageData() {
			for(var i = this.currentIndex; i < message_all_data.length; i++){
				if(i >= this.currentIndex + 1){
					this.currentIndex = i;
					break;
				}
				this.message_data.push(message_all_data[i])
			}
		},
		getContent: function(text){
			var reg = new RegExp('{(.*?)}.dat');
			while(true){
				if(!reg.test(text)){
					break;
				}
				text = text.replace(reg,'[图片]')
			}
			return text;
		}
	}
});