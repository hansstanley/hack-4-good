import { useMemo } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';
import { APP_IDENTITY, NAV_LINKS } from '../../utils/constants';
import useUserInfo from '../../hooks/useUserInfo';
import { useNavigate } from 'react-router-dom';

export default function AppBar() {
  const navigate = useNavigate();
  const { user, signOutOfSession } = useAuth();
  const { name, isEmployer } = useUserInfo();

  const hasAuth = useMemo(() => !!user, [user]);

  const navigateTo = (path: string) => () => navigate(path);

  const handleSignOut = () => {
    signOutOfSession();
    navigate(NAV_LINKS.HOME);
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#" onClick={navigateTo(NAV_LINKS.HOME)}>
          {APP_IDENTITY.TITLE}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end w-100">
            <Nav.Link onClick={navigateTo(NAV_LINKS.ABOUT)}>About</Nav.Link>
            <Nav.Link onClick={navigateTo(NAV_LINKS.JOBS)}>Jobs</Nav.Link>
            <Nav.Link onClick={navigateTo(NAV_LINKS.BLOG)}>Blog</Nav.Link>
            {hasAuth ? (
              <NavDropdown title={name || 'Anonymous'}>
                <NavDropdown.Item onClick={navigateTo(NAV_LINKS.PROFILE)}>
                  Profile
                </NavDropdown.Item>
                { !isEmployer ? (
                  <NavDropdown.Item onClick={navigateTo(NAV_LINKS.JOBS_APPLIED)}>
                    Job applications
                  </NavDropdown.Item>
                ) : ( null )
                } 
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleSignOut} href={NAV_LINKS.HOME}>
                  Sign out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Button onClick={navigateTo(NAV_LINKS.LOGIN)}>Sign in</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
