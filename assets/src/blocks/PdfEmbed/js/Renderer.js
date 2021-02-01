import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../scss/App.css';
import Viewer from './Viewer.js';
import Toolbar from './Toolbar.js';
import pdfjsLib from 'pdfjs-dist/webpack';

// pdfjsLib.GlobalWorkerOptions.workerSrc = './worker.js';


class Renderer extends Component {
  static get propTypes() {
    return {
      'url': PropTypes.string,
    };
  }

  componentDidMount() {
    let loadingTask = pdfjsLib.getDocument(this.props.url);
    loadingTask.promise.then((doc) => {
      console.log(`Document ${this.props.url} loaded ${doc.numPages} page(s)`);
      this.viewer.setState({
        doc,
      });
    }, (reason) => {
      console.error(`Error during ${this.props.url} loading: ${reason}`);
    });
  }
  zoomIn() {
    this.viewer.setState({
      scale: this.viewer.state.scale * 1.1
    });
  }
  zoomOut() {
    this.viewer.setState({
      scale: this.viewer.state.scale / 1.1
    });
  }
  displayScaleChanged(e) {
    this.toolbar.setState({
      scale: e.scale
    });
  }
  render() {
    console.log(this);

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to PDF.js</h2>
        </div>
        <Toolbar
          ref={(ref) => this.toolbar = ref}
          onZoomIn={(e) => this.zoomIn(e)}
          onZoomOut={(e) => this.zoomOut(e)}></Toolbar>
        <div className="App-body">
          <Viewer
            ref={(ref) => this.viewer = ref}
            onScaleChanged={(e) => this.displayScaleChanged(e)}></Viewer>
        </div>
      </div>
    );
  }
}

// Renderer.propTypes = {
//   url: PropTypes.string,
// };

export default Renderer;
