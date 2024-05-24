import React from "react";
import { useState, useEffect } from "react";
import "../styles/Banner.css";
import Slider from "./Slider";

export default function Banner() {
    const [cheeses, setCheeses] = useState();

    useEffect(() => {

    })
    return (
        <div className="banner">
            <div className="bannerLeft">
                <div className="bannerLeftTxt">
                    <p className="top"><span className="bannerWp">Whatsapp</span> Üzerinden Hemen Sipariş Verin</p>
                    <p className="bottom">Araklı İlçesinin Meşhur Süt Ürünleri
                        Sizinle</p>
                </div>
            </div>
            <div className="bannerRight">
                <Slider />
            </div>
        </div>
    )
}