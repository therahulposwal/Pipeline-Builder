// src/nodes/textNode.js
import { useState, useEffect, useRef } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();

  // 1. Extract variables and create handles
  useEffect(() => {
    const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = [...currText.matchAll(variableRegex)];
    const variables = [...new Set(matches.map(m => m[1]))];

    const newHandles = variables.map((variable, index) => ({
      type: 'target',
      position: Position.Left,
      id: variable,
      style: { top: `${(index + 1) * (100 / (variables.length + 1))}%` }
    }));

    newHandles.push({ type: 'source', position: Position.Right, id: 'output' });

    setHandles(newHandles);
  }, [currText]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [handles, id, updateNodeInternals]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.width = 'auto';

      const newHeight = textareaRef.current.scrollHeight;
      const newWidth = textareaRef.current.scrollWidth;

      textareaRef.current.style.height = `${newHeight}px`;
      textareaRef.current.style.width = `${newWidth}px`;
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <label style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        Text:
        <textarea 
          ref={textareaRef}
          value={currText}
          placeholder="Write here..."
          onChange={handleTextChange} 
          style={{
            overflow: 'hidden',
            resize: 'none',
            minHeight: '40px',
            minWidth: '220px',
            maxWidth: '600px',
            boxSizing: 'border-box',
            fontFamily: 'monospace',
            lineHeight: '1.4',
            whiteSpace: 'pre',
          }}
        />
      </label>
    </BaseNode>
  );
};