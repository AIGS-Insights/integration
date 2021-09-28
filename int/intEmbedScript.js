

let refresh = function getRefreshToken() {
    var now = Date.now();
    var refreshRequest = {
        "url": "http://localhost:9040/api/refresh-tokens",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Authorization": "YELLOWFIN ts="+now+", nonce=random",
          "Content-Type": "application/json",
          "Accept": "application/vnd.yellowfin.api-v1+json"
        },
        "data": JSON.stringify({
          "userName": "admin@yellowfin.com.au",
          "password": "test"
        }),
      };
      
      $.ajax(refreshRequest).done(function (response) {
          console.log('refreshtoken = '+response.securityToken);
        return response.securityToken;
      });
};

function getAccessToken(token){
    var now = Date.now();
    var accessRequest = {
        "url": "http://localhost:9040/api/access-tokens",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Accept": "application/vnd.yellowfin.api-v1+json",
          "Authorization": "YELLOWFIN ts="+now+", nonce=random, token="+token,
          "Content-Type": "application/json"
        },
      };
      
      $.ajax(accessRequest).done(function (response) {
        console.log('accesstoken = '+response.securityToken);
        return  response.securityToken;
      });
};


function getLoginToken(token) {
    var now = Date.now();
    var loginRequest = {
        "url": "http://localhost:9040/api/login-tokens",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Accept": "application/vnd.yellowfin.api-v1+json",
          "Authorization": "YELLOWFIN ts="+now+", nonce=random, token="+token,
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          "signOnUser": {
            "userName": localStorage.getItem("username")
          },
          "noPassword": true
        }),
      };
      
      $.ajax(loginRequest).done(function (response) {
        console.log('logintoken = '+response.securityToken);
        return response.securityToken;
      });
};

 refresh().then(refreshToken => getAccessToken(refreshToken))
    .then(accessToken => getLoginToken(accessToken))
    .then(loginToken => {
        console.log('logintoken = '+loginToken);
    })





// function reporting() {
//     yellowfin.init().then(() => {
//         yellowfin.loadReport({
//             reportUUID: "c83357db-8aef-4ec7-ab72-fce34de9ee77",
//             displayType:"CHART",
//             element: document.querySelector("div#report1"),
//             showToolbar: false

//         })});
// };