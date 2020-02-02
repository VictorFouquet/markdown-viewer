import React, { Component } from 'react'

class Editor extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <div id="adaptive-container">
        <div id="editor-container">
          <h2 id="editor-title">Editor</h2>
          <textarea 
            id="editor" 
            value={this.props.input} 
            onChange={this.props.handleChange} />
        </div>
      </div>
    );
  }
}

export default Editor