export function SwimlaneNode({ data }: any) {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            border: `2px solid ${data.color}`,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '8px',
            position: 'relative',
            display: 'flex'
        }}>
            <div style={{
                width: '45px',
                backgroundColor: data.color,
                borderTopLeftRadius: '6px',
                borderBottomLeftRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '2px 0 5px rgba(0,0,0,0.05)'
            }}>
                <div style={{
                    transform: 'rotate(-90deg)',
                    whiteSpace: 'nowrap',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: '#1e293b',
                    letterSpacing: '0.05em'
                }}>
                    {data.label}
                </div>
            </div>
        </div>
    );
}
