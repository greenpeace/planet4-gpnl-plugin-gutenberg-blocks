function Transform() {

  return (

    {
      from: [
        {
          type: 'shortcode',
          // Shortcode tag can also be an array of shortcode aliases
          tag: 'shortcake_noindex',
          attributes: null
        }
      ]
    }
  );
}

export default Transform();
