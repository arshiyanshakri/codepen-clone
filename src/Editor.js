
import React,{useState} from 'react'
import { Controlled as MyControlledEditor} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'


function Editor(props) 
{
    const [open, setOpen] = useState(true)

    const {
        language,
        displayName,
        value,
        onChange
      } = props

      function handleChange(editor, data, value) 
      {
          onChange(value)
      }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>

        <div className='editor-title'>
            {displayName}
            <button
               type="button" className="btn"
               onClick={() => setOpen(prevOpen => !prevOpen)}
               style={{color:'white'}}
            >
            {open ? "<<" : ">>"} </button>
        </div>

        <MyControlledEditor
            onBeforeChange={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
                lineNumbers: true
            }}
        />
    </div>
  )
}

export default Editor