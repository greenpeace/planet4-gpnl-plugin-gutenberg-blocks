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

