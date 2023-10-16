import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mockups from '../assets/imgs/image-mockups.png'

const Hero = ()=>{
    const bgImage = {
        backgroundImage: 'url("/img/bg-intro-desktop.svg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        bottom: '50px',
        // top: '10px',
        left: '650px',
        width: '44%',
        height: '100vh',
        
    }
    return(
        <>
            <Container style={{}}>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3} style={{marginTop: '8rem'}}>
                        <div>
                            <h1>Next generation digital banking</h1>
                            <p>Take your finacial life online. Your EasyBank account
                                will be one-stop shop for spending, saving, budgeting,
                                investing, and much more.
                            </p>
                            <Nav>
                            <Nav.Link href='/info' style={{backgroundColor: 'hsl(192, 70%, 51%)', borderRadius: '1.5rem', width: '9rem'}}>Request Invite</Nav.Link>
                            </Nav>
                        </div>
                    </Col>
                    <Col sm={1} style={bgImage}>
                        <img src={Mockups} alt="" style={{width: '100%', marginLeft: '4rem', marginTop: '2rem'}} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hero;