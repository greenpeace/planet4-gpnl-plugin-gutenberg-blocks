import $ from 'jquery';

let tags, 
  audiences = [];
let covers = $('.cover-card-column');
let num_covers = covers.length;
$( '.selector input[type=checkbox]' ).on( 'click', function () {
  tags = $('.selector-tag').find('input[type="checkbox"]:checked').map(function() { return this.id; }).get();
  audiences = $('.selector-audience').find('input[type="checkbox"]:checked').map(function() { return this.id; }).get();

  if (tags.length === 0 && audiences.length === 0){
    covers.show();
  }
  else {
    filterCovers(tags, audiences);
  }
} );

function filterCovers(themes, audiences) {
  let visible = num_covers;
  let notification_node = document.getElementsByClassName('notification-education');
  if (notification_node) {
    $(notification_node[0]).remove();
  }
  covers.show();
  covers.map(function(){
    let cover = this;
    let hidden = false;
    let includes_theme =  true;
    let includes_audience = true;
    let cover_tags = $(cover).data('tags');

    if (themes.length !== 0 ) {
      includes_theme = cover_tags.some(covertag => themes.includes(covertag) );
    }
    if (audiences.length !== 0) {
      includes_audience = cover_tags.some(covertag => audiences.includes(covertag) );
    }

    if (!includes_theme) {
      $(cover).hide();
      hidden = 1;
    }

    if (!hidden) {
      if (!includes_audience) {
        $(cover).hide();
        hidden = 1;
      }
    }

    if (hidden) {
      visible = visible - 1 ;
      if (visible === 0) {
        // Regex to match the last comma in a string
        // Matches ', ' and uses negative lookahead to ensure it's the last occurrence
        const regex = /(, )(?!.*,)/gi;
        // Make the arrays pretty and human readable
        let pretty_print_themes = themes.join(', ').toLowerCase().replace(regex, ' of ' );
        let pretty_print_audiences = audiences.join(', ').toLowerCase().replace(regex, ' of ' );
        let notification = `<p class="notification-education"><strong>Onee! We hebben geen lesmaterialen over ${pretty_print_themes} bedoeld voor ${pretty_print_audiences}.</strong><br>Probeer anders nog eens andere zoekcriteria?</p>`;
        $('.row.limit-visibility').after(notification);
      }
    }
  });
}
