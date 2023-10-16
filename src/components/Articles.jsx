import { Card, Container, Row, Col } from 'react-bootstrap';
import Currency from '../assets/imgs/image-currency.jpg';
import Confetti from '../assets/imgs/image-confetti.jpg';
import Plane from '../assets/imgs/image-plane.jpg';
import Restaurant from '../assets/imgs/image-restaurant.jpg';
const Article = ()=>{
    const articles = [
        {
            id: 0,
            img: Currency,
            author: 'By: Claire Robinson',
            title: 'Receive money in any currency with no fees',
            content: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
        },
        {
            id: 1,
            img: Restaurant,
            author: 'By: Wilson Hutton',
            title: 'Treat yourself without worrying about money',
            content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
        },
        {
            id: 2,
            img: Plane,
            author: 'By: Wilson Hutton',
            title: 'Take your Easybank card wherever you go',
            content: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
        },
        {
            id: 3,
            img: Confetti,
            author: 'By: Claire Robinson',
            title: 'Our invite-only Beta accounts are now live!',
            content: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
        },
    ]
    return(
        <>
            <Container style={{marginTop: '5rem', padding: '1rem'}}>
                <h1>Latest Articles</h1>
                <Row style={{marginTop: '2rem'}}>
                    {
                        articles.map(({id, img, author, title, content})=>(
                            <Col xs={12} sm={6} md={4} lg={3} key={id}>
                                <Card  style={{border: 'none', backgroundColor: 'hsl(0, 0%, 100%)'}}>
                                    <Card.Img src={img} style={{width: '100%', height: '30vh'}}/>
                                    <Card.Body>
                                        <Card.Text>{author}</Card.Text>
                                        <Card.Title style={{fontSize: '1rem'}}>{title}</Card.Title>
                                        <Card.Text style={{fontSize: '0.7rem', color: 'hsl(233, 8%, 62%)'}}>
                                            {content}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            

        </>
    )
}

export default Article;