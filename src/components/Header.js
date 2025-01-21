import React, { useState } from "react";
import toast from "react-hot-toast";

import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/store";

const Header = () => {
  //global state
  const isLogin = useSelector((state) => state.isLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //state
  const [value, setValue] = useState();
  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout());
      toast.success("Logout successfuly");
      navigate("/login");
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ color: "white" }}>
            My Blog App
          </Typography>
          {isLogin && (
            <Box display={"flex"} marginLeft="auto" marginRight="auto">
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab label="Blog" LinkComponent={Link} to="/blog" />
                <Tab label="My Blog" LinkComponent={Link} to="/my-blog" />
                <Tab
                  label="Create-Blog"
                  LinkComponent={Link}
                  to="/create-blog"
                />
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
              </>
            )}
            {isLogin && (
              <Button
                onClick={handleLogout}
                sx={{ margin: 1, color: "white" }}
                LinkComponent={Link}
                to="/logout"
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
