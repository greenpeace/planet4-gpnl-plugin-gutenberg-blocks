/**
 * Change all non-first h1 tags to h2 tags.
 */
const heroTitles = document.getElementsByClassName('hero__title');
Array.from(heroTitles).forEach((heroTitle, i) => {
  if (i !== 0) { //Ignore first hero image
    let h2 = document.createElement('h2');
    h2.className = 'hero__title';
    h2.innerHTML = heroTitle.innerHTML;
    heroTitle.parentNode.replaceChild(h2, heroTitle);
  }
});

if ( document.readyState === 'complete' ||  (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
  applyExperiment();
} else {
  document.addEventListener('DOMContentLoaded', applyExperiment,{passive: true});
}

/*
- send hit event to GA to signal experiment
- prevent too much FOUC
- recognize experiments
- define experiments
*/

function applyExperiment() {
  if (!window.heroExperiment) { return; }
  let options     = ['title', 'description', 'image_url', 'link_text', 'link_url'];
  let title       = document.getElementsByClassName('hero__title')[0].children[0];
  let description = document.getElementsByClassName('hero__description')[0];
  let image       = document.getElementsByClassName('image-background')[0];
  let button      = document.getElementsByClassName('hero__button')[0];
  let variant     = determineVariant();
  let timestamp   = window.heroExperiment.timestamp;
  let appliedExperiment = window.heroExperiment.variants[variant];
  console.log('Current experiment: '+window.heroExperiment.hash);
  console.log('Current experimentTimestamp: '+timestamp);
  console.log('Current variant: '+variant);
  console.log(appliedExperiment);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'startContentExperiment',
    'timestamp': timestamp,
    'variant': variant
  });

  if (variant === 0) { return; }

  for (let option of options) {
    if (option in appliedExperiment) {
      console.log('Changing: '+option);
      switch (option) {
      case 'title':
        title.textContent=appliedExperiment.title;
        break;
      case 'description':
        description.textContent=appliedExperiment.description;
        break;
      case 'image_url':
        image.srcset      = appliedExperiment.image_srcset;
        image.src         = appliedExperiment.image_url; //json.source_url
        image.alt_text    = appliedExperiment.alt_text; //json.alt_text
        break;
      case 'link_text':
        button.textContent=appliedExperiment.link_text;
        break;
      case 'link_url':
        button.setAttribute('href', appliedExperiment.link_url);
      }
    }
  }
}

function determineVariant() {
  let cookie = readCookie('p4Experiment');
  let calculatedVariant = Math.floor(Math.random() * window.heroExperiment.variants.length);
  let liveExperiment = {
    'experiment':window.heroExperiment.experiment,
    'variant': calculatedVariant,
    'hash':window.heroExperiment.hash
  };

  if (null === cookie) {
    // New visitor without cookie
    console.log('Setting new experiment cookie');
    writeCookie('p4Experiment', JSON.stringify(liveExperiment), 365);
    return calculatedVariant;
  }
  let cookieData = JSON.parse(unescape(cookie));
  if (cookieData.hash !== window.heroExperiment.hash){
    // Old experiment in cookie, update cookie, return new experiment
    console.log('Old experiment found, setting up new experiment');
    writeCookie('p4Experiment', JSON.stringify(liveExperiment), 365);
    return calculatedVariant;
  }
  // Cookie is up to date, return variant from cookie
  console.log('Experiment in cookie = current experiment');
  return cookieData.variant;
}

function writeCookie(name, value, days) {
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

window.resetExperiment = function(){writeCookie('p4Experiment', 0, -1);console.log('Cookie reset');};
