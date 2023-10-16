import { Container, Row, Col } from "react-bootstrap";
import Api from '../assets/imgs/icon-api.svg';
import Budgeting from '../assets/imgs/icon-budgeting.svg';
import Onboarding from '../assets/imgs/icon-onboarding.svg';
import Online from '../assets/imgs/icon-online.svg';

const Service = ()=>{
    const services = [
        {
            id: 1,
            img: Online,
            title: 'Online Banking',
            content: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            id: 2,
            img: Budgeting,
            title: 'Simple Budgeting',
            content: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
        },
        {
            id: 3,
            img: Onboarding,
            title: 'Fast Onboarding',
            content: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            id: 4,
            img: Api,
            title: 'Open API',
            content: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
        }
    ]
    return(
        <>
            <Container  style={{marginTop: '10rem', backgroundColor: 'hsl(0, 0%, 98%)', padding: '1rem'}}>
                <div>
                    <h1>Why choose Easybank?</h1>
                    <p>We leverage open banking to turn your bank account into a finacial hub. <br></br>Control your finacies like never before.</p>
                </div>
                <Row>
                    {
                        services.map(({id, img, title, content})=>(
                            <Col  xs={12} sm={6} md={4} lg={3} key={id} style={{marginTop: '2rem'}}>
                                <img src={img} style={{width: '3rem'}}/>
                                <h6 style={{marginTop: '2rem', fontSize: '1.3rem'}}>{title}</h6>
                                <p style={{fontSize: '0.8rem', color: 'hsl(233, 8%, 62%)'}}>{content}</p>
                            </Col>
                        ))
                    }
                    
                </Row>
            </Container>
        </>
    )
}

export default Service;