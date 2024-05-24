import Header from "../components/Header"
import TopHeader from "../components/TopHeader"
import "../styles/Login.css"
import { useNavigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Footer from "../components/Footer"

export default function Login() {
    const { loginWithRedirect } = useAuth0();
    const navigate = useNavigate();
    return (
        <div className="login">
            <TopHeader />
            <div className="container">
                <Header />
            </div>
            <div className="loginSide">
                <div className="loginLeftSide">
                    <div className="loginLeftTop">
                        <div className="loginTxt">
                            <h1 className="logintitle">Merhaba</h1>
                            <p className="loginParagraph">Lorem ipsum dolor sit amet consectetur. Ac nunc elit et velit a a massa et lobortis. Purus venenatis id vitae.</p>
                        </div>
                        <div className="login-signUp">
                            <span className="loginBtn">Giriş Yap</span>
                            <span onClick={() => navigate("/signUp")} className="signUp">Üye Ol</span>
                        </div>
                    </div>
                    <div className="mail-password">
                        <div className="mailInput">
                            <span>E-Posta</span>
                            <input className="mail" type="text" placeholder="E-posta Adresi" />
                        </div>
                        <div className="passwordInput">
                            <span>Şifre</span>
                            <input className="password" type="password" placeholder="Şifre" />
                        </div>
                        <div className="forgotPsw-rmbrBtn">
                            <div className="rememberMe">
                                <input type="checkbox" id="rmbrBtn" />
                                <span id="rmbrBtn">Beni Hatırla</span>
                            </div>
                            <div className="forgotPassword">
                                <a href="#">Şifremi Unuttum</a>
                            </div>
                        </div>
                        <br />
                        <div className="loginClick">
                            <button className="loginClick" onClick={() => navigate("/")}><p>Giriş Yap</p></button>

                        </div>
                        <div className="orLabel">
                            <p>veya</p>
                        </div>
                        <div className="socialLoginSide">
                            <h2>Sosyal hesap ile giriş yap</h2>
                            <p>Şifresiz giriş yapabilmek için Google, Apple
                                veya Facebook hesabınızı bağlayabilirsiniz.</p>
                            <div className="googleFace">
                                <button onClick={loginWithRedirect}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.25 12.2728C24.25 11.4219 24.1721 10.6037 24.0273 9.81824H12.4948V14.4601H19.0848C18.8009 15.9601 17.9382 17.2311 16.6414 18.082V21.0929H20.5987C22.9142 19.0038 24.25 15.9274 24.25 12.2728Z" fill="#4285F4" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4948 24.0003C15.801 24.0003 18.5728 22.9257 20.5988 21.093L16.6415 18.082C15.545 18.802 14.1424 19.2275 12.4948 19.2275C9.30557 19.2275 6.6061 17.1166 5.6432 14.2802H1.55225V17.3893C3.56711 21.3111 7.70815 24.0003 12.4948 24.0003Z" fill="#34A853" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.64338 14.2801C5.39848 13.5601 5.25933 12.791 5.25933 12.0001C5.25933 11.2092 5.39848 10.4401 5.64338 9.72009V6.61096H1.55243C0.723103 8.23098 0.25 10.0637 0.25 12.0001C0.25 13.9365 0.723103 15.7693 1.55243 17.3893L5.64338 14.2801Z" fill="#FBBC05" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.495 4.77279C14.2928 4.77279 15.9069 5.37825 17.1759 6.56735L20.688 3.12549C18.5674 1.18911 15.7956 0 12.495 0C7.70828 0 3.56723 2.68912 1.55237 6.61099L5.64332 9.72012C6.60622 6.88372 9.3057 4.77279 12.495 4.77279Z" fill="#EA4335" />
                                </svg>
                                    Google</button>
                                <button onClick={loginWithRedirect}><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_468_5073)">
                                        <path d="M12.75 24.002C19.3774 24.002 24.75 18.6293 24.75 12.0018C24.75 5.37435 19.3774 0.00170898 12.75 0.00170898C6.12258 0.00170898 0.75 5.37435 0.75 12.0018C0.75 18.6293 6.12258 24.002 12.75 24.002Z" fill="#1977F3" />
                                        <path d="M17.421 15.4714L17.9526 12.0018H14.6247V9.75063C14.6247 8.80223 15.0888 7.87576 16.5806 7.87576H18.0943V4.92256C18.0943 4.92256 16.7207 4.68799 15.4078 4.68799C12.6672 4.68799 10.8751 6.34853 10.8751 9.35743V12.0018H7.82739V15.4714H10.8751V23.8568C11.486 23.953 12.112 24.002 12.7499 24.002C13.3878 24.002 14.0139 23.9513 14.6247 23.8568V15.4714H17.421Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_468_5073">
                                            <rect width="24" height="24.0003" fill="white" transform="translate(0.75)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                    Facebook</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="loginRightSide">
                    <div className="rightSideImg"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}