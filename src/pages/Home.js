import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Cheeses from '../components/Cheeses';
import TopHeader from '../components/TopHeader';
import Footer from '../components/Footer';
import "../styles/Home.css";
import FooterPng from '../assets/footer.png';

export default function Home() {

    return (
        <div className="home">
            <TopHeader />
            <div className="container">
                <Header />
                <Banner />
                <div className="dot-txt">
                    <div className="dot"></div>
                </div>
                <p className='txt'>Peynircio Ürünleri</p>
                <Cheeses />
            </div>
            <div className="footer">
                <img src={FooterPng} alt="" className="footerImg" />
                <Footer />
            </div>
        </div>
    )
}