import { useReducer } from 'react';

const initialState = {
    name: '',
    email: '',
    pass: '',
};
const NAME_REG = 'name_reg';
const EMAIL_REG = 'email_reg';
const PASS_REG = 'pass_email';
function reducer(state, action) {
    switch (action.type) {
        case NAME_REG: {
            return {
                ...state,
                name: action.payload,
            };
        }
        case EMAIL_REG: {
            return {
                ...state,
                email: action.payload,
            };
        }
        case PASS_REG: {
            return {
                ...state,
                pass: action.payload,
            };
        }
        default:
            throw new Error(`Unknown action type` + action.type);
    }
}
export function Register({ onForm }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleSubmit(e) {
        e.preventDefault();
        const regData = new FormData();
        regData.append('name', state.name);
        regData.append('email', state.email);
        regData.append('pass', state.pass);
    }
    return (
        <>
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input
                        value={state.name}
                        name="name"
                        onChange={(e) =>
                            dispatch({
                                type: NAME_REG,
                                payload: e.target.value,
                            })
                        }
                        id="name"
                        placeholder="full Name"
                    />
                    <label htmlFor="email">email</label>
                    <input
                        value={state.email}
                        onChange={(e) =>
                            dispatch({
                                type: EMAIL_REG,
                                payload: e.target.value,
                            })
                        }
                        type="email"
                        placeholder="youremail@gmail.com"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password">password</label>
                    <input
                        value={state.pass}
                        onChange={(e) =>
                            dispatch({
                                type: PASS_REG,
                                payload: e.target.value,
                            })
                        }
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                    />
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => onForm('login')}>
                    Already have an account? Login here.
                </button>
            </div>
        </>
    );
}
