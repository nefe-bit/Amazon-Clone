import React from 'react'
import './Home.css';
import Product from'./Product'; 
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
                />
                <div className="home__row">
                    <Product
                       id="651515"
                       title="Apple Watch Series 5 (GPS, 44MM) - Gold Aluminum Case with Pink Sand Sport Band"
                       price={299.99}
                       rating={5}
                       image="https://m.media-amazon.com/images/I/71luYyAPVTL._AC_SX522_.jpg"
                       />
                    <Product
                       id="35464153"
                       title="LG OLED65CXPUA Alexa BuiltIn CX 65Inch 4K Smart OLED TV 2020"
                       price={1565}
                       rating={5}
                       image="https://m.media-amazon.com/images/I/A196kPpowTL._AC_SX355_.jpg"
                       />
                </div>
                <div className="home__row">
                     <Product
                        id="5226554"
                        title="Apple Pencil" 
                        price={94.88}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/21l795GXZkL._AC_SY445_.jpg"
                        />
                     <Product
                       id="654881"
                       title="Fire TV Stick with Alexa Voice Remote (includes TV controls) | HD streaming      device | 2020 release"
                       price={39.99}
                       rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61ilAE60KoL._AC_SX425_.jpg"
                     />
                     <Product
                       id="638641"
                       title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                       price="263.99"
                       rating={4}
                       image="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SX355_.jpg"
                     />
               </div>
                <div className="home__row">
                     <Product
                       id="334683"
                       title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
                       price={34.58}
                       rating={3}
                       image="https://images-na.ssl-images-amazon.com/images/I/61q8yRQOrWL._AC_SL1000_.jpg"
                     />
               </div>
            </div>
        </div>
    );
}

export default Home;
