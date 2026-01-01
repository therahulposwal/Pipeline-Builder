// src/nodes/BaseNode.js
import { Handle } from 'reactflow';

export const BaseNode = ({ id, label, children, handles = [], type }) => {
  return (
    <div className={`custom-node ${type ? `node-${type}` : ''}`}>
      <div className="custom-node-header">
        {label}
      </div>
      <div className="custom-node-body nodrag">
        {children}
      </div>
      
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
          className="custom-handle"
        />
      ))}
    </div>
  );
};