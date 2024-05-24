import { createContext, useState } from "react";
import Yag from "./assets/tamYagliPeynir.png";
import Sut from "./assets/sut.jpg";
import Lor from "./assets/trabzonLorPeynir.png";
import TrabzonPeynir from "./assets/trabzonTereyagi.png";

export const CheesesContext = createContext();

export function ContextProvider({ children }) {
    const [cheeses] = useState([
        {
            id: 1,
            name: "Tam Yağlı Peynir",
            weight: 500,
            price: 265.66,
            unit: 'g',
            oldPrice: 299.99,
            discount: 15,
            img: Yag

        },
        {
            id: 2,
            name: "Trabzon-Araklı Tereyağı",
            weight: 1000,
            price: 265.66,
            unit: 'g',
            oldPrice: 299.99,
            discount: 15,
            img: TrabzonPeynir

        },
        {
            id: 3,
            name: "Trabzon-Araklı Lor Peyniri",
            weight: 1000,
            unit: 'g',
            price: 265.66,
            img: Lor

        },
        {
            id: 4,
            name: "Tam Yağlı İnek Sütü",
            weight: 5000,
            unit: 'ml',
            price: 265.66,
            oldPrice: 299.99,
            discount: 15,
            img: Sut

        },
    ])
    return (
        <CheesesContext.Provider value={{ cheeses }}>
            {children}
        </CheesesContext.Provider>
    )
}

