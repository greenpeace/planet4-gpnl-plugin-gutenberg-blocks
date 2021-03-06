if ( document.readyState === 'complete' ||  (document.readyState !== 'loading' && !document.documentElement.doScroll) ) {
  attachListener();
} else {
  document.addEventListener('DOMContentLoaded', attachListener,{passive: true});
}

function attachListener() {
  let covers = document.querySelectorAll('.cover-card-column');
  let checkboxes = document.querySelectorAll( '.selector input[type=checkbox]' );

  checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener( 'click', function () {

      let tags = document.querySelector('.selector-tag').querySelectorAll('input[type="checkbox"]:checked');
      let tags_array = Array.from(tags).map(tag => {return tag.id;});
      let audiences = document.querySelector('.selector-audience').querySelectorAll('input[type="checkbox"]:checked');
      let audiences_array = Array.from(audiences).map(audience => {return audience.id;});

      if (tags_array.length === 0 && audiences_array.length === 0){
        covers.forEach((cover) =>{
          cover.style.display = 'block';
        });
      }
      else {
        filterCovers(covers, tags_array, audiences_array);
      }
    }, {passive: true} );
  });
}



function filterCovers(covers, themes, audiences) {
  let visible_covers = covers.length;
  let notification_node = document.getElementsByClassName('notification-education');
  if (notification_node.length) {
    notification_node[0].parentNode.removeChild(notification_node[0]);
  }
  covers.forEach((cover) =>{ cover.style.display = 'block'; });

  let covers_array = Array.from(covers);

  covers_array.map((cover) => {
    let includes_theme =  true;
    let includes_audience = true;
    let cover_tags = JSON.parse(cover.dataset.tags);

    if (themes.length !== 0 ) {
      includes_theme = cover_tags.some(cover_tag => themes.includes(cover_tag) );
    }
    if (audiences.length !== 0) {
      includes_audience = cover_tags.some(cover_tag => audiences.includes(cover_tag) );
    }

    if (!includes_theme || !includes_audience) {
      cover.style.display = 'none';
      visible_covers = visible_covers - 1 ;
    }

    if (visible_covers === 0) {
      noResultsMessage(themes, audiences);
    }
  });
}

function noResultsMessage(themes, audiences) {
  // Regex to match the last comma in a string
  // Matches ', ' and uses negative lookahead to ensure it's the last occurrence
  const regex = /(, )(?!.*,)/gi;
  // Make the arrays pretty and human readable
  let pretty_print_themes = themes.join(', ').toLowerCase().replace(regex, ' of ');
  let pretty_print_audiences = audiences.join(', ').toLowerCase().replace(regex, ' of ');
  let notification = document.createElement('p');
  notification.innerHTML = `<strong>Onee! We hebben geen lesmaterialen over ${pretty_print_themes} bedoeld voor ${pretty_print_audiences}.</strong><br>Probeer anders nog eens andere zoekcriteria?`;
  notification.className = 'notification-education';
  let target = document.querySelectorAll('.row.limit-visibility');
  console.log(target);

  target[0].parentNode.insertBefore(notification, target.nextSibling);
}
