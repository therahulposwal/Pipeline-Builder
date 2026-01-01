// src/nodes/transformationNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TransformationNode = ({ id, data }) => {
  const [outputFormat, setOutputFormat] = useState(data?.outputFormat || 'json');
  const [schema, setSchema] = useState(data?.schema || '');

  const handleFormatChange = (e) => setOutputFormat(e.target.value);
  const handleSchemaChange = (e) => setSchema(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' }
  ];

  return (
    <BaseNode id={id} label="Transform" handles={handles}>
      <label>
        Output Format:
        <select value={outputFormat} onChange={handleFormatChange}>
          <option value="text">Text</option>
          <option value="json">JSON</option>
          <option value="xml">XML</option>
          <option value="csv">CSV</option>
        </select>
      </label>
      <label>
        Transformation Schema:
        <textarea 
          value={schema} 
          onChange={handleSchemaChange} 
          placeholder="Define structure..."
          style={{ height: '60px', resize: 'vertical', fontFamily: 'monospace' }}
        />
      </label>
    </BaseNode>
  );
};