import React, {FC} from 'react'
import ReactDOM from 'react-dom/client'

import { Provider as StoreProvider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom'

import {persistor, store} from './store'
import history from './settings/history'
import {routes} from './settings/routes'

import {
    ErrorBoundary,
    PreloadProvider,
    RenderRoutes
} from './core/components'

import './assets/index.css';


const Index: FC = () => {
    return (
        <React.StrictMode>
            <StoreProvider store={store}>
                {/*<ErrorBoundary>*/}
                {/*    <PersistGate persistor={persistor}>*/}
                        {/*<PreloadProvider>*/}
                        {/*    <CookiesProvider>*/}
                                <Router history={history}>
                                    <RenderRoutes routes={routes}/>
                                </Router>
                            {/*</CookiesProvider>*/}
                        {/*</PreloadProvider>*/}
                    {/*</PersistGate>*/}
                {/*</ErrorBoundary>*/}
            </StoreProvider>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( <Index /> );

