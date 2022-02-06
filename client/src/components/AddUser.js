import react, { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import {useNavigate} from 'react-router-dom';
import Main from './Main';

const initialValue = {
    employee_name: '',
    employee_Mobile: '',
    employee_Email: '',
    employee_Address: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 5
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const [formError, setformError] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const classes = useStyles();
    const navigate = useNavigate();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        setformError(validate(user))
        setisSubmit(true)
        if(Object.keys(formError).length === 0 && isSubmit){
            console.log(user)
            await addUser(user);
        navigate('/');
        window.alert("User added Succesfully")
        }
        
    }

    const validate = (values) => {
        const errors = {}
        const exp = /^[A-Za-z0-9? , _-]+$/
        const exp1 = /^[a-zA-Z0-9]*$/gm
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.employee_name){
            errors.employee_name = "name required "
        }
        else if (!exp1.test(values.employee_name)) {
            errors.employee_name = "This is not a valid name format!";
        }

        if(!values.employee_Mobile){
            errors.employee_Mobile = "Mobile required"
        }else if (values.employee_Mobile.length !== 10) {
            errors.employee_Mobile = "Mobile  must be 10 number";
        }

        if(!values.employee_Email){
            errors.employee_Email = "Email required"
        }else if (!regex.test(values.employee_Email)) {
            errors.employee_Email = "This is not a valid email format!";
        }
        if(!values.employee_Address){
            errors.employee_Address = "Address required"
        }
        return errors;
    }

    return (
        <>
        <Main />
      <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      
      <FormControl>
          <InputLabel htmlFor="my-input">User name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_name' value={user.employee_name} id="my-input" />
          <p style={{color: 'red'}}>{formError.employee_name}</p>
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Mobile No</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_Mobile' value={user.employee_Mobile} id="my-input"/>
          <p style={{color: 'red'}}>{formError.employee_Mobile}</p>
      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_Email' value={user.employee_Email} id="my-input" />
          <p style={{color: 'red'}}>{formError.employee_Email}</p>

      </FormControl>
      <FormControl>
          <InputLabel htmlFor="my-input">Address</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name='employee_Address' value={user.employee_Address} id="my-input" />
          <p style={{color: 'red'}}>{formError.employee_Address}</p>

      </FormControl>
      <FormControl>
          <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
      </FormControl>
  </FormGroup>
  </>
    )
}

export default AddUser;