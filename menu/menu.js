var WechatAPI = require('wechat-api');
var api = new WechatAPI('wx4618e7627a465a08', '8765902474d810b6fd24519b452d2603');

exports.getLatestToken = function() {
	api.getLatestToken((err, token)=>{
	createMenu()
});
}


var menu = {
	  "button":[	
	   {
	     "type":"click",
	     "name":"今日歌曲",
	     "key":"V1001_TODAY_MUSIC"
	   },
	   {
	     "name":"菜单",
	     "sub_button":[
	       {
	         "type":"view",
	         "name":"搜索",
	         "url":"http://e1f06a92.ngrok.io/users/index"
	       },
	      {
	        "type":"click",
	        "name":"赞一下我们",
	        "key":"V1001_GOOD"
	       }]
	     }]
}
exports.getMenu = function() {
	api.getLatestToken((err, token)=>{
		api.getMenu((err, result)=>{
			console.log('getMenu');
			console.log(result);
			console.log(err);
		});
	})

}

function createMenu() {
	api.createMenu(menu, (err, result)=>{
		console.log('this is create menu function');
		console.log(result);
	});
}



