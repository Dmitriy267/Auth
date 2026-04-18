import { useReducer } from 'react';

const initialStateLogin = {
    email: '',
    pass: '',
};
const LOG_EMAIL = 'Log_email';
const LOG_PASSWORD = 'Log_password';
function reducer(state, action) {
    switch (action.type) {
        case LOG_EMAIL: {
            return {
                ...state,
                email: action.payload,
            };
        }
        case LOG_PASSWORD: {
            return {
                ...state,
                pass: action.payload,
            };
        }
        default:
            throw new Error(`Unknown action type` + action.type);
    }
}
export function Login({ onForm }) {
    const [state, dispatch] = useReducer(reducer, initialStateLogin);
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', state.email);
        formData.append('password', state.pass);
    }
    return (
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        placeholder="youremail@mail.com"
                        value={state.email}
                        onChange={(e) =>
                            dispatch({
                                type: LOG_EMAIL,
                                payload: e.target.value,
                            })
                        }
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        placeholder="********"
                        value={state.pass}
                        onChange={(e) =>
                            dispatch({
                                type: LOG_PASSWORD,
                                payload: e.target.value,
                            })
                        }
                    />
                </label>
                <button type="submit">Log in</button>
            </form>
            <button onClick={() => onForm('register')}>
                {' '}
                Don't have an account? Register here.
            </button>
        </>
    );
}
