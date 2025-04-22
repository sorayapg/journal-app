import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { authSlice } from '../../../src/store/auth';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    // preloadedState: {

    // }
    
})


describe('Pruebas en <LoginPage />', () => {

    test('debe de mostrar (rederizar) el componente correctamente', () => {

        render(
            <Provider store={ store } >
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        )

    });
    
})