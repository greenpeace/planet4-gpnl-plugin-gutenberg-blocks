let links = document.querySelectorAll( '.page-template a, .page-template button[data-bs-toggle], .page-template button .btn-send-message' );

for (let link of links) {
  link.addEventListener('click', function(e){ // eslint-disable-line
    let linkHTML;
    if (link.classList.contains('external-link')) {
      let tmp_link = link.cloneNode(true);
      tmp_link.removeChild(tmp_link.querySelector('.external-icon'));
      tmp_link.classList.remove('external-link');
      linkHTML = tmp_link.outerHTML;
    }
    else{
      linkHTML = link.outerHTML;
      console.log(linkHTML);

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
        const event = new CustomEvent('updateCounter', { detail: result });
        window.dispatchEvent(event);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, {passive: true});
}
