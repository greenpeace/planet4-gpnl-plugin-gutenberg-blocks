/**
 * External dependencies.
 */
import React from 'react'

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { PluginSidebarMoreMenuItem, PluginSidebar } = wp.editPost;


/**
 * Sidebar component voor the gutenberg editor.
 */
class Sidebar extends React.Component {

  constructor() {

    super()

  }


  render() {

    return (
      <Fragment>

        <PluginSidebarMoreMenuItem target="metatags-sidebar" icon='editor-customchar'>

          {__("MetaTags", "metatags")}

        </PluginSidebarMoreMenuItem>

        <PluginSidebar name="metatags-sidebar" title={__("MetaTags", "metatags")} >

          <div className="metabox-sidebar-content">

            <h3>Metatags</h3>

          </div>

        </PluginSidebar>

      </Fragment>
    )

  }

}


export default Sidebar
