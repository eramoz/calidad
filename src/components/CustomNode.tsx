import { Handle, Position } from '@xyflow/react';

export function CustomNode({ data, selected }: any) {
  return (
    <div className={`custom-node cat-${data.category} ${selected ? 'selected' : ''}`}>
      <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
      <div className="node-content">
        <div style={{ fontSize: '0.45rem', fontWeight: 700, marginBottom: '2px', opacity: 0.8 }}>
          {data.code}
        </div>
        <div style={{ fontSize: '0.55rem', fontWeight: 800, textAlign: 'center', lineHeight: 1.2, margin: '2px 0' }}>
          {data.label}
        </div>
        <div style={{ marginTop: '3px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ border: '1px solid currentColor', width: '8px', height: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '6px' }}>+</div>
        </div>
      </div>
      <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />

      {/* Invisible additional handles for vertical connections */}
      <Handle type="target" position={Position.Top} id="top-target" style={{ opacity: 0 }} />
      <Handle type="source" position={Position.Bottom} id="bottom-source" style={{ opacity: 0 }} />
    </div>
  );
}
