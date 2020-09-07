import $ from 'jquery';

$( '.page-template a' ).each(function( index ) {
  this.addEventListener('click', function(e){
    fetch('https://www.planet4.test/wp-json/P4NL/v1/counter/590', {
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
