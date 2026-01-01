// src/nodes/noteNode.js
import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');

  const handleChange = (e) => setText(e.target.value);

  return (
    <BaseNode id={id} label="Note" style={{ backgroundColor: '#FFF9C4', color: '#333' }}>
       <label style={{ display: 'block', height: '100%' }}>
         <span style={{ display: 'none' }}>Note Text</span>
         <textarea 
          value={text} 
          onChange={handleChange}
          placeholder="Type your notes here..." 
          style={{ 
            width: '100%', 
            height: '80px', 
            border: 'none', 
            background: 'transparent', 
            resize: 'none',
            outline: 'none',
            fontSize: '12px'
          }} 
         />
       </label>
    </BaseNode>
  );
};