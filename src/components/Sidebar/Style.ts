import styled from "styled-components";
import { ProSidebar } from "react-pro-sidebar";

export const SidebarWrapper = styled(ProSidebar)`
    .pro-menu {
        padding-top: 0;
    }

    .pro-sidebar-inner{
        background: #ededeb;
        height: 100vh !important;
        box-shadow: 2px 0px 8px #888888;
    }

    .pro-item-content {
        font-size: 20px;
        padding: 5px;
        color: black;
        font-weight: 400;
    }

    .pro-menu-item {
        &.menu-active {
            background-color: #569bf5;
            color: #fff;
        }
    }
`;
