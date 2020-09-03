import $ from 'jquery';

$( '.page-template a' ).each(function( index ) {
  this.addEventListener('click', function(){
    fetch('https://www.planet4.test/wp-json/P4NL/v1/counter/590', {
      method: 'PATCH',
      body: 'test'
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
