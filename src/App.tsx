import { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant
} from '@xyflow/react';
import type { Connection, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { CustomNode } from './components/CustomNode';
import { CustomShapeNode } from './components/CustomShapeNode';
import { SwimlaneNode } from './components/SwimlaneNode';
import { Sidebar } from './components/Sidebar';
import { initialNodes, initialEdges } from './data/mockData';
import './App.css';

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeData, setSelectedNodeData] = useState<any>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // useMemo for custom node types
  const nodeTypes = useMemo(() => ({ custom: CustomNode, shape: CustomShapeNode, swimlane: SwimlaneNode }), []);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback((_: any, node: any) => {
    setSelectedNodeData(node.data);
    setIsSidebarOpen(true);
  }, []);

  const onPaneClick = useCallback(() => {
    setIsSidebarOpen(false);
    setNodes((nds) => nds.map(n => ({ ...n, selected: false })));
  }, [setNodes]);

  return (
    <div className="app-container">
      <div className="app-title">
        <h1>Sistema de Gestión de la Calidad</h1>
      </div>
      <div className="map-section">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          nodeTypes={nodeTypes}
          fitView
          attributionPosition="bottom-left"
        >
          <Background variant={BackgroundVariant.Dots} gap={16} size={1} />
          <Controls />
          <MiniMap
            nodeColor={(n: any) => {
              if (n.data?.category === 'estrategico') return '#38bdf8';
              if (n.data?.category === 'operativo') return '#34d399';
              if (n.data?.category === 'soporte') return '#fbbf24';
              if (n.data?.shape === 'start') return '#10b981';
              if (n.data?.shape === 'end') return '#a21caf';
              return '#3b82f6';
            }}
            maskColor="rgba(255, 255, 255, 0.7)"
            style={{ backgroundColor: '#f1f5f9' }}
          />
        </ReactFlow>
      </div>

      <Sidebar
        open={isSidebarOpen}
        nodeData={selectedNodeData}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}
