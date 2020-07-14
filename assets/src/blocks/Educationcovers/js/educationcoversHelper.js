import $ from 'jquery';

let tags, audiences = [];
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
  covers.show();
  covers.map(function(){
    let cover = this;
    let hidden = false;
    let includes_theme =  true;
    let includes_audience = true;
    let cover_tags = $(cover).data('tags');

    if (themes.length !== 0 ) {
      includes_theme = cover_tags.some(covertag => themes.includes(covertag) )
    }
    if (audiences.length !== 0) {
      includes_audience = cover_tags.some(covertag => audiences.includes(covertag) )
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
    }
  });
}
