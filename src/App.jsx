import { useState } from 'react';
import './App.css';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

function App() {
    const [currentForm, setcurrentForm] = useState('login');
    function toggleForm(formName) {
        setcurrentForm(formName);
    }
    return (
        <>
            {currentForm === 'login' ? (
                <Login onForm={toggleForm} />
            ) : (
                <Register onForm={toggleForm} />
            )}
        </>
    );
}

export default App;
