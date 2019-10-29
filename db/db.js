var request = require('request');

var options = {
  url: 'https://api.github.com/search/repositories?q=ai'+"&sort=stars&order=desc" ,
  headers: {
    'User-Agent': 'request'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);

     for(var i =0;i<30;i++)
     {
        try{
            console.log(i+1,"번째")
            console.log(info["items"][i]["owner"]["login"])
            console.log(info["items"][i]["html_url"])
            console.log(info["items"][i]["stargazers_count"], "\n")
            }
        catch{
            console.log("catch error")
            }
      }
  }
  else{
    console.log("error")
  }
}

request(options, callback);




//
//var request = require('request');
//index = 0
//page = 1
//
//var options = {
//  url: 'https://api.github.com/search/repositories?q='+ $keyword +"&sort=stars&order=desc" ,
//  headers: {
//    'User-Agent': 'request'
//  }
//};
//
//function callback(error, response, body) {
//  if (!error && response.statusCode == 200) {
//    var info = JSON.parse(body);
//
//     for(var i =0;i<30;i++)
//     {
//        try{
//            console.log(i+1,"번째")
//            console.log(info["items"][i]["owner"]["login"])
//            console.log(info["items"][i]["html_url"])
//            console.log(info["items"][i]["stargazers_count"], "\n")
//            }
//        catch{
//            console.log("catch error")
//            }
//      }
////    console.log(info.stargazers_count + " Stars");
////    console.log(info.forks_count + " Forks");
//  }
//  else{
//    console.log("error")
//  }
//}
//
//request(options, callback);