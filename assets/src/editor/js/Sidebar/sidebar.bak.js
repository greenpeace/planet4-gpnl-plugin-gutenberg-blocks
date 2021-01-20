( function( wp ) {
  let registerPlugin = wp.plugins.registerPlugin;
  let PluginSidebar = wp.editPost.PluginSidebar;
  let el = wp.element.createElement;
  let Text = wp.components.TextControl;
  let withSelect = wp.data.withSelect;
  let withDispatch = wp.data.withDispatch;
  let compose = wp.compose.compose;

  let MetaBlockField = compose(
    withDispatch( function( dispatch ) {
      return {
        setMetaFieldValue: function( value ) {
          dispatch( 'core/editor' ).editPost(
            { meta: { sidebar_plugin_meta_block_field: value } }
          );
        }
      };
    } ),
    withSelect( function( select ) {
      let metaFieldValue = select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ 'sidebar_plugin_meta_block_field' ];
      return { metaFieldValue: metaFieldValue };
    } )
  )( function( props ) {
    return el( Text, {
      label: 'Meta Block Field',
      value: props.metaFieldValue,
      onChange: function( content ) {
        props.setMetaFieldValue( content );
      },
    } );
  } );

  registerPlugin( 'my-plugin-sidebar', {
    render: function() {
      return el( PluginSidebar,
        {
          name: 'my-plugin-sidebar',
          icon: 'admin-post',
          title: 'My plugin sidebar',
        },
        el( 'div',
          { className: 'plugin-sidebar-content' },
          el( MetaBlockField )
        )
      );
    }
  } );
} )( window.wp );
