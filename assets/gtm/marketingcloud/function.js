window.readFullCookie = function() {
  var fullCookie = readCookie('greenpeace');
  var no_track = readCookie('no_track');
  if (no_track) {
    fullCookie = 0;
  }
  return fullCookie
}

window.sendCookieChange = function(){
  setTimeout(function(){
      localCookie = readFullCookie();
      iframeSource.postMessage({
        event: 'cookieChange',
        cookie: localCookie
      }, childOrigin)}
    ,100
  );
}

window.setCookies = function(cookieValue){
  if ( 0 == cookieValue ){
    createCookie('no_track', 'true', 20*365);
    createCookie('greenpeace', 'true', -1);
  }
  else if ( 1 == cookieValue || 2 == cookieValue ) {
    createCookie('greenpeace', cookieValue, 365);
    createCookie('no_track', 'true', -1);
  }
}

window.createCookie = function(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = encodeURI(name) + '=' + encodeURI(value) + ';domain=.' + document.domain + ';path=/;' + '; expires=' + date.toGMTString()+';SameSite=None; Secure';
};

window.readCookie = function(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  var c;
  for (var i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

window.determineCookieValue = function( cookieP4, cookieFS) {
  var truthTable = {
    null: {null: null, 0:0, 1:1, 2:2},
    0:    {null:    0, 0:0, 1:0, 2:0},
    1:    {null:    1, 0:0, 1:1, 2:1},
    2:    {null:    2, 0:0, 1:1, 2:2}
  };
  return truthTable[cookieP4][cookieFS];
};
