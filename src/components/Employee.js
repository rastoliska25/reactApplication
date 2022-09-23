import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@mui/material/TextField';
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
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const classes = useStyles();

    const handleClick = (e) => {
        e.preventDefault()
        const employee = { name, age }
        console.log(employee)

        if (name == '') {
            alert('Name cannot be empty!');
        } else if (age == '') {
            alert('Age cannot be empty!');
        } else {

            fetch("http://localhost:8080/addEmployee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(employee)

            }).then(() => {
                console.log("New Employee added");
                alert("New Employee added");
                window.location.reload();
            })
        }
    }

    return (

        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add Employee</u></h1>

                <form className={classes.root} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Employee Name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Employee Age" variant="outlined" fullWidth
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <Button variant="contained" color="secondary" onClick={handleClick}>
                        Submit
                    </Button>
                </form>

            </Paper>

        </Container>
    );
}