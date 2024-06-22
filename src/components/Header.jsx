import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { Menu, X } from "lucide-react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children }) => (
    <Link to={to}>
      <button
        className={`relative ${
          isActive(to)
            ? "text-green-500 after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-full after:h-[2px] after:bg-green-500"
            : "text-white hover:text-green-500 transition-colors"
        }`}
      >
        {children}
      </button>
    </Link>
  );

  const DrawerLink = ({ to, primary, onClick }) => (
    <Link to={to} onClick={onClick}>
      <ListItem button>
        <ListItemText
          primary={primary}
          className={isActive(to) ? "text-green-500" : "text-white"}
        />
      </ListItem>
    </Link>
  );

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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About me</NavLink>
          <NavLink to="/skill">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <Link to="/hire">
            <button className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
              Hire me
            </button>
          </Link>
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
          <DrawerLink to="/" primary="Home" onClick={toggleDrawer(false)} />
          <DrawerLink
            to="/about"
            primary="About me"
            onClick={toggleDrawer(false)}
          />
          <DrawerLink
            to="/skill"
            primary="Skills"
            onClick={toggleDrawer(false)}
          />
          <DrawerLink
            to="/projects"
            primary="Projects"
            onClick={toggleDrawer(false)}
          />
          <DrawerLink
            to="/contact"
            primary="Contact"
            onClick={toggleDrawer(false)}
          />
        </List>
      </Drawer>
    </header>
  );
};

export default Header;
