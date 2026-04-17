import { Handle, Position } from '@xyflow/react';

export function CustomShapeNode({ data }: any) {
    if (data.shape === 'start') {
        return (
            <div style={{
                width: 40, height: 40, borderRadius: '50%', border: '4px double #10b981', backgroundColor: '#ecfdf5',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <Handle type="source" position={Position.Right} style={{ opacity: 0 }} />
            </div>
        );
    }

    return (
        <div style={{
            width: 40, height: 40, borderRadius: '50%', border: '4px double #4a044e', backgroundColor: '#701a75',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', backgroundColor: '#4a044e' }}></div>
            <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
        </div>
    );
}
