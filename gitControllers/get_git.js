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
}

const GitController = new gitController();
export default GitController;