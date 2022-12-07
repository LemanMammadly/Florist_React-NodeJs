import React from "react";
import "./Sidebarr.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const Sidebarr = () => {
  return (
    <>
      <div className="admin">Admin Panel</div>
      <Sidebar>
        <Menu>
          <SubMenu label="Logo">
            <MenuItem routerLink={<Link to="/admin/logodetail" />}>
              {" "}
              Logo Detail
            </MenuItem>
          </SubMenu>
          <SubMenu label="Slider">
            <MenuItem routerLink={<Link to="/admin/addslider" />}>
              {" "}
              Add Slider
            </MenuItem>
            <MenuItem routerLink={<Link to="/admin/sliderdetail" />}>
              {" "}
              Slider Detail
            </MenuItem>
          </SubMenu>
          <SubMenu label="Category">
            <MenuItem routerLink={<Link to="/admin/addcategory" />}>
              {" "}
              Add Category
            </MenuItem>
            <MenuItem routerLink={<Link to="/admin/categorydetail" />}>
              {" "}
              Category Detail
            </MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default Sidebarr;
