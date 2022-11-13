import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () =>{

  const navigate1 = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgba(0,0,0,0.55)'
      },
    },
  })

  function goToCart(){
    navigate1(`/Cart`);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">MyBrand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <NavDropdown title="CATALOG" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#home">BLOG</Nav.Link>
            <Nav.Link href="#link">ABOUT</Nav.Link>
            <Nav.Link href="#link">CONTACTS</Nav.Link>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Container>
              <ThemeProvider theme={theme}>
              <PersonOutlineOutlinedIcon style={{marginRight: '10px', cursor: 'pointer'}} fontSize="large" color='primary' />
              <ShoppingCartOutlinedIcon onClick = {() => goToCart()} style={{marginLeft: '10px', cursor: 'pointer'}} fontSize="large" color='primary' />
              </ThemeProvider>
            </Container>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;