import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/styles.css';
//Importacion de librerias necesarias 

const TableRow: React.FC<{ caseNumber: number, caseId: string, description: string }> = ({ caseNumber, caseId, description }) => (
    <tr>
        <td>{caseNumber}</td>
        <td>{caseId}</td>
        <td>{description}</td>
        <td className="table-button">
            <button className="table-button">
                <i className="bi bi-eye"></i> Ver
            </button>
        </td>
    </tr>
);
//Se integra boton con alusion a VER para abrir el caso y ver la descipcion y demas información
//TableTor representa una fila en la tabla y recibe caseNumber y caseId como props

const Tabla: React.FC = () => {
    const cases = [
        { caseNumber: 1, caseId: 'XD545', description: 'Intento de homicidio' },
        { caseNumber: 2, caseId: 'AR123', description: 'Pamfleto de asesitano' },
        { caseNumber: 3, caseId: 'TY411', description: 'Atentado con carro-bomba' },
    ];

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Caso #</th>
                    <th>Id Caso</th>
                    <th>Descripción</th>
                    <th>Ver</th>
                </tr>
            </thead>
            <tbody>
                {cases.map((caseInfo) => (
                    <TableRow 
                        key={caseInfo.caseId} 
                        caseNumber={caseInfo.caseNumber} 
                        caseId={caseInfo.caseId} 
                        description={caseInfo.description} 
                    />
                ))}
            </tbody>
        </Table>
    );
}

const RecepCasos: React.FC = () => {
    return (
        <div>
            <Tabla />
        </div>
    );
}
//Finalmente retornamos la tabla

export default RecepCasos;