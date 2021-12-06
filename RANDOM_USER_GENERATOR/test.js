/*var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// XMLHttpRequestオブジェクトの作成
var request = new XMLHttpRequest();

// URLを開く
request.open('GET', 'https://jsonplaceholder.typicode.com/users/1', true);
request.responseType = 'json';

// レスポンスが返ってきた時の処理を記述 
request.onload = function () {
  // レスポンスが返ってきた時の処理
  var data = this.response;
  console.log(data);
}

// リクエストをURLに送信
request.send();
*/

import fetch from 'cross-fetch';

const url = 'https://randomuser.me/api/';
fetch(url).then(function(response) {
  return response.text();
}).then(function(text) {
  console.log(text);
});
