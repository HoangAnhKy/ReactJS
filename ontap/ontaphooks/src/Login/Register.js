import { useReducer } from 'react';

import * as Action from './Action';
import Reducer, { handleChange, handleLogin, initState } from './Reducer';

const Register = () => {
    const [request, distpacth] = useReducer(Reducer, initState);
    const { email, password, checkbox, list } = request;
    return (
        <div
            className='d-flex align-content-lg-center flex-wrap vh-100'
            style={{
                background: '#38ef7d',
            }}>
            <div className='d-flex justify-content-center col-12 '>
                <div className='col-4 p-5 rounded bg-light'>
                    <div className='border-bottom'>
                        <h3>Sign Up</h3>
                        <p className='text-black-50'>You want to fill out this form</p>
                    </div>
                    <div className='row mx-1'>
                        <input
                            type='email'
                            placeholder='e-mail'
                            className='form-control mt-2 '
                            value={email}
                            onChange={(e) => {
                                distpacth(handleChange(Action.ADD_EMAIL, e.target.value));
                            }}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='form-control mt-2'
                            value={password}
                            onChange={(e) => {
                                distpacth(handleChange(Action.ADD_PASSWORD, e.target.value));
                            }}
                        />
                        <div className='d-flex align-content-lg-center flex-wrap mt-2'>
                            <input
                                type='checkbox'
                                value={checkbox}
                                checked={checkbox == 1 ? 'checked' : ''}
                                onChange={(e) => {
                                    let value = e.target.value == 0 ? 1 : 0;
                                    distpacth(handleChange(Action.CHECKBOX, value));
                                }}
                            />
                            <label className='mx-2'>I accept the terms of use</label>
                        </div>
                        <button
                            className='btn btn-primary form-control mt-2'
                            onClick={() => {
                                distpacth(handleLogin(Action.LOGIN));
                            }}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
