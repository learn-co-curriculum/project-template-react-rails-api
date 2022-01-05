import { useState } from "react";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";
import { Link } from "react-router-dom";

function NewBathroom({ onAddBathrooms, user }) {
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [details, setDetails] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("api/locations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city,
        address,
        details,
        name,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((newLocation) => {
          setCity("");
          setName("");
          setAddress("");
          setDetails("");
          setErrors([]);
          onAddBathrooms(newLocation);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }





  return (
    <Wrapper>
      <WrapperChild>
        <form onSubmit={handleSubmit}>
        <h2>Create Location</h2>
          <FormField>
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="name">Business Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              rows="10"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="details">Details</Label>
            <Textarea
              id="details"
              rows="10"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Location"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      {/* <WrapperChild>
        <h1>{city}</h1>
        <p>
          <em>{name} </em>
          <em>{address} </em>
          <em>{details} </em>
          &nbsp;·&nbsp;
          {/* <cite>Submitted By {user.username}</cite> */}
        {/* </p> */}
      {/* // </WrapperChild> */} 
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default NewBathroom;
