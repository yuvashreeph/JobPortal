import React, { useState } from 'react'
import { createUser } from '../services/UserService'
import { useNavigate } from 'react-router-dom'

const UserComponent = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pcode, setPcode] = useState('')
    const [user_type, setUser_type] = useState('')

    const navigator = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        const user = { name, username, password, email, city, state, pcode, user_type };

        try {
            const response = await createUser(user);
            console.log(response.data);
            navigator('/users');
        } catch (err) {
            console.error(err);
            setError('Failed to create user. Please try again.');
        }
    };

    return (
        <div className='container'>
            <div className='card col-md-8 offset-md-2 my-5'>
                <div className='card-body'>
                    <h3 className="card-title text-center">Add new user</h3>
                    <form>
                        <div className='form-group mb-3'>
                            <label className='form-label'>Name</label>
                            <input
                                type='text'
                                placeholder='Enter name'
                                name='name'
                                value={name}
                                className='form-control'
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Username</label>
                            <input
                                type='text'
                                placeholder='Enter username'
                                name='username'
                                value={username}
                                className='form-control'
                                onChange={(e) => setUsername(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Password</label>
                            <input
                                type='password'
                                placeholder='Enter password'
                                name='password'
                                value={password}
                                className='form-control'
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Email ID</label>
                            <input
                                type='text'
                                placeholder='Enter your email address'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>City</label>
                            <input
                                type='text'
                                placeholder='Enter city'
                                name='city'
                                value={city}
                                className='form-control'
                                onChange={(e) => setCity(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>State</label>
                            <input
                                type='text'
                                placeholder='Enter state'
                                name='state'
                                value={state}
                                className='form-control'
                                onChange={(e) => setState(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>Postal Code</label>
                            <input
                                type='number'
                                placeholder='Enter postal code'
                                name='pcode'
                                value={pcode}
                                className='form-control'
                                onChange={(e) => setPcode(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='form-group mb-3'>
                            <label className='form-label'>User Type</label>
                            <input
                                type='text'
                                placeholder='Enter user type (admin/recruiter/jobseeker)'
                                name='user_type'
                                value={user_type}
                                className='form-control'
                                onChange={(e) => setUser_type(e.target.value)}
                            >
                            </input>
                        </div>

                        <button className='btn btn-success' onClick={saveUser}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserComponent