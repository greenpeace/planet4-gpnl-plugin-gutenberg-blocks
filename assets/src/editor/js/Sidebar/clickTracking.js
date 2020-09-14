import $ from 'jquery';

$( '.page-template a' ).each(function( index ) {
  this.addEventListener('click', function(e){
    let link = this;
    let linkHTML;
    if ($(link).hasClass('external-link')) {
      let tmp_link = $(link).clone();
      $(tmp_link).find('.external-icon').detach();
      $(tmp_link).removeAttr('target');
      $(tmp_link).removeAttr('class');
      linkHTML = $(tmp_link)[0].outerHTML;
    }
    else{
      linkHTML = link.outerHTML;
    }


    let post_id = window['e_activism']['post_id'];
    let counter_id = window['e_activism']['links'].indexOf( linkHTML );
    const url = (document.location.host.includes('greenpeace.org') ? '/nl' : '') + '/wp-json/P4NL/v1/counter/';
    fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        'post_id': post_id,
        'counter_id': counter_id
      }),
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
