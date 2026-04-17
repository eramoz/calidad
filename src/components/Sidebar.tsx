import { X, User } from 'lucide-react';

export function Sidebar({ open, nodeData, onClose }: any) {
    return (
        <div className={`sidebar-overlay glass-panel ${open ? 'open' : ''}`}>
            <div className="sidebar-content">
                <div className="sidebar-header">
                    <h2 className="sidebar-title">
                        Detalles del Proceso
                    </h2>
                    <button onClick={onClose} className="close-btn">
                        <X size={20} />
                    </button>
                </div>

                {nodeData ? (
                    <div className="sidebar-body">
                        <div className="detail-group">
                            <div className="detail-label">Nombre del paso</div>
                            <div className="detail-value" style={{ fontWeight: 500 }}>{nodeData.label}</div>
                        </div>

                        {nodeData.description && (
                            <div className="detail-group">
                                <div className="detail-label">Descripción</div>
                                <div className="detail-value">{nodeData.description}</div>
                            </div>
                        )}

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div className="glass-panel" style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <User size={16} style={{ color: '#34d399' }} />
                                <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase' }}>Responsable(s)</span>
                                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem' }}>
                                    {(nodeData.owner || 'Equipo').split(',').map((owner: string, index: number) => (
                                        <li key={index} style={{ marginBottom: '2px' }}>{owner.trim()}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {nodeData.tags && (
                            <div className="detail-group">
                                <div className="detail-label">Etiquetas</div>
                                <div className="tag-container">
                                    {nodeData.tags.map((tag: string) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>
                ) : (
                    <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Selecciona un nodo para ver sus detalles.</div>
                )}
            </div>
        </div>
    );
}
