import styled from "styled-components";
import { ProSidebar } from "react-pro-sidebar";

export const SidebarWrapper = styled(ProSidebar)`
    .pro-menu {
        padding-top: 0;
    }

    .pro-sidebar-inner{
        background: #fbfbf8;
        height: 100vh !important;
        box-shadow: 2px 0px 8px rgb(101 101 101 / 20%);
    }

    .pro-item-content {
        font-size: 20px;
        padding: 5px;
        color: black;
        font-weight: 400;
    }

    .pro-menu-item {
        &.menu-active {
            background-color: rgba(64, 91, 239, 0.2);
            color: #405bef;
        }
    }
`;
