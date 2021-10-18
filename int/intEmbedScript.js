
var RefreshToken;
var AccessToken;
var LoginToken;
var JSAPIString;
var loadAPIscript;
var report1;
var report2;
var report3;
var report4;
var report5;
var report6;
var report7;
var report8;
var report9;
var filters;

function getRefreshToken() {
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
        RefreshToken = response.securityToken
       // console.log(RefreshToken);
        return;
      });
};

function getAccessToken(token) {
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
      //  console.log('accesstoken = '+response.securityToken);
        AccessToken = response.securityToken;
        return;
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
      // console.log('logintoken = '+response.securityToken);
       LoginToken = response.securityToken;
        return;
      });
};

function firstFunction(){
  var d = $.Deferred();
  getRefreshToken();
  setTimeout(function() {
    d.resolve();
  }, 2000);
  return d.promise();
}
function secondFunction(){
  var d = $.Deferred();
  getAccessToken(RefreshToken);
  setTimeout(function() {
    d.resolve();
  }, 1000);
  return d.promise();
}

function thirdFunction(){
  var d = $.Deferred();
  getLoginToken(AccessToken);
  setTimeout(function() {
    JSAPIString = "http://localhost:9040/JsAPI/v3?token=" + LoginToken;   
    loadAPIscript = document.createElement('script');
    loadAPIscript.setAttribute('src',JSAPIString);
    loadAPIscript.setAttribute('id','YFjsAPI');
    document.body.appendChild(loadAPIscript);
    d.resolve(); 
  }, 1000);

  return d.promise();

}
function reporting() {
  var d = $.Deferred();
    setTimeout(function() {
  yellowfin.init().then(() => {
    report1 = yellowfin.loadReport({
      reportUUID: "876c7d79-21a9-4561-ada7-f97eaffe1186",
      displayType:"CHART",
      element: document.querySelector("div#report1"),
      showToolbar: false

  })
  report2 = yellowfin.loadReport({
    reportUUID: "d2e34348-eb72-49e7-962c-6ca2b601276c",
    displayType:"CHART",
    element: document.querySelector("div#report2"),
    showToolbar: false

})
report3 = yellowfin.loadReport({
  reportUUID: "80162f66-b23e-4a2b-b209-497a960d96d5",
  displayType:"CHART",
  element: document.querySelector("div#report3"),
  showToolbar: false

})
  report4 = yellowfin.loadReport({
          reportUUID: "c83357db-8aef-4ec7-ab72-fce34de9ee77",
         // displayType:"CHART",
          element: document.querySelector("div#report4"),
          showToolbar: false
    
      })
      report5 = yellowfin.loadReport({
        reportUUID: "876c7d79-21a9-4561-ada7-f97eaffe1186",
        displayType:"CHART",
        element: document.querySelector("div#report5"),
        showToolbar: false
  
    })
    report6 = yellowfin.loadReport({
      reportUUID: "d2e34348-eb72-49e7-962c-6ca2b601276c",
      displayType:"CHART",
      element: document.querySelector("div#report6"),
      showToolbar: false
  
  })
  report7 = yellowfin.loadReport({
    reportUUID: "80162f66-b23e-4a2b-b209-497a960d96d5",
    displayType:"CHART",
    element: document.querySelector("div#report7"),
    showToolbar: false
  
  })
  report8 = yellowfin.loadReport({
        reportUUID: "df41eb4c-d90b-42ac-bdc1-fce7e4b48fe2",
       // displayType:"CHART",
        element: document.querySelector("div#report8"),
        showToolbar: false
    }).then((report) => {
      report2 = report;
    });
    report9 = yellowfin.loadReport({
      reportUUID: "8aedc43e-0841-45da-b518-73da7602b17d",
     // displayType:"CHART",
      element: document.querySelector("div#report9"),
      showToolbar: false
  }).then((report) => {
    report2 = report;
  });
    });
    console.log(report2);
    d.resolve();
  }, 500);
  return d.promise();
  

};

firstFunction().pipe(secondFunction).pipe(thirdFunction).pipe(reporting);

function applyReportFilters() {

  filters = report2.filters
  console.log(filters);
  let demographic = filters.getFilter('Demographic');
  console.log(demographic);
  demographic.setValue(['Adventure', 'Family']);
  filters.applyFilters();
};


