import type { Node, Edge } from '@xyflow/react';
import { MarkerType } from '@xyflow/react';

export const initialNodes: Node[] = [
    // SWIMLANES (Background)
    { id: 'lane-1', type: 'swimlane', position: { x: -30, y: 40 }, data: { label: 'ESTRATÉGICOS', color: '#bae6fd' }, style: { width: 1300, height: 120, zIndex: -1 }, selectable: false, draggable: false },
    { id: 'lane-2', type: 'swimlane', position: { x: -30, y: 165 }, data: { label: 'OPERATIVOS', color: '#bbf7d0' }, style: { width: 1300, height: 350, zIndex: -1 }, selectable: false, draggable: false },
    { id: 'lane-3', type: 'swimlane', position: { x: -30, y: 520 }, data: { label: 'SOPORTE', color: '#fef08a' }, style: { width: 1300, height: 160, zIndex: -1 }, selectable: false, draggable: false },

    // ESTRATÉGICOS
    { id: 'est-1', type: 'custom', position: { x: 200, y: 80 }, data: { code: 'EST-01', label: 'GESTIÓN DEL CURRÍCULO', category: 'estrategico', description: 'Proceso Estratégico', owner: 'Dirección de Gestión Académica, Subunidad de Planeamiento Curricular y Desempeño Docente, Dirección de Escuela Profesional', time: 'Continúo' } },
    { id: 'est-2', type: 'custom', position: { x: 450, y: 80 }, data: { code: 'EST-02', label: 'PLANIFICACIÓN ESTRATÉGICA', category: 'estrategico', description: 'Proceso Estratégico', owner: 'Oficina de Planeamiento y Presupuesto', time: 'Anual' } },
    { id: 'est-3', type: 'custom', position: { x: 950, y: 80 }, data: { code: 'EST-03', label: 'GESTIÓN DE LA CALIDAD', category: 'estrategico', description: 'Proceso Estratégico', owner: 'Oficina de Gestión de la Calidad', time: 'Continúo' } },

    // OPERATIVOS
    { id: 'start', type: 'shape', position: { x: 50, y: 340 }, data: { shape: 'start' } },

    { id: 'ope-1', type: 'custom', position: { x: 200, y: 320 }, data: { code: 'OPE-01', label: 'ADMISIÓN', category: 'operativo', description: 'Proceso Operativo', owner: 'Dirección de Admisión' } },

    { id: 'ope-3', type: 'custom', position: { x: 450, y: 180 }, data: { code: 'OPE-03', label: 'SEGUIMIENTO AL ESTUDIANTE', category: 'operativo', description: 'Proceso Operativo', owner: 'Dirección de Gestión Académica, Subunidad de Tutoría y Servicio Psicopedagógico, Coordinaciones de Tutoría de los programas de estudios', time: 'Mensual' } },
    { id: 'ope-2', type: 'custom', position: { x: 450, y: 260 }, data: { code: 'OPE-02', label: 'GESTIÓN APRENDIZAJE ENSEÑANZA', category: 'operativo', description: 'Proceso Operativo', owner: 'Vicerrectorado Académico, Dirección de Gestión Académica, Oficina de Cooperación Nacional e Internacional, Dirección de Escuela Profesional, Subunidad de Bibliotecas – Biblioteca Central', time: 'Semestral' } },
    { id: 'ope-5', type: 'custom', position: { x: 450, y: 350 }, data: { code: 'OPE-05', label: 'RESPONSABILIDAD SOCIAL UNIVERSITARIA', category: 'operativo', description: 'Proceso Operativo', owner: 'Dirección de Proyección Social y Extensión Cultural, Oficina de Gestión Ambiental. ', time: 'Anual' } },
    { id: 'ope-4', type: 'custom', position: { x: 450, y: 440 }, data: { code: 'OPE-04', label: 'INVESTIGACIÓN I+D+i', category: 'operativo', description: 'Proceso Operativo', owner: 'Vicerrectorado de Investigación, Dirección General de Investigación, Instituto de Investigación, Coordinaciones de Investigación, Unidades de Investigación de las Facultades', time: 'Anual' } },

    { id: 'ope-6', type: 'custom', position: { x: 750, y: 330 }, data: { code: 'OPE-06', label: 'VERIFICACIÓN DEL PERFIL DE EGRESO', category: 'operativo', description: 'Proceso Operativo', owner: 'Dirección de Gestión Académica, Dirección de Escuela Profesional', time: 'Al finalizar' } },

    { id: 'ope-7', type: 'custom', position: { x: 950, y: 180 }, data: { code: 'OPE-07', label: 'SEGUIMIENTO AL EGRESADO', category: 'operativo', description: 'Proceso Operativo', owner: 'Dirección de Proyección Social y Extensión Cultural – Subunidad de Seguimiento al Egresado, Dirección de Escuela Profesional', time: 'Anual' } },
    { id: 'ope-8', type: 'custom', position: { x: 950, y: 350 }, data: { code: 'OPE-08', label: 'GRADOS Y TITULOS', category: 'operativo', description: 'Proceso Operativo', owner: 'Secretaría General – Subunidad de Grados y Títulos', time: 'Varía' } },

    { id: 'end', type: 'shape', position: { x: 1200, y: 340 }, data: { shape: 'end' } },

    // SOPORTE
    { id: 'sop-1', type: 'custom', position: { x: 200, y: 600 }, data: { code: 'SOP-01', label: 'GESTIÓN ADMINISTRATIVA', category: 'soporte', description: 'Proceso de Soporte', owner: 'Dirección General de Administración, Unidad de Recursos Humanos' } },
    { id: 'spe-2', type: 'custom', position: { x: 450, y: 600 }, data: { code: 'SPE-02', label: 'GESTIÓN DE TIC', category: 'soporte', description: 'Proceso de Soporte', owner: 'Oficina de Tecnologías de Información' } },
    { id: 'sop-3', type: 'custom', position: { x: 700, y: 600 }, data: { code: 'SOP-03', label: 'BIENESTAR UNIVERSITARIO', category: 'soporte', description: 'Proceso de Soporte', owner: 'Dirección de Bienestar Universitario, Subunidad de Servicio Social, Subunidad de Promoción del Deporte, Subunidad de Servicio de Comedor, Subunidad de Servicio Médico Primario, Unidad de Servicios Generales' } },
    { id: 'sop-4', type: 'custom', position: { x: 950, y: 600 }, data: { code: 'SOP-04', label: 'INFORMACIÓN Y COMUNICACIÓN', category: 'soporte', description: 'Proceso de Soporte', owner: 'Oficina de Comunicación e Imagen Institucional' } },
];

