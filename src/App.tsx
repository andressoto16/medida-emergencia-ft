import React from 'react';
import { TabVentana, VentanaUsuario } from 'eco-unp/ui';
import RecepCasos from './componentes/RecepCasos';

const App: React.FC = () => {
    return (
        <VentanaUsuario>
            <TabVentana eventKey={'RecepcionCasos'} title={'Recepción de casos'}>
                <RecepCasos />
            </TabVentana>
        </VentanaUsuario>

    );

};
export default App;
