// src/nodes/filterNode.js
import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [field, setField] = useState(data?.field || '');
  const [condition, setCondition] = useState(data?.condition || 'contains');
  const [value, setValue] = useState(data?.value || '');

  const handleFieldChange = (e) => setField(e.target.value);
  const handleConditionChange = (e) => setCondition(e.target.value);
  const handleValueChange = (e) => setValue(e.target.value);

  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'filtered' }
  ];

  return (
    <BaseNode id={id} label="Filter" handles={handles}>
       <label>
        Field:
        <input type="text" value={field} onChange={handleFieldChange} placeholder="e.g. status" />
       </label>
       <label>
        Condition:
        <select value={condition} onChange={handleConditionChange}>
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="not_equals">Not Equals (!=)</option>

          <option value="gt">{'>'} Greater Than</option>
          <option value="lt">{'<' } Less Than</option>
          <option value="gte">{'>='} Greater or Equal</option>
          <option value="lte">{'<='} Less or Equal</option>

          <option value="starts_with">Starts With</option>
          <option value="ends_with">Ends With</option>
        </select>

       </label>
       <label>
        Value:
        <input type="text" value={value} onChange={handleValueChange} placeholder="e.g. active" />
       </label>
    </BaseNode>
  );
};