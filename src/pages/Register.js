import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  //state
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  //handle input changes
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/user/register", {
        username: inputs.name,
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        toast.success("User Register succesffuly");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={450}
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          borderRadius={5}
        >
          <Typography
            variant="h4"
            padding={1}
            textAlign={"center"}
            sx={{ textTransform: "uppercase" }}
          >
            Register
          </Typography>
          <TextField
            placeholder="name"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            type={"text"}
            required
          />
          <TextField
            placeholder="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
            type={"email"}
            required
          />
          <TextField
            placeholder="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            margin="normal"
            type={"password"}
            required
          />

          <Button
            sx={{ borderRadius: 3, mt: 3 }}
            type="submit"
            variant="contained"
            color="success"
          >
            Submit
          </Button>
          <Button
            onClick={() => navigate("/login")}
            sx={{ borderRadius: 3, mt: 3 }}
            color="success"
          >
            Already Register ? Please Login
          </Button>
        </Box>
      </form>
    </>
  );
};

export default Register;
