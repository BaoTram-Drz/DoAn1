import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";

function DefaultLayout({children}) {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        // Thực hiện các hành động khác tương ứng với từng nút
    }
    return ( 
        <div>
            <Header activeButton={activeButton} handleButtonClick={handleButtonClick}/>
            <div>
                {children}
            </div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;