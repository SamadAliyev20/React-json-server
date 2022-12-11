import React from 'react'
import { AiFillDelete } from 'react-icons/ai';
import { useState } from 'react';
import axios from 'axios';

const HomePage = (props) => {
    const [value,setValue]=useState('');

    
    const InputHandler = (e) =>{
        setValue(e.target.value)
      }

        const filteredUsers=props.userList.filter(user => user.name.toLowerCase().includes(value.toLocaleLowerCase()))

    return (
        <div>
            <div className="container">
            <input onChange={InputHandler} type="text" placeholder='Search...' className='form-control w-50 mx-auto mt-3'/>
                    <div className="col-lg-12 col-12 mt-3">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">FullName</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Edit</th>
                                </tr>
                            </thead>    
                            <tbody>
                                {
                                    filteredUsers.map(user =>{
                                        return(
                                           
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>{user.phone}</td>
                                                <td>
                                                    <button value={user.id} onClick={() =>{
                                                     axios.delete(`http://localhost:3001/posts/${user.id}`)
                                                    }} className='btn btn-danger me-2'> <AiFillDelete/> Delete</button>
                                                    
                    
                                                    </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                
            </div>
        </div>
    )
}

export default HomePage