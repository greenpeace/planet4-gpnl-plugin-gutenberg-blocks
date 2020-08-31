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
class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      actionsTracking: false,
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
    wp.apiFetch({path: '/P4NL/v1/counter/'+post_id}).then(response => {
      this.setState({
        APItest: response,
        editorContent: editedContent,
        parsedContent: this.parseContent(editedContent)
      })
    });
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

export default Sidebar
