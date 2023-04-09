import React from 'react'
import bg from "../assets/img/man.png"
import elements from "../assets/img/elements.png"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 150);
    const [index, setIndex] = useState(1);
    const toRotate = ["Content Writing", "Lead Generation", "Graphic design","Social Media Marketing"];
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    return (
        <>
            <div className='hero'>
                <div className='rowtemp'>
                    <div className='col-1'>
                        <img src={bg} alt="" />
                        <img src={elements} className="elements" alt="" />
                    </div>
                    <div className='col-2 col-2-mob'>
                        <h1>Outlead Solutions<br /> <span style={{ color: "orange" }}>Marketing </span>Agency</h1>
                        {/* <h1> {`Hi I m vanshita, A `} <span className="wrap">{text}</span> </h1> */}
                        <br/>
                        <div style={{backgroundColor:"white", width:"fit-content",borderRadius:"20px"}}>
                        <h3 className='mx-5' style={{color:"black"}}> {'We do '}   <span className="wrap" style={{color:"orange"}}>{text}</span> </h3>
                        </div>
                        <br />
                        <br />
                        <Link to="/contactCeo" className='GAQ GAQ-mob'>Learn More</Link><Link to="/contactCeo" className='GAQ GAQ-mob'>Contact</Link> 
                    </div>
                </div>
            </div>
           
        </>
    )
}
