import React from 'react';
import RefreshButton from './RefreshButton';
import Toggle from './Toggle';

const { Fragment } = wp.element;
const { PluginSidebarMoreMenuItem, PluginSidebar } = wp.editPost;

const blockName = 'GPNL E-Activism';
const blockNameHTML = blockName.toLowerCase().replace(' ', '-');

/**
 * Sidebar component voor the gutenberg editor.
 */
class NL_Sidebar_E_activism extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // APItest: "initialValue",
      actionsTracking: false,
      editorContent: '',
      editorLinks: [],
      savedLinks: []
    };
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

  }

  componentDidMount() {
    // const post_id = wp.data.select("core/editor").getCurrentPostId();
    let currentContent = this.getCurrentContent();
    this.setState( {
      actionsTracking: this.getMetaFieldValue('actionsTracking'),
      editorContent: currentContent,
      editorLinks: this.extractLinks(currentContent),
      savedLinks: this.getMetaFieldValue('savedLinks'),
      }
    );
  }

  setMetaFieldValue( field, value ) {
    let meta = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ).e_activism;

    // Make sure all props are defined. (and merge with current metadata values)
    meta = {
      actionsTracking: '',
      savedLinks: [],
      trackedLinks: [],
      ...meta,
    };

    // Then update the current property.
    meta[ field ] = value;

    wp.data.dispatch( 'core/editor' ).editPost({ meta: { e_activism: meta } });
  }

  getMetaFieldValue(field){
    try {
      return wp.data.select( 'core/editor' ).getCurrentPostAttribute( 'meta' )['e_activism'][ field ];
    }
    catch (e) {
      return '';
    }
  }

  getCurrentContent(){
    return wp.data.select( 'core/editor' ).getEditedPostContent();
  }

  extractLinks(data) {
    const regex = /<a .*?<\/a>/gi;
    return data.match(regex) ? data.match(regex) : [];
  }

  handleToggle(){
    this.handleRefresh();
    let toggleState = !this.state.actionsTracking;
    this.setMetaFieldValue('actionsTracking', toggleState);
    this.setState( {actionsTracking: toggleState});
  }

  handleRefresh() {
    let newContent = this.getCurrentContent();
    let contentChanged = this.state.editorContent === newContent ? 0 : 1;
    if (contentChanged) {
      this.setState({
        editorContent: newContent,
        editorLinks: this.extractLinks(newContent)
      } );
      return;
    }
    this.setMetaFieldValue('savedLinks', this.extractLinks(newContent));
  }

  render() {
    const listItems = this.state.editorLinks.map((href, index) => <li key={index}><input type="checkbox"/> {href}</li> );
    return (
      <Fragment>

        <PluginSidebarMoreMenuItem target="gpnl-sidebar" icon='editor-customchar'>{ blockName }</PluginSidebarMoreMenuItem>

        <PluginSidebar name="gpnl-sidebar" title={ blockName } >
          <div className={blockNameHTML+'-sidebar-content'}>

            <h2>CTA Tracking</h2>
            <Toggle state={this.state.actionsTracking} handler={this.handleToggle}/>

            { this.state.actionsTracking &&
              <Fragment>
                <RefreshButton handler={this.handleRefresh}/>

                <div>
                  <h2>Links op pagina:</h2>
                  <p>Selecteer links om te tellen</p>
                  <ul>{ listItems }</ul>
                </div>
              </Fragment>
            }
          </div>
        </PluginSidebar>

      </Fragment>
    );

  }

}

export default NL_Sidebar_E_activism;
