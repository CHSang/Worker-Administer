import React, { FunctionComponent } from "react";
import { Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { SidebarWrapper } from "./Style";

export interface SideBarLink {
  text: string;
  url: string;
}

const SideBar: FunctionComponent<{
  links: SideBarLink[];
  selectedLink: SideBarLink;
  onUrlChangeHandler?: Function;
}> = ({ links, selectedLink, onUrlChangeHandler = (link: SideBarLink) => {} }) => {
  return (
    <>
      <SidebarWrapper>
        <Menu iconShape="square">
          {links.map((link) => (
            <MenuItem
              key={link.text}
              className={link.url === selectedLink.url ? "menu-active" : ""}
            >
              {link.text}
              <Link
                to={link.url}
                onClick={() => onUrlChangeHandler(link)}
              />
            </MenuItem>
          ))}
        </Menu>
      </SidebarWrapper>
    </>
  );
};

export default SideBar;
