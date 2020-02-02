import React, { Component } from 'react'
import { render } from '@testing-library/react';
import Editor from './Editor'
import Preview from './Preview'

const marked = require("marked");

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();

renderer.link = ( href, title, text ) => `<a target="_blank" href="${ href }" title="${ title }">${ text }</a>`;

class MarkdownViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        inputValue: this.props.preview,
    };
    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
    this.setState({
        inputValue: event.target.value
    });
    }
    
    render(){
    return (
        <div>
        <Editor 
            input={this.state.inputValue} 
            handleChange={this.handleChange} />
        <Preview input={this.state.inputValue}/>
        </div>
    )
  }
}

export default MarkdownViewer;