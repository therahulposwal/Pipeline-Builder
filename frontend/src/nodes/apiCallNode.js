// src/nodes/apiCallNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APICallNode = ({ id, data }) => {
  const [url, setUrl] = useState(data.url);
  const [method, setMethod] = useState(data?.method || 'GET');

  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleMethodChange = (e) => setMethod(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: 'payload' },
    { type: 'source', position: Position.Right, id: 'response' }
  ];

  return (
    <BaseNode id={id} label="API Call" handles={handles}>
        <label>
          Endpoint:
          <input type="text" value={url} onChange={handleUrlChange} placeholder="e.g. https://api.example.com"/>
        </label>
        <label>
          Method:
          <select value={method} onChange={handleMethodChange}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
          </select>
        </label>
    </BaseNode>
  );
};