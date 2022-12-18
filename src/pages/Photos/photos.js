import React from "react"
import Footer from "../../components/Footer";
import Header from "../../components/header/header";
import './styles.css'


function Photos(){
    return (
        <>
            <Header />

            <h4>
                Gallery
            </h4>

            <div className="gallery">
                <div className="gallery-content">
                    <div className="photo gallery1"></div>
                    <div className="photo gallery2"></div>
                    <div className="photo gallery3"></div>
                    <div className="photo gallery4"></div>
                    <div className="photo gallery5"></div>
                    <div className="photo gallery6"></div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Photos;