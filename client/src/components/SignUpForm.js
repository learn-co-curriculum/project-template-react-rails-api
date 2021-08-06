import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import Button from "../styles/Button";
import Error from "../styles/Error";
import Input from "../styles/Input";
import FormField from "../styles/FormField";
import Label from "../styles/Label";
import Textarea from "../styles/Textarea";

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function SignUpForm({ onLogin }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roleName, setRoleName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("")
  const [specialty, setSpecialty] = useState("")
  const [experience, setExperience] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [roleModel, setRoleModel] = useState("")

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    
    async function userRoleCreate(){
        if (roleName === "Doctor") {
            const res =  await fetch("/doctor-create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                img_url: image,
                phone_number: phone,
                bio: bio, 
                city: city,
                specialty: specialty,
                years_of_experience: experience,
            })
            });
            
            if(res.ok){
            const doctor = await res.json()
            console.log(doctor)
            setRoleModel(doctor)
            } else {
            const err = await res.json()
            setErrors(err.errors)
            };
        } else if (roleName === "Patient") {
            const res =  await fetch("/patient-create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                date_of_birth: dateOfBirth,
                img_url: image,
                phone_number: phone,
            })
            });
            
            if(res.ok){
            const patient = await res.json()
            console.log(patient)
            setRoleModel(patient)
            } else {
            const err = await res.json()
            setErrors(err.errors)
            };
        }
        
      };
    
    async function signUp(){
      const res =  await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          role_id: roleModel.id,
          role_type: roleName,
        })
      });
      setIsLoading(false);
      if(res.ok){
       const user = await res.json()
       console.log(user)
       onLogin(user)
       history.push("/")
      } else {
        const err = await res.json()
        setErrors(err.errors)
      };
    };

    userRoleCreate();
    signUp();
  };

  if (roleName === "") {
    return (
        <>
        <FormControl className={classes.formControl}>
            <InputLabel>Select Role</InputLabel>
            <Select value={roleName} onChange={(e) => setRoleName(e.target.value)}>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Patient">Patient</MenuItem>
            </Select>
        </FormControl>

        </>
    )} else if (roleName === "Doctor") {
    return (
        <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
            <InputLabel>Select Role</InputLabel>
            <Select value={roleName} onChange={(e) => setRoleName(e.target.value)}>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Patient">Patient</MenuItem>
            </Select>
        </FormControl>
    
        <FormField>
            <Label htmlFor="username">Username</Label>
            <Input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="password">Password</Label>
            <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
        </FormField>

        <FormField>
            <Label htmlFor="first-name">First Name</Label>
            <Input
            type="first-name"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="last-name">Last Name</Label>
            <Input
            type="last-name"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="image">Image URL:</Label>
            <Input
            //   type="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
            type="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </FormField>
        
        <FormField>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
            rows="3"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="city">City</Label>
            <Input
            type="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="specialty">Specialty</Label>
            <Input
            type="specialty"
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="experience">Years of Experience</Label>
            <Input
            type="experience"
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            />
        </FormField>

        <FormField>
            <Button color="secondary" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </FormField>
        <FormField>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormField>
        </form>
    )} else if (roleName === "Patient") {
    return (
        <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
            <InputLabel>Select Role</InputLabel>
            <Select value={roleName} onChange={(e) => setRoleName(e.target.value)}>
                <MenuItem value="Doctor">Doctor</MenuItem>
                <MenuItem value="Patient">Patient</MenuItem>
            </Select>
        </FormControl>
        
        <FormField>
            <Label htmlFor="username">Username</Label>
            <Input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="password">Password</Label>
            <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            />
        </FormField>
        <FormField>
            <Label htmlFor="first-name">First Name</Label>
            <Input
            type="first-name"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="last-name">Last Name</Label>
            <Input
            type="last-name"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="date-of-birth">Date of Birth</Label>
            <Input
            type="date-of-birth"
            id="date-of-birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="image">Image URL:</Label>
            <Input
            //   type="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
        </FormField>
        <FormField>
            <Label htmlFor="phone">Phone Number</Label>
            <Input
            type="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </FormField>
   
        <FormField>
            <Button color="secondary" type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </FormField>
        <FormField>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormField>
        </form>
    )}
}

export default SignUpForm;
