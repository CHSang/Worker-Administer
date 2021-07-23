import React, {useState, FunctionComponent, useCallback} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import SideBar, { SideBarLink } from "../../components/Sidebar";
import { links } from "./Data";
import { LayoutWrapper, MainApp } from "./Style";

const Layout: FunctionComponent<any> = (props) => {

  const [selectedLink, setSelectedLink] = useState<SideBarLink>({
    text: "",
    url: "/",
  })

  const onUrlChangeHandler = useCallback(
    (link: SideBarLink) => setSelectedLink(link),
    [],
  );
  
  return (
    <Router>
      <LayoutWrapper>
        <SideBar links={links} selectedLink={selectedLink} onUrlChangeHandler={onUrlChangeHandler}/>
        <MainApp>
            {props.children}
        </MainApp>
      </LayoutWrapper>
    </Router>
  );
};

export default Layout;
