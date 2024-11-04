import React from 'react';
import { TabVentana, VentanaUsuario } from 'eco-unp/ui';
import RecepCasos from './componentes/RecepCasosME';
import { CardFormBasicos } from 'eco-unp/form';

const App: React.FC = () => {
    return (
        <VentanaUsuario>
            <TabVentana eventKey={'SolicitudME'} title={'Solicitud ME'}>
                <CardFormBasicos method={''} canEdit={false}/>
            </TabVentana>
            <TabVentana eventKey={'RecepcionCasos'} title={'Recepción de casos ME'}>
                <RecepCasos/>
            </TabVentana>
        </VentanaUsuario>

    );

};
export default App;
