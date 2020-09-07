import $ from 'jquery';

$( '.page-template a' ).each(function( index ) {
  this.addEventListener('click', function(e){
    console.log( e );
    if (e.target.classList.contains('external-link')){

      console.log(e.target.children.item(0));
      e.target.removeChild(e.target.children.item(0));
    }
    console.log( e.target.outerHTML );
    const post_id = window['e_activism']['post_id'];
    const counter_id = window['e_activism']['links'].indexOf( e.target.outerHTML );
    // const counter_id = 1;
    fetch('https://www.planet4.test/wp-json/P4NL/v1/counter/', {
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
