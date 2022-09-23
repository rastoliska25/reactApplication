import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));

export default function Employee() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" }
    const [employees, setEmployees] = useState([])


    useEffect(() => {
        fetch("http://localhost:8080/employees")
            .then(res => res.json())
            .then((result) => {
                setEmployees(result);
            }
            )
    }, [])
    return (

        <Container>
            <h1>Employees</h1>

            <Paper elevation={3} style={paperStyle}>

                {employees.map(employee => (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={employee.id}>
                        Name:{employee.name}<br />
                        Age:{employee.age}

                    </Paper>
                ))
                }

            </Paper>
        </Container>
    );
}