//request.post('http://service.com/upload').form({key:'value'})

var request = require('request');

class gitController {
  getInfo(req,res){
      let query = req.query
      let keyword = query.q
      let page = query.p

      const options = {
        url: 'https://api.github.com/search/repositories?q='+keyword+"&sort=stars&order=desc&page=" +page,
        headers: {
        'User-Agent': 'request'
          }
        }

    request(options, function(err, result, body) {
      if (err) {
        console.log(err);
        return;
      }
      else
      {
        var info = JSON.parse(body);

        var infoResult = new Array();

            for(var i =0;i<30;i++)
              {
              var data = { };
//                  try{
//                  console.log(i+1,"번째")
//                  console.log(info["items"][i]["owner"]["login"])
//                  console.log(info["items"][i]["html_url"])
//                  console.log(info["items"][i]["stargazers_count"]+"\n")
//                  }
                try{
                  data.index = i+1
                  data.login = info["items"][i]["owner"]["login"]
                  data.url = info["items"][i]["html_url"]
                  data.start = info["items"][i]["stargazers_count"]
                    infoResult.push(data);
                  }
                  catch(err){console.log(err);}
              }
      }

          res.status(200).send(infoResult);
    });
  }

//  getAllGit(req, res) {
//    return res.status(200).send({
//      success: 'true',
//      message: 'get retrieved successfully'
//    });
//  }
//
//  getGit(req, res) {
//    const id = parseInt(req.params.id, 10);
//    db.map((todo) => {
//      if (todo.id === id) {
//        return res.status(200).send({
//          success: 'true',
//          message: 'git retrieved successfully'
//        });
//      }
//    });
//    return res.status(404).send({
//      success: 'false',
//      message: 'git does not exist'
//    });
//  }
}

const GitController = new gitController();
export default GitController;