let form_config = 'request_form_object';

if ( document.readyState === 'complete' ||  (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
  educationSubscribe();
} else {
  document.addEventListener('DOMContentLoaded', educationSubscribe,{passive: true});
}

function educationSubscribe() {
  let fallback = document.querySelector( '.fallbackbtn' );
  fallback.addEventListener('click', resetButtons(), {passive: true});

  let auth = new URLSearchParams(window.location.search).has('e');
  if ( '1' === window[form_config].hider ) {
    let siblings = nextAll(document.querySelector('.inforequest__wrapper'));
    siblings.forEach((sibling)=>{sibling.style.display = 'none';});
  }
  if (null !== readCookie('gpnl_education') || auth ){
    document.querySelector('.inforequest__title').innerHTML ='<h3>Welkom terug!</h3>';
    document.querySelector('.inforequest__message').innerHTML ='<p>Je kan nu gebruikmaken van de lesmaterialen.</p>';
    let siblings = nextAll(document.querySelector('.inforequest__wrapper'));
    siblings.forEach((sibling)=>{sibling.style.display = 'block';});
    document.querySelector('.fallbackbtn').style.display = 'block';
    enableDownloadlinks();
    if (null !== readCookie('greenpeace') || null === readCookie('gpnl_education') ) {
      createCookie('gpnl_education', 1, 365);
    }
  }
  else{
    document.querySelector('.inforequest__buttons').style.display = 'block';
  }
}

function resetButtons() {
  return function () {
    let classname = '.' + this.getAttribute('class').split(/\s+/).pop();
    let show = this.dataset.show;
    let hide = this.dataset.hide.split(', ');
    document.querySelector(show).style.display = 'block';
    hide.forEach((hideclass) => {
      document.querySelector(hideclass).style.display = 'none';
    });
    document.querySelector(classname).style.display = 'none';
  };
}

function enableDownloadlinks() {
  let covers = document.querySelectorAll('.cover-card-column');
  covers = Array.from(covers);
  covers.forEach((cover) => {
    let links = cover.querySelectorAll('a');
    links = Array.from(links);
    links.forEach((link) => {
      link.setAttribute('href', link.getAttribute('href') + '?e=1');
    });
  });
  let backBtn = document.querySelector('.educationrequest__button');
  if (backBtn !== null) {
    backBtn.setAttribute('href', backBtn.getAttribute('href') + '?e=1');

  }
}

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

function nextAll (element) {
  const nextElements = [];
  let nextElement = element;

  while(nextElement.nextElementSibling) {
    nextElements.push(nextElement.nextElementSibling);
    nextElement = nextElement.nextElementSibling;
  }

  return nextElements;
}


