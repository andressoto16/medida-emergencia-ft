import React from "react";
import { CustomeTable } from 'eco-unp/ui';


const RecepCasos: React.FC = () => {
    const columns = [
        { header: "Caso #", key: "numCaso", label: "Caso #" },
        { header: "ID del caso", key: "idCaso", label: "ID del Caso" },
        { header: "Descripción", key: "descrCaso", label: "Descripción del caso" },
        { header: "Ver", key: "VerCaso", label: "Ver" },
        // Agrega otras columnas según sea necesario
    ];
    const data = [
        { numCaso: 1, idCaso: "A123", descrCaso: "Intento de homicidio" },
        { numCaso: 2, idCaso: "B456", descrCaso: "Atentado con carro bomba" },
        { numCaso: 3, idCaso: "C789", descrCaso: "Amenaza con pamfleto" },
    ];
    // Función para manejar el clic en una fila
    const handleRowClick = (rowData: any) => {
        console.log("Fila clicada:", rowData);
        // Aquí puedes añadir cualquier acción, como navegar o mostrar un modal con detalles del caso.
    };
    return (
        <CustomeTable columns={columns} data={data}/>
    );
}

export default RecepCasos;