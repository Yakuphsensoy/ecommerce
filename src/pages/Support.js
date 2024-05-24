import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import "../styles/Support.css";
import SupportImg from "../assets/supportImg.png";
import SupportHeader from "../assets/supportHeader.png";
import Footer from "../components/Footer";


export default function Support() {
    return (
        <div className="support">
            <TopHeader />
            <div className="container">
                <Header />
            </div>
            <div className="contactImg">
                <img src={SupportHeader} alt="" srcset="" />
            </div>
            <div className="mainSide">
                <div className="block">
                    <div className="contactSide">
                        <div className="contents">
                            <div className="contentsLeft">
                                <h2 className="contentsTitle">Uzaktan destek alın</h2>
                                <div className="callCenter">
                                    <div className="svg">
                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.4" y="0.4" width="55.2" height="55.2" rx="27.6" fill="white" />
                                            <rect x="0.4" y="0.4" width="55.2" height="55.2" rx="27.6" stroke="#E3E3E3" stroke-width="0.8" />
                                            <path d="M39.6667 33.74V37.24C39.668 37.5649 39.6014 37.8865 39.4713 38.1842C39.3411 38.4819 39.1502 38.7492 38.9108 38.9688C38.6713 39.1885 38.3887 39.3557 38.0809 39.4598C37.7731 39.5639 37.4469 39.6026 37.1233 39.5733C33.5333 39.1833 30.0848 37.9565 27.055 35.9917C24.2361 34.2004 21.8462 31.8105 20.055 28.9917C18.0833 25.9481 16.8563 22.4828 16.4733 18.8767C16.4442 18.554 16.4825 18.2289 16.5859 17.9219C16.6893 17.6149 16.8555 17.3328 17.0739 17.0936C17.2923 16.8543 17.5581 16.6632 17.8544 16.5323C18.1507 16.4014 18.4711 16.3336 18.795 16.3333H22.295C22.8612 16.3278 23.4101 16.5283 23.8394 16.8975C24.2687 17.2667 24.5491 17.7794 24.6283 18.34C24.7761 19.4601 25.05 20.5598 25.445 21.6183C25.602 22.0359 25.6359 22.4897 25.5429 22.926C25.4498 23.3623 25.2337 23.7628 24.92 24.08L23.4383 25.5617C25.0992 28.4825 27.5175 30.9009 30.4383 32.5617L31.92 31.08C32.2372 30.7663 32.6377 30.5502 33.074 30.4571C33.5103 30.3641 33.9641 30.398 34.3817 30.555C35.4402 30.95 36.5399 31.2239 37.66 31.3717C38.2267 31.4516 38.7443 31.7371 39.1143 32.1737C39.4843 32.6104 39.6809 33.1678 39.6667 33.74Z" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="numText">
                                        <span className="telNumber">0 (555) 555 55 55 <br /> 0 (539) 704 04 77</span><br />
                                        <span className="numbersText">Sorularınıza yanıt almak için müşteri hizmetlerimize 7/24 ulaşabilirsiniz.</span>
                                    </div>
                                </div>
                                <div className="email">
                                    <div className="svgMail">
                                        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="0.4" y="0.4" width="55.2" height="55.2" rx="27.6" fill="white" />
                                            <rect x="0.4" y="0.4" width="55.2" height="55.2" rx="27.6" stroke="#E3E3E3" stroke-width="0.8" />
                                            <path d="M39.6663 21C39.6663 19.7167 38.6163 18.6667 37.333 18.6667H18.6663C17.383 18.6667 16.333 19.7167 16.333 21M39.6663 21V35C39.6663 36.2833 38.6163 37.3333 37.333 37.3333H18.6663C17.383 37.3333 16.333 36.2833 16.333 35V21M39.6663 21L27.9997 29.1667L16.333 21" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="emailText">
                                        <p className="adress">bilgi@peynircio.com.tr</p>
                                        <span className="adressText">İstek ve şikayetleriniz için bizlere mail adresimizden ulaşabilirsiniz.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="contentRight">
                                <img src={SupportImg} alt="" srcset="" />
                            </div>
                        </div>
                        <div className="maps">
                            <div className="mapsArea">
                                <h2 className="mapsTitle">Üretim Yerini Ziyaret Edin</h2>
                                <div className="mapsText">
                                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.4" y="0.4" width="55.2" height="55.2" rx="27.6" fill="white" />
                                        <rect x="0.4" y="0.4" width="55.2" height="55.2" rx="27.6" stroke="#E3E3E3" stroke-width="0.8" />
                                        <path d="M38.5 25.6666C38.5 33.8333 28 40.8333 28 40.8333C28 40.8333 17.5 33.8333 17.5 25.6666C17.5 22.8819 18.6062 20.2111 20.5754 18.242C22.5445 16.2729 25.2152 15.1666 28 15.1666C30.7848 15.1666 33.4555 16.2729 35.4246 18.242C37.3938 20.2111 38.5 22.8819 38.5 25.6666Z" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M28 29.1666C29.933 29.1666 31.5 27.5996 31.5 25.6666C31.5 23.7336 29.933 22.1666 28 22.1666C26.067 22.1666 24.5 23.7336 24.5 25.6666C24.5 27.5996 26.067 29.1666 28 29.1666Z" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="mapsAdress">
                                        <p className="textTitle">Üretim Yeri</p>
                                        <p className="textAdress">Maltepe Mh. Orhangazi Cad.
                                            No: 66 Adapazarı / Sakarya <br />
                                            <a href="#">Haritada gör</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="mapSide">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12096.628723522866!2d30.352075273431726!3d40.71455620660105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb1f593220f39%3A0x8b07b5995e234a0d!2sArifiye%2C%20Arifbey%2C%2054580%20Arifiye%2FSakarya!5e0!3m2!1str!2str!4v1716552733153!5m2!1str!2str" width="554" height="326" frameborder="0" style={{ border: 0, borderRadius: 16 }} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}