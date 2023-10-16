import { Container, Row, Col, Nav } from "react-bootstrap";
import Logo from '../assets/imgs/logo.svg';
import Facebook from '../assets/imgs/icon-facebook.svg';
import Youtube from '../assets/imgs/icon-youtube.svg';
import Twitter from '../assets/imgs/icon-twitter.svg';
import Pinterest from '../assets/imgs/icon-pinterest.svg';
import Instagram from '../assets/imgs/icon-instagram.svg';

const Footer = ()=>{
    return(
        <>
            <div style={{backgroundColor: 'hsl(233, 26%, 24%)', }}>
                <Container>
                    <Row>
                        <Col>
                            <Nav>
                                <Nav.Link><img src={Logo} alt="" /></Nav.Link> <br/>
                                <Nav.Link><img src={Facebook} style={{}}/></Nav.Link>
                                <Nav.Link><img src={Youtube} style={{}}/></Nav.Link>
                                <Nav.Link><img src={Twitter} style={{}}/></Nav.Link>
                                <Nav.Link><img src={Pinterest} style={{}}/></Nav.Link>
                                <Nav.Link><img src={Instagram} style={{}}/></Nav.Link>
                            </Nav>
                            
                        </Col>
                        <Col className="" style={{marginTop: '1rem'}}>
                            <Nav.Link style={{color: 'hsl(0, 0%, 100%)'}}>About us</Nav.Link>
                            <Nav.Link style={{color: 'hsl(0, 0%, 100%)'}}>Contact</Nav.Link>
                            <Nav.Link style={{color: 'hsl(0, 0%, 100%)'}}>Blog</Nav.Link>
                        </Col>
                        <Col style={{marginTop: '1rem'}}>
                            <Nav.Link style={{color: 'hsl(0, 0%, 100%)'}}>Careers</Nav.Link>
                            <Nav.Link style={{color: 'hsl(0, 0%, 100%)'}}>Support</Nav.Link>
                            <Nav.Link style={{color: 'hsl(0, 0%, 100%)'}}>Privacy Policy</Nav.Link>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Footer;