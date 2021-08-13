import {
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu,
    SideBtnWrap,
    SidebarRoute,
} from './SidebarElements';

interface Props {
    isOpen: boolean,
    toggle: Function,
}

const Sidebar = (props: Props) => {
    const toggle = () => props.toggle();

    return (
        <SidebarContainer isOpen={props.isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink onClick={toggle} to="about">
                        About
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="discover">
                        Discover
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="services">
                        Services
                    </SidebarLink>
                    <SidebarLink onClick={toggle} to="signup">
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    );
};

export default Sidebar;
