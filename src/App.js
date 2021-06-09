import React from 'react'
import {GlobalStyle} from './styles/GlobalStyles'
import {Logo} from './components/Logo'
import {Home} from './pages/Home'

export const App = () => (
    <div>
        <GlobalStyle/>
        <Logo/>
        <Home/>
    </div>
)