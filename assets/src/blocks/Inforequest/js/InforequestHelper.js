import $ from 'jquery';

let form_config = 'request_form_object';

$(document).ready(function() {
  let auth = new URLSearchParams(window.location.search).has('e');
  if ( '1' === window[form_config].hider ) {
    console.log('hider');
    $('.inforequest__wrapper').nextAll().hide();
  }
  if (null !== readCookie('gpnl_education') || auth ){
    console.log('auth');
    $('.inforequest__title').html('<h3>Welkom terug!</h3>');
    $('.inforequest__message').html('<p>Je kan nu gebruikmaken van de lesmaterialen.</p>');
    $('.inforequest__wrapper').nextAll().show(1000);
    $('.fallbackbtn').show(1000);
    enableDownloadlinks();
    if (null !== readCookie('greenpeace') || null === readCookie('gpnl_education') ) {
      createCookie('gpnl_education', 1, 365);
    }
  }
  else{
    console.log('not auth');
    $('.inforequest__buttons').show(1000);
  }
});

$('.fallbackbtn').on('click', function () {
  let btn = $(this);
  let classname = '.' + btn.attr('class').split(/\s+/).pop();
  let show  = btn.data('show');
  let hide  = btn.data('hide');
  console.log('show');
  console.log('hide');
  $(show).show(1000);
  $(hide).hide(1000);
  $(classname).hide(1000);
});

function createCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = encodeURI(name) + '=' + encodeURI(value) + ';domain=.' + document.domain + ';path=/;' + '; expires=' + date.toGMTString();
}

function readCookie(name) {
  let nameEQ = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

function enableDownloadlinks() {
  $('.cover-card-column').each(function(){
    let cover = this;
    $(cover).find('a').each(function(){
      let link = this;
      let href = $(this).attr('href');
      $(link).attr('href', href + '?e=1');
    });
  });
  let backBtn = $('.educationrequest__button');
  backBtn.attr('href', backBtn.attr('href') + '?e=1');
}
