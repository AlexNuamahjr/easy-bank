import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/imgs/logo.svg'

const NavBar = ()=>{
    return(
        <>
            
                <Navbar fixed='top' style={{backgroundColor: 'hsl(0, 0%, 100%)', zIndex: '5'}} data-bs-theme="light" expand='lg'>
                    <Container>
                        <Navbar.Brand href="/"><img src={Logo} alt="" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className=" mx-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                            <Nav.Link href="/careers">Careers</Nav.Link>
                        </Nav>
                        
                        <Nav>
                            <Nav.Link href='/info' style={{backgroundColor: 'hsl(192, 70%, 51%)', borderRadius: '50px'}}>Request Invite</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            
        </>
    )
}

export default NavBar;