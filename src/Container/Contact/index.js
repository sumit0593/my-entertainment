import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsGithub, BsYoutube } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        {name:'Facebook', link:'https://www.facebook.com/SumitKumar0509/', text:'Follow to my facebook.'},
        {name:'Linkedin', link:'https://www.linkedin.com/in/sumit-kumar0509/', text:'Follow to my linkedin.'},
        {name:'Twitter', link:'https://twitter.com/SumitKumar_New', text:'Follow to my twitter.'},
        {name:'GitHub', link:'https://github.com/sumit0593', text:'Follow to my github account.'},
        {name:'YouTube', link:'https://www.youtube.com/channel/UCp6oVKNmZyuU4ULScIl2Vig', text:'Follow to my youtube channel.'},
        {name:'Email', link:'sumitsumitsumit163@gmail.com',  text:'write to me a mail'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                        <li>
                            <a rel="noreferrer" href="https://www.facebook.com/SumitKumar0509/" target="_blank">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/sumit-kumar0509/" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://twitter.com/SumitKumar_New" target="_blank">
                                <BsTwitter />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://github.com/sumit0593" target="_blank">
                                <BsGithub />
                            </a>
                        </li>
                        <li>
                            <a rel="noreferrer" href="https://www.youtube.com/channel/UCp6oVKNmZyuU4ULScIl2Vig" target="_blank">
                                <BsYoutube />
                            </a>
                        </li> 
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;