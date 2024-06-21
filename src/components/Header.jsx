import React, { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { Menu, X } from "lucide-react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <header className="bg-zinc-900 fixed z-50 text-white w-full flex justify-between items-center px-4 py-2 ubuntu-text md:px-12 h-[8vh] md:h-[12vh]">
      <Link to="/">
        <div className="text-2xl md:text-3xl satisfy font-bold mt-3">
          Himanshu<span className="text-green-500">.</span>
        </div>
      </Link>
      <div className="wrapper mt-3">
        <div className="md:hidden">
          <div onClick={toggleDrawer(true)}>
            <Menu />
          </div>
        </div>
        <nav className="hidden md:flex md:space-x-6 justify-center items-center">
          <Link to="/">
            <button className="active:text-green-500">Home</button>
          </Link>
          <Link to="/about">
            <button className="active:text-green-500">About me</button>
          </Link>
          <Link to="/skill">
            <button>Skills</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <button className="bg-green-500 text-black px-4 py-2 rounded-full">
            Hire me
          </button>
        </nav>
      </div>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: "rgb(62, 55, 55)",
            color: "white",
          },
        }}
      >
        <div className="flex justify-between items-center bg-zinc-900 p-4">
          <div className="text-2xl md:text-3xl satisfy font-bold">
            Himanshu<span className="text-green-500">.</span>
          </div>
          <IconButton onClick={toggleDrawer(false)} color="inherit">
            <X />
          </IconButton>
        </div>
        <List sx={{ width: 250 }}>
          <Link to="/" onClick={toggleDrawer(false)}>
            <ListItem button>
              <ListItemText primary="Home" className="text-green-500" />
            </ListItem>
          </Link>
          <Link to="/about" onClick={toggleDrawer(false)}>
            <ListItem button>
              <ListItemText primary="About me" />
            </ListItem>
          </Link>
          <Link to="/skill" onClick={toggleDrawer(false)}>
            <ListItem button>
              <ListItemText primary="Skills" />
            </ListItem>
          </Link>
          <Link to="/contact" onClick={toggleDrawer(false)}>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
          <Link to="/projects" onClick={toggleDrawer(false)}>
            <ListItem button>
              <ListItemText primary="Projects" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </header>
  );
};

export default Header;
