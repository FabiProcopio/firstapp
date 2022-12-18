import React from "react"
import Header from '../../components/header/header'
import './styles.css'
import Video from '../../assets/video.mp4'
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"

function Home(){
    return (
        <>
            <Header />
            <div id='banner'></div>
            <div id='trailer-container'>
                <div className='content'>
                    <video controls className='trailer'>
                        <source src={Video} />
                        Your Browser unfortunately doesn't support Videos
                    </video>
                
                    <div id='sinopse'>
                        <p className='description'>
                        Two years of nights have turned Bruce Wayne into a nocturnal animal. 
                        But as he continues to find his way as Gotham's dark knight Bruce 
                        is forced into a game of cat and mouse with his biggest threat so far, 
                        a manic killer known as "The Riddler".
                        </p>
                        <button className='button'>Buy Ticket</button>
                    </div>
                </div>
            </div>
            <Cards />
            <Footer />
        </>
    )
}

export default Home;