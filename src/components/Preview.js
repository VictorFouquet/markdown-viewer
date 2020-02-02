import React, { Component } from 'react'

const marked = require("marked");

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

renderer.link = ( href, title, text ) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;

class Preview extends React.Component {
  
  render(){
    return (
      <div id="preview-container">
        <h1 id="preview-title">Preview</h1>
        <div 
          id="preview" 
          dangerouslySetInnerHTML = {{__html: marked(this.props.input, { renderer: renderer })}}>
        </div>
      </div>
    )
  }
}

export default Preview