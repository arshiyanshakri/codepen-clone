import React,{useState} from "react";
import Editor from "./Editor";
import Header from "./Header";
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'


function App() 
{
const [html, setHtml]=useState('')
const [css, setCss]=useState('')
const [js, setJs]=useState('')

const format=`
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html>
`
  return (
    <>
    <Header/>
    <div className="backgnd editor">
      <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
       <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
    </div>

    <div className="backgnd">
        <iframe
          srcDoc={format}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
    </div>
    </>
  )
}

export default App;
