// src/nodes/databaseNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DatabaseNode = ({ id, data }) => {
  const [query, setQuery] = useState(data.query);

  const handleQueryChange = (e) => setQuery(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: 'query_in' },
    { type: 'source', position: Position.Right, id: 'result' }
  ];

  return (
    <BaseNode id={id} label="Database" handles={handles}>
        <label>
          SQL Query:
          <textarea 
            value={query} 
            onChange={handleQueryChange}
            placeholder="e.g. SELECT * FROM users"
            style={{ height: '60px', fontFamily: 'monospace' }}
          />
        </label>
    </BaseNode>
  );
};