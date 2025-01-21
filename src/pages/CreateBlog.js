import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });

  // input change handler
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading indicator while submitting
    try {
      const { data } = await axios.post("/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog post created successfully!");
        navigate("/my-blog");
      } else {
        toast.error("Failed to create blog post. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        width={"50%"}
        maxWidth="600px"
        borderRadius={8}
        padding={4}
        margin="auto"
        boxShadow={"0 6px 18px rgba(0,0,0,0.1)"} // Soft shadow for contrast
        display="flex"
        flexDirection={"column"}
        marginTop={"50px"}
        bgcolor="white" // White background for the form container
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight="bold"
          color="black" // Black text for better contrast on a white background
          gutterBottom
        >
          Create A New Blog Post
        </Typography>

        {/* Title Field */}
        <InputLabel
          htmlFor="title"
          sx={{ mb: 1, fontWeight: "600", color: "text.secondary" }}
        >
          Title
        </InputLabel>
        <TextField
          id="title"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: "#f5f5f5", // Light background for inputs
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": {
                borderColor: "#ddd", // Lighter border color
              },
              "&:hover fieldset": {
                borderColor: "#aaa", // Slightly darker border on hover
              },
            },
            color: "black", // Black text inside inputs
          }}
        />

        {/* Description Field */}
        <InputLabel
          htmlFor="description"
          sx={{ mb: 1, fontWeight: "600", color: "text.secondary" }}
        >
          Description
        </InputLabel>
        <TextField
          id="description"
          name="description"
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
          multiline
          rows={4} // Set an appropriate height for the description
          required
          sx={{
            backgroundColor: "#f5f5f5", // Light background for inputs
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": {
                borderColor: "#ddd", // Lighter border color
              },
              "&:hover fieldset": {
                borderColor: "#aaa", // Slightly darker border on hover
              },
            },
            color: "black", // Black text inside inputs
          }}
        />

        {/* Image URL Field */}
        <InputLabel
          htmlFor="image"
          sx={{ mb: 1, fontWeight: "600", color: "text.secondary" }}
        >
          Image URL
        </InputLabel>
        <TextField
          id="image"
          name="image"
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: "#f5f5f5", // Light background for inputs
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": {
                borderColor: "#ddd", // Lighter border color
              },
              "&:hover fieldset": {
                borderColor: "#aaa", // Slightly darker border on hover
              },
            },
            color: "black", // Black text inside inputs
          }}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            mt: 3,
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: 3,
            backgroundColor: "#e5006d",
            "&:hover": {
              backgroundColor: "#e5006d", // Button color on hover
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // Box shadow on hover
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          disabled={loading} // Disable the button while loading
        >
          <span
            style={{
              display: "inline-block",
              transition: "transform 0.3s ease", // Apply transition for smooth zoom effect
              transform: hover ? "scale(1.3)" : "scale(1)", // Scale text on hover
            }}
          >
            {loading ? "Submitting..." : "Submit"}
          </span>
        </Button>
      </Box>
    </form>
  );
};

export default CreateBlog;

/*import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast  from 'react-hot-toast';


const CreateBlog = () => {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    image: "",
  });
  // input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  //form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/blog/create-blog", {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("blog are created");
        navigate("/my-blog");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          width={"40%"}
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          boxShadow={"10px 10px 20px #ccc"}
          display="flex"
          flexDirection={"column"}
          marginTop={"30px"}
        >
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight="bold"
            padding={3}
            color="gray"
          >
            Create A Post
          </Typography>
          <InputLabel
            sx={{ mb: 1, mt: 2, fontsize: "25px", fontWeight: "bold" }}
          >
            Title
          </InputLabel>
          <TextField
            name="title"
            value={inputs.title}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontsize: "25px", fontWeight: "bold" }}
          >
            Description
          </InputLabel>
          <TextField
            name="description"
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <InputLabel
            sx={{ mb: 1, mt: 2, fontsize: "25px", fontWeight: "bold" }}
          >
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              "& .zoom-text": {
                display: "inline-block",
                transition: "transform 0.3s ease",
                transform: hover ? "scale(1.2)" : "scale(1)",
              },
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {" "}
            <span className="zoom-text">SUBMIT</span>{" "}
          </Button>{" "}
          <Button />
        </Box>
      </form>
    </>
  );
};

export default CreateBlog;
*/
