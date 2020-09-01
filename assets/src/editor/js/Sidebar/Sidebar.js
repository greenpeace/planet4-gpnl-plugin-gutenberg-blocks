import React from 'react'
import RefreshButton from './RefreshButton';
import Toggle from "./Toggle";

const { Fragment } = wp.element;
const { PluginSidebarMoreMenuItem, PluginSidebar } = wp.editPost;

const blockName = "GPNL E-Activism";
const blockNameHTML = blockName.toLowerCase().replace(" ", "-");

/**
 * Sidebar component voor the gutenberg editor.
 */
class NL_Sidebar_E_activism extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      actionsTracking: this.getMetaFieldValue('actionsTracking'),
      APItest: "initialValue",
      editorContent: '',
      parsedContent: []
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

  }

  componentDidMount() {
    const post_id = wp.data.select("core/editor").getCurrentPostId();
    let editedContent = this.getCurrentContent();
    this.setState( {
      editorContent: editedContent,
      parsedContent: this.parseContent(editedContent)
      }
    )
    wp.apiFetch({path: '/P4NL/v1/counter/'+post_id}).then(response => {
      this.setState({
        APItest: response
      })
    });
  }

  setMetaFieldValue( field, value ) { // the 'field' is the current property to be updated
    let meta = wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ).e_activism;

    // Make sure all props are defined. (and merge with current metadata values)
    meta = {
      actionsTracking: '',
      test: '',
      ...meta,
    };

    // Then update the current property.
    meta[ field ] = value;

    wp.data.dispatch( 'core/editor' ).editPost({ meta: { e_activism: meta } });
  }


  getMetaFieldValue(field){
    // return wp.data.select( 'core/editor' ).getCurrentPostAttribute( 'meta' )['e_activism'][ field ];
    return wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )['e_activism'][ field ];
  }

  getCurrentContent(){
    return wp.data.select( "core/editor" ).getEditedPostContent();
  }

  parseContent(data) {
    const regex = /<a .*?<\/a>/gi;
    return data.match(regex);
  }

  handleToggle(){
    this.handleRefresh();
    console.log("Actionstracking: "+!this.state.actionsTracking)
    this.setMetaFieldValue('actionsTracking', !this.state.actionsTracking);
    this.setState( {actionsTracking: !this.state.actionsTracking});
  }

  handleRefresh() {
    let newContent = this.getCurrentContent();
    let contentChanged = this.state.editorContent === newContent ? 0 : 1;
    if (contentChanged) {
      this.setState({
        editorContent: newContent,
        parsedContent: this.parseContent(newContent)
      } );
    }
  }

  render() {
    const listItems = this.state.parsedContent.map((href, index) =>
      <li key={index}><input type="checkbox"></input> {href}</li>
    );
    return (
      <Fragment>

        <PluginSidebarMoreMenuItem target="gpnl-sidebar" icon='editor-customchar'>{ blockName }</PluginSidebarMoreMenuItem>

        <PluginSidebar name="gpnl-sidebar" title={ blockName } >
          <div className={blockNameHTML+"-sidebar-content"}>

            <h2>CTA Tracking</h2>
            <Toggle state={this.state.actionsTracking} handler={this.handleToggle}></Toggle>

            { this.state.actionsTracking &&
              <Fragment>
                <RefreshButton handler={this.handleRefresh}></RefreshButton>

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
    )

  }

}

export default NL_Sidebar_E_activism
