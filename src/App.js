import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkdownViewer from './components/MarkdownViewer'
import Signature from './components/Signature';

const PREVIEW = `
# Markdown Output Preview
---
## What's going on here?!

We are currently just rendering a simple \`<div></div>\` with React.

And here's the magic of Marked.JS :
\`\`\`

  <div 
    dangerouslySetInnerHTML = {
      {
        __html: marked( this.props.input, { renderer: renderer } )
      }
    } />

\`\`\`

And that's it !


> Wait, **that** simple?!


Yeah... _that_ simple!

#### So, let's sum up the mecanism :
  - get input
  - parse input
  - display output

Check my [GitHub](https://github.com/VictorFouquet)!
![React Logo w/ Text](https://goo.gl/Umyytc)
`

class App extends Component {
  render() {
      return (
      <div className="App">
        <MarkdownViewer preview = { PREVIEW } />
        <footer>
          <Signature />
        </footer>
      </div>
    );
  }
}

export default App;
