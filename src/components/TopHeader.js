import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function TopHeader() {
    const navigate = useNavigate();
    return (
        <div className="headerTop">
            <div className="headerTopContents">
                <div className="menues">
                    <p onClick={() => navigate("/policies")}>Satış Sözleşmesi</p>
                    <p onClick={() => navigate("/support")}>İletişim</p>
                    <p >Yardım & Destek</p>
                </div>
                <div className="signIn-signUp">
                    <div className="signUp" onClick={() => navigate("/signup")}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.58203 4.16925H4.07379C3.65639 4.16925 3.25609 4.33506 2.96095 4.6302C2.66581 4.92534 2.5 5.32564 2.5 5.74304V16.7595C2.5 17.1769 2.66581 17.5772 2.96095 17.8724C3.25609 18.1675 3.65639 18.3333 4.07379 18.3333H15.0903C15.5077 18.3333 15.908 18.1675 16.2031 17.8724C16.4983 17.5772 16.6641 17.1769 16.6641 16.7595V11.2513M15.4837 2.98891C15.7968 2.67587 16.2214 2.5 16.6641 2.5C17.1068 2.5 17.5314 2.67587 17.8444 2.98891C18.1575 3.30196 18.3333 3.72654 18.3333 4.16925C18.3333 4.61196 18.1575 5.03654 17.8444 5.34959L10.3689 12.8251L7.22136 13.612L8.00825 10.4644L15.4837 2.98891Z" stroke="#5B1128" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Kayıt Ol</p>
                    </div>
                    <div className="signIn" onClick={() => navigate("/login")}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66668C5.78262 12.5 4.93478 12.8512 4.30965 13.4763C3.68453 14.1014 3.33334 14.9493 3.33334 15.8333V17.5M13.3333 5.83333C13.3333 7.67428 11.841 9.16667 10 9.16667C8.15906 9.16667 6.66668 7.67428 6.66668 5.83333C6.66668 3.99238 8.15906 2.5 10 2.5C11.841 2.5 13.3333 3.99238 13.3333 5.83333Z" stroke="#5B1128" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <p>Giriş Yap</p>
                    </div>
                </div>
            </div>
        </div>
    )
}