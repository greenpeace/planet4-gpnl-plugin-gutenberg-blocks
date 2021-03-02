let tags = [];
let audiences = [];
let covers = document.querySelectorAll('.cover-card-column');
let num_covers = covers.length;
let checkboxes = document.querySelectorAll( '.selector input[type=checkbox]' );
checkboxes.forEach((checkbox)=>{
  checkbox.addEventListener( 'click', function () {
    tags = document.querySelector('.selector-tag').querySelectorAll('input[type="checkbox"]:checked');
    tags = Array.from(tags).map(tag => {return tag.id;});
    audiences = document.querySelector('.selector-audience').querySelectorAll('input[type="checkbox"]:checked');
    audiences = Array.from(audiences).map(audience => {return audience.id;});

    if (tags.length === 0 && audiences.length === 0){
      covers.forEach((cover) =>{
        cover.style.display = 'block';
      });
    }
    else {
      filterCovers(tags, audiences);
    }
  }, {passive: true} );
});


function filterCovers(themes, audiences) {
  let visible_covers = num_covers;
  let notification_node = document.getElementsByClassName('notification-education');
  if (notification_node.length) {
    notification_node[0].parentNode.removeChild(notification_node[0]);
  }
  covers.forEach((cover) =>{ cover.style.display = 'block'; });

  let covers_array = Array.from(covers);
  covers_array.map((cover) => {
    let hidden = false;
    let includes_theme =  true;
    let includes_audience = true;
    let cover_tags = JSON.parse(cover.dataset.tags);

    if (themes.length !== 0 ) {
      includes_theme = cover_tags.some(cover_tag => themes.includes(cover_tag) );
    }
    if (audiences.length !== 0) {
      includes_audience = cover_tags.some(cover_tag => audiences.includes(cover_tag) );
    }

    if (!includes_theme) {
      cover.style.display = 'none';
      hidden = 1;
    }

    if (!hidden) {
      if (!includes_audience) {
        cover.style.display = 'none';
        hidden = 1;
      }
    }

    if (hidden) {
      visible_covers = visible_covers - 1 ;
      if (visible_covers === 0) {
        // Regex to match the last comma in a string
        // Matches ', ' and uses negative lookahead to ensure it's the last occurrence
        const regex = /(, )(?!.*,)/gi;
        // Make the arrays pretty and human readable
        let pretty_print_themes = themes.join(', ').toLowerCase().replace(regex, ' of ' );
        let pretty_print_audiences = audiences.join(', ').toLowerCase().replace(regex, ' of ' );
        let notification = document.createElement('p');
        notification.innerHTML = `<strong>Onee! We hebben geen lesmaterialen over ${pretty_print_themes} bedoeld voor ${pretty_print_audiences}.</strong><br>Probeer anders nog eens andere zoekcriteria?`;
        notification.className = 'notification-education';
        let target = document.querySelectorAll('.row.limit-visibility');
        target.parentNode.insertBefore( notification, target.nextSibling );
      }
    }
  });
}
