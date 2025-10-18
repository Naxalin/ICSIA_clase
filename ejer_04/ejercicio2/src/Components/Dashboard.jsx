import React, { useState } from 'react';
import proyectos from '../datos/proyectos';

import Pendiente from './column/ProjectColumnPendiente';
import EnProgreso from './column/ProjectColumnProgreso';
import Finalizado from './column/ProjectColumnFinalizado';

function DashBoard() {
    const [proyectosState, setProyectosState] = useState(proyectos);

    const actualizarEstado = (proyectoId, nuevoEstado) => {
        setProyectosState(prev =>
            prev.map(p => p.id === proyectoId ? { ...p, estado: nuevoEstado } : p)
        );
    };

    return (
        <div className="container-fluid mt-3">
            <div className="d-flex gap-3 overflow-auto">
                <Pendiente proyectos={proyectosState} onChangeEstado={actualizarEstado} />
                <EnProgreso proyectos={proyectosState} onChangeEstado={actualizarEstado} />
                <Finalizado proyectos={proyectosState} onChangeEstado={actualizarEstado} />
            </div>
        </div>
    );
}

export default DashBoard;
