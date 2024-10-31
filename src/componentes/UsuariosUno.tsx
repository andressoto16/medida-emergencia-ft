import React from 'react';
import { CustomeTable } from 'eco-unp/ui';

const Numeros = ["5", "4", "3", "2", "1"];

export const UsuariosUno: React.FC = () =>{
    return <CustomeTable columns={[]} data={[Numeros]}>
    </CustomeTable>
}