const mainColor = '#9a3b72'; // Match the thick purple arrows from image

const edgeSettings = {
    type: 'smoothstep',
    style: { strokeWidth: 2, stroke: mainColor },
    markerEnd: { type: MarkerType.ArrowClosed, width: 10, height: 10, color: mainColor },
};

export const initialEdges: Edge[] = [
    { id: 'e-start-ope1', source: 'start', target: 'ope-1', ...edgeSettings },

    // From OPE-01 to multiple processes
    { id: 'e-ope1-ope2', source: 'ope-1', target: 'ope-2', ...edgeSettings },
    { id: 'e-ope1-ope5', source: 'ope-1', target: 'ope-5', ...edgeSettings },
    { id: 'e-ope1-ope4', source: 'ope-1', target: 'ope-4', ...edgeSettings },

    // From OPE-03 to OPE-02
    { id: 'e-ope3-ope2', source: 'ope-3', target: 'ope-2', sourceHandle: 'bottom-source', targetHandle: 'top-target', ...edgeSettings },

    // Multiples to OPE-06
    { id: 'e-ope2-ope6', source: 'ope-2', target: 'ope-6', ...edgeSettings },
    { id: 'e-ope5-ope6', source: 'ope-5', target: 'ope-6', ...edgeSettings },
    { id: 'e-ope4-ope6', source: 'ope-4', target: 'ope-6', ...edgeSettings },

    // OPE-06 split
    { id: 'e-ope6-ope7', source: 'ope-6', target: 'ope-7', ...edgeSettings },
    { id: 'e-ope6-ope8', source: 'ope-6', target: 'ope-8', ...edgeSettings },

    // OPE-07 to OPE-08
    { id: 'e-ope7-ope8', source: 'ope-7', target: 'ope-8', sourceHandle: 'bottom-source', targetHandle: 'top-target', ...edgeSettings },

    // OPE-08 to end
    { id: 'e-ope8-end', source: 'ope-8', target: 'end', ...edgeSettings }
];
