
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import "../styles/Product.css";
import { useContext, useState } from "react";
import FooterPng from '../assets/footer.png';
import { useParams } from 'react-router-dom';
import { CheesesContext } from '../ContextProvider';



export default function Product() {
    const [value, setValue] = useState(0);
    const { slug } = useParams();
    const { cheeses } = useContext(CheesesContext);
    const cheese = cheeses.find(cheese => cheese.slug === slug);


    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };

    const decrement = () => {
        setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    };
    return (
        <div className="product">
            <TopHeader />
            <div className="container">
                <Header />
            </div>
            <div className="productContainer">
                <div className="productDetails">
                    <div className="productShowRoom">
                        <div className="productImgArea">
                            <img src={cheese.img} alt={cheese.name} />
                        </div>
                        <div className="cargoInformation">
                            <div className="informationCards">
                                <div className="card1">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_468_6046)">
                                            <path d="M16.5 4V10.6667" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.83325 22.6667H12.4999" stroke="#5B1128" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M28.5 13.3333C28.5 12.6261 28.219 11.9478 27.719 11.4477C27.2189 10.9476 26.5406 10.6667 25.8333 10.6667H7.16667C6.45942 10.6667 5.78115 10.9476 5.28105 11.4477C4.78095 11.9478 4.5 12.6261 4.5 13.3333" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M25.8333 28H7.5C6.70435 28 5.94129 27.6839 5.37868 27.1213C4.81607 26.5587 4.5 25.7957 4.5 25V11.3333C4.5 10.6133 4.64667 9.9 4.92933 9.24L6.388 5.82133C6.61875 5.28082 7.00324 4.82002 7.4937 4.49621C7.98416 4.1724 8.55896 3.99985 9.14667 4H23.852C25.0533 4 26.1387 4.716 26.6107 5.82133L28.0773 9.23867C28.3573 9.90133 28.5027 10.6133 28.5 11.3333V25.3333C28.5 26.0406 28.219 26.7189 27.719 27.219C27.2189 27.719 26.5406 28 25.8333 28Z" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_468_6046">
                                                <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="card1-p">Ücretsiz Gönderim</p></div>
                                <div className="card2">
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_468_6049)">
                                            <path d="M17.8333 28H7.5C6.70435 28 5.94129 27.6839 5.37868 27.1213C4.81607 26.5587 4.5 25.7957 4.5 25V10.8533C4.5 10.448 4.58267 10.048 4.74133 9.67467L6.388 5.82133C6.61918 5.28113 7.00377 4.82062 7.49413 4.49687C7.9845 4.17312 8.55907 4.00036 9.14667 4H23.852C25.052 4 26.1387 4.71733 26.6107 5.82133L28.2573 9.67467C28.4173 10.048 28.5 10.448 28.5 10.8533V16" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.5 4V10.6667" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9.8335 22.6667H12.5002" stroke="#5B1128" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M28.5 17.3333V13.3333C28.5 12.6261 28.219 11.9478 27.719 11.4477C27.2189 10.9476 26.5406 10.6667 25.8333 10.6667H7.16667C6.45942 10.6667 5.78115 10.9476 5.28105 11.4477C4.78095 11.9478 4.5 12.6261 4.5 13.3333V22.6667" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.1665 28H25.1665C26.0506 28 26.8984 27.6488 27.5235 27.0237C28.1486 26.3986 28.4998 25.5507 28.4998 24.6667C28.4998 23.7826 28.1486 22.9348 27.5235 22.3097C26.8984 21.6845 26.0506 21.3333 25.1665 21.3333H19.1665" stroke="#5B1128" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M21.8332 24L19.1665 21.3333L21.8332 18.6667" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_468_6049">
                                                <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className="card2-p">1-3 iş günü içerisinde
                                        teslimatta</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="productInformation">
                        <div className="productTitle">
                            <h3>{cheese.name}</h3>
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur. Est pretium tincidunt purus </li>
                                <li>Lorem ipsum dolor sit amet consectetur. Est pretium tincidunt purus </li>
                            </ul>
                        </div>
                        <div className="productWeight">
                            <h3>İndirimli Gramaj Seçenekleri</h3>
                            <div className="weights">
                                <div className="w-card">
                                    <div className="w-discount">%{cheese.discount}<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.104 5.35416L12.3957 12.6458M12.3957 12.6458V5.35416M12.3957 12.6458H5.104" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </div>
                                    <span className="w-cardWeight">900 Gram</span>
                                    <span className="w-cardPrice">180.00TL</span>
                                </div>
                                <div className="w-card w-card__selected">
                                    <div className="w-discount">%17<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.104 5.35416L12.3957 12.6458M12.3957 12.6458V5.35416M12.3957 12.6458H5.104" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </div>
                                    <span className="w-cardWeight">600 Gram</span>
                                    <span className="w-cardPrice">160.00TL</span>
                                </div>
                                <div className="w-card">
                                    <div className="w-discount">%15<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.104 5.35416L12.3957 12.6458M12.3957 12.6458V5.35416M12.3957 12.6458H5.104" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </div>
                                    <span className="w-cardWeight">300 Gram</span>
                                    <span className="w-cardPrice">130.00TL</span>
                                </div>
                            </div>
                        </div>
                        <div className="productPiece">
                            <div className="piecerCard">
                                <h3>Adet Seçin</h3>
                                <div className="piercerHandle">
                                    <button className="decrement" onClick={decrement}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8319 9.9986H4.16811" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </button>
                                    <input type="number" name="piecer" id="piecer" min={0} value={value} onChange={e => setValue(Number(e.target.value))} />
                                    <button className="increment" onClick={increment}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.75 9.91666H4.25003M10 4.16669V15.6666" stroke="#76B7E6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="grammageCard">
                                <h3>Gramajı Kendiniz Ayarlayın</h3>
                                <select name="grammage" id="grammage">
                                    <option value="250gram">250 Gram</option>
                                    <option value="500gram">500 Gram</option>
                                    <option value="750gram">750 Gram</option>
                                </select>
                            </div>
                        </div>
                        <div className="totalPrice">
                            <div className="price">
                                <span>{cheese.price}TL</span>
                            </div>
                            <hr />
                            <div className="whatsappSide">
                                <div className="whatsapp">
                                    <div className="whatsapp-svg">
                                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28.6135 15.4185C28.6181 17.1783 28.2069 18.9143 27.4135 20.4852C26.4727 22.3675 25.0265 23.9507 23.2367 25.0575C21.447 26.1643 19.3845 26.751 17.2801 26.7518C15.5203 26.7564 13.3048 25.9849 11.734 25.1915L5.94689 26.7518L7.6489 21.1064C6.85548 19.5356 5.94223 17.1783 5.94682 15.4185C5.94763 13.3142 6.5343 11.2516 7.64111 9.46188C8.74792 7.67215 10.3312 6.22591 12.2135 5.28515C13.7843 4.49173 15.5203 4.08056 17.2801 4.08515H17.9468C20.7259 4.23847 23.3509 5.4115 25.319 7.37963C27.2871 9.34776 28.4602 11.9727 28.6135 14.7518V15.4185Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <g clip-path="url(#clip0_468_6193)">
                                                <path d="M22.0733 18.4737V20.0917C22.074 20.2419 22.0432 20.3906 21.983 20.5282C21.9228 20.6658 21.8346 20.7894 21.7239 20.8909C21.6132 20.9925 21.4826 21.0698 21.3403 21.1179C21.198 21.166 21.0472 21.1839 20.8976 21.1704C19.238 20.99 17.6439 20.4229 16.2432 19.5146C14.9401 18.6866 13.8353 17.5818 13.0073 16.2787C12.0958 14.8717 11.5286 13.2698 11.3515 11.6027C11.3381 11.4536 11.3558 11.3033 11.4036 11.1614C11.4514 11.0194 11.5282 10.889 11.6292 10.7784C11.7301 10.6678 11.853 10.5795 11.99 10.519C12.127 10.4585 12.2751 10.4271 12.4248 10.427H14.0428C14.3045 10.4244 14.5583 10.5171 14.7567 10.6878C14.9552 10.8584 15.0848 11.0955 15.1214 11.3546C15.1897 11.8724 15.3164 12.3808 15.499 12.8701C15.5715 13.0632 15.5872 13.273 15.5442 13.4747C15.5012 13.6763 15.4013 13.8615 15.2563 14.0081L14.5713 14.6931C15.3391 16.0433 16.457 17.1613 17.8073 17.929L18.4922 17.2441C18.6389 17.0991 18.824 16.9991 19.0257 16.9561C19.2274 16.9131 19.4372 16.9288 19.6302 17.0014C20.1195 17.184 20.6279 17.3106 21.1457 17.3789C21.4077 17.4159 21.647 17.5478 21.818 17.7497C21.989 17.9516 22.0799 18.2092 22.0733 18.4737Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_468_6193">
                                                    <rect width="12.9438" height="12.9438" fill="white" transform="translate(10.208 9.34833)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p>Whatsapp Üzerinden Sipariş Verin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="productText">
                    <div className="p-1">
                        <h3>Kullanım Alanları</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada vitae, in etiam orci vel.
                            Lectus egestas sem aenean amet sit eget consectetur. Morbi ornare iaculis lacus nibh facilisi ac. Lectus cras volutpat in amet neque,
                            tristique leo leo in. Ipsum lobortis enim id sed. Magna faucibus blandit dis mauris lacus, nunc. Arcu in pretium nunc, nisl. Et id nulla
                            consectetur justo. </p>
                    </div>
                    <div className="p-2-1">
                        <h3>Faydaları</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. At morbi dictum lacinia et ultrices. Malesuada dolor blandit habitant sit sit ut cursus quis netus.
                            Amet felis ultrices velit sagittis ultrices sit. Gravida dignissim non mattis tristique auctor porttitor. Eros tristique felis laoreet fringilla tellus sagittis.</p>
                    </div>
                    <div className="p-2-2">
                        <p>Lorem ipsum dolor sit amet consectetur. Felis eget commodo sit nec eleifend diam fringilla amet neque. Volutpat dis enim consectetur gravida.</p>
                    </div>
                    <div className="p-3">
                        <div className="p-3-svg">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_468_6227)">
                                    <path d="M10.0551 6.00001C9.84573 6.00085 9.64135 6.06368 9.4677 6.18059C9.29406 6.29749 9.15895 6.46322 9.07942 6.65686C8.9999 6.85049 8.97952 7.06334 9.02087 7.26855C9.06222 7.47375 9.16345 7.6621 9.31176 7.80983C9.46007 7.95755 9.64883 8.05802 9.85419 8.09855C10.0596 8.13908 10.2723 8.11786 10.4656 8.03756C10.659 7.95726 10.8242 7.82149 10.9404 7.64738C11.0566 7.47327 11.1186 7.26863 11.1186 7.05931C11.1186 6.91984 11.0911 6.78175 11.0376 6.65295C10.9841 6.52415 10.9056 6.40719 10.8068 6.30877C10.708 6.21035 10.5907 6.13241 10.4617 6.07942C10.3327 6.02644 10.1945 5.99945 10.0551 6.00001Z" fill="#667085" />
                                    <path d="M10 17.5C8.01088 17.5 6.10322 16.7098 4.6967 15.3033C3.29018 13.8968 2.5 11.9891 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10C17.5 11.9891 16.7098 13.8968 15.3033 15.3033C13.8968 16.7098 11.9891 17.5 10 17.5V17.5Z" stroke="#667085" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 10V14.1667" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_468_6227">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada vitae, in etiam orci vel.
                            Lectus egestas sem aenean amet sit eget consectetur. Morbi ornare iaculis lacus nibh facilisi ac. Lectus cras volutpat in amet neque, </p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <img src={FooterPng} alt="" className="footerImg" />
                <Footer />
            </div>
        </div>

    )
}