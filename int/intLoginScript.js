const secret = "G7yJCK6yhRb9fEKN";

var objPeople = [
  {
      username: 'user1@yftesting.com',
      password: 'U2FsdGVkX18OabRu2EOhvNycO8n86FUUZJS2c8JzZFQ=' //123
  },
  {
      username: 'user2@yftesting.com',
      password: 'U2FsdGVkX18OabRu2EOhvNycO8n86FUUZJS2c8JzZFQ='
  },
  {
      username: 'user3@yftesting.com',
      password: 'U2FsdGVkX18OabRu2EOhvNycO8n86FUUZJS2c8JzZFQ='
  }
];

function getInfo(direction){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var now = Date.now();
  var settings = {
    "url": "http://localhost:9040/api/rpc/login-tokens/create-sso-token",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Accept": "application/vnd.yellowfin.api-v1+json",
        "Authorization": "YELLOWFIN ts="+now+", nonce=random",
        "Content-Type": "application/json"
      },
      "data": JSON.stringify({
        "signOnUser": {
          "userName": username
        },
        "noPassword": true,
        "adminUser": {
          "userName": "admin@yellowfin.com.au",
          "password": "test"
        }
      }),
  };
 
  for(i =0; i<objPeople.length; i++){

    if(username == objPeople[i].username && password == CryptoJS.AES.decrypt(objPeople[i].password, secret).toString(CryptoJS.enc.Utf8) && direction == 'sso2app'){
      $.ajax(settings).done(function (response) {
       
        window.location.href = "http://localhost:9040/logon.i4?LoginWebserviceId="+response.securityToken;
      });
       
        return
    }else if(username == objPeople[i].username && password == CryptoJS.AES.decrypt(objPeople[i].password, secret).toString(CryptoJS.enc.Utf8) && direction == 'sso2embed'){
        localStorage.setItem('username', username);
        window.location.href = "http://localhost:9040/int/ssoEmbed.html";
      return
    }
  }
  console.log("User does not exist")

};