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
    const regex = /(<a.*?a>)/gmi;
    let matches =[];

    let m;

    while ((m = regex.exec(data)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (match === matches[groupIndex] ) return;
        matches.push(match)
        console.log(`Found match, group ${groupIndex}: ${match}`);
      });
    }

    return matches;
  }

  handleToggle(){
    this.setState( {actionsTracking: !this.state.actionsTracking});
  }

  handleRefresh() {
    console.log("Sidebar: refresh")
    let newContent = this.getCurrentContent();
    let contentChanged = this.state.content === newContent ? 0 : 1;
    if (contentChanged) {
      this.setState({
        editorContent: newContent,
        parsedContent: this.parseContent(newContent)
      } );
    }
    console.log('Content changed? ' + contentChanged );
  }

  render() {
    console.log("Sidebar is being rendered")
    const listItems = this.state.parsedContent.map((href, index) =>  <li key={index}>{href}</li>);
    return (
      <Fragment>

        <PluginSidebarMoreMenuItem target="gpnl-sidebar" icon='editor-customchar'>
        {/*<PluginSidebarMoreMenuItem target={blockNameHTML+"-sidebar-menu"} icon='editor-customchar'>*/}
          { blockName }
        </PluginSidebarMoreMenuItem>

        {/*<PluginSidebar name={blockNameHTML+"-sidebar"} title={ blockName } >*/}
        <PluginSidebar name="gpnl-sidebar" title={ blockName } >
          <div className={blockNameHTML+"-sidebar-content"}>

            <h2>Links op deze pagina</h2>
            <Toggle toggle={this.state.actionsTracking} handler={this.handleToggle}></Toggle>

              <Fragment>
                <RefreshButton handler={this.handleRefresh}></RefreshButton>

                <div>
                  { this.state.APItest } <br></br>
                  <h2>Editor Content</h2>
                  { this.state.editorContent }
                  <h2>Parsed Content</h2>
                  <ul>{ listItems }</ul>
                </div>
              </Fragment>
          </div>
        </PluginSidebar>

      </Fragment>
    )

  }

}

export default Sidebar
