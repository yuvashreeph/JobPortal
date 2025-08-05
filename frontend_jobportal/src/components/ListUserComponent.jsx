import React, { useEffect, useState } from 'react'
import { listUsers } from '../services/UserService'
import { useNavigate } from 'react-router-dom'

const ListUserComponent = () => {

    const [users, setUsers] = useState([])

    const navigator = useNavigate();

    // basically a GET request
    useEffect(() => {
        listUsers().then((response) => {
            setUsers(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [])

    function addNewUser() {
        navigator('/add-user')
    }

    return (
        <div className='container'>
            <h3 className='text-center my-3'>List of Users</h3>
            <button className='btn btn-primary mb-2' onClick={addNewUser}>Add User</button>
            <table className='table table-bordered table-hover'>
                <thead className="table-dark">
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email ID</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Postcode</th>
                        <th>User type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.pcode}</td>
                                <td>{user.user_type}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListUserComponent