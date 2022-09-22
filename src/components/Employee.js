import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';

export default function Employee() {

    const[name,setName]=useState('')
    const[age,setAge]=useState('')
    const[employee,setEmployees]=useState([])

    return (
        <Container>
            <h1 style={{ color: "black" }}>Add Employee</h1>

            <TextField id="outlined-basic" label="Employee Name" variant="outlined" fullWidth 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <TextField id="outlined-basic" label="Employee Age" variant="outlined" fullWidth 
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            />

        </Container>
    );
}
