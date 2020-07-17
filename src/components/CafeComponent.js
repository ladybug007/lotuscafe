import React from 'react';


export default function Cafe() {
    return (
        <React.Fragment>
        <div id='cafe-img' style={{backgroundImage: "url('assets/images/coffee-cake.JPG')"}}>
        </div>


        <div className='menu'>
            <div className='menu-list'>

                <a href='#sandwich'>
                    <h5>SANDWICHES</h5>
                </a>
                <a href='#coffee'>
                    <h5>COFFEE</h5>
                </a>
                <a href='#espresso'>
                    <h5>ESPRESSO</h5>
                </a>
                <a href='#sweets'>
                    <h5>SWEETS</h5>
                </a>

            </div>
            <hr id='line' />

            <h4 id='sandwich'>SANDWICHES</h4>
            <div className='menu-item'>
                <h5>Mushroom Melt</h5>
                <p>Roasted field mushrooms, tomato, asparagus, yuzu aioli, rocket, pickles, Kris
                Lloyd goat fetta, tasty
                cheese
                </p>
                <h4>$14</h4>
            </div>


            <div className='menu-item'>
                <h5>Artisanal Ham and Cheese Melt</h5>
                <p>Lucas meats double smoked ham, tomato, tasty cheese, rocket
                </p>
                <h4>$10</h4>
            </div>

            <div className='menu-item'>
                <h5>Grilled chicken Toastie</h5>
                <p>Yuzu aioli, tomato, asparagus, tasty cheese, rocket, seeded mustard
                </p>
                <h4>$14</h4>
            </div>

            <div className='menu-item'>
                <h5>Japanese Egg Sando</h5>
                <p>Soft white bread, kewpie mayo, Japanese omelette with furikake seasoning, chives.
                </p>
                <h4>$9</h4>
            </div>
            <hr id='line' />

            <h4 id='coffee'>COFFEE</h4>

            <div className='menu-item'>
                <h5>AMERICANO</h5>
                <p>espresso + hot water</p>
                <h4>$3</h4>
            </div>
            <div className='menu-item'>
                <h5>CARAMEL MACCHIATO</h5>
                <p>steamed milk + vanilla marked by espresso + caramel</p>
                <h4>$4</h4>
            </div>
            <div className='menu-item'>
                <h5>FEATURED FRAPPE</h5>
                <p>espresso + ice cream base + choice of flavor</p>
                <h4>$5</h4>
            </div>
            <div className='menu-item'>
                <h5>DIRTY CHAI</h5>
                <p>vanilla or spicy chai + espresso + steamed milk
                </p>
                <h4>$4</h4>
            </div>
            <hr id='line' />

            <h4 className='espresso' id='espresso'>ESPRESSO</h4>
            <div className='menu-item'>
                <h5>AFFOGATO</h5>
                <p>espresso poured over ice cream</p>
                <h4>$4</h4>
            </div>
            <div className='menu-item'>
                <h5>CAPPUCCINO</h5>
                <p>1/3 espresso + 1/3 steamed milk + 1/3 foam</p>
                <h4>$3.50</h4>
            </div>
            <div className='menu-item'>
                <h5>FLAT WHITE</h5>
                <p>1/3 espresso + 2/3 milk micro foam</p>
                <h4>$3.50</h4>
            </div>
            <hr id='line' />

            <h4 className='sweets' id='sweets'>SWEETS</h4>
            <div className='menu-item'>
                <h4>Berry Field in Alaska French Toast</h4>
                <p>Toasted brioche, berry compote, mascarpone, chopped strawberry, white chocolate
                parfait, toached Italian
                meringue and fuelletine.
                </p>
                <h5>$15.00</h5>
            </div>
            <div className='menu-item'>
                <h4>Sundae Series</h4>
                <p>Seasonal Flavours with mixed berry compote and fuelletine</p>
                <h5>$10</h5>
            </div>
            <div className='menu-item'>
                <h4>Special</h4>
                <p>Hot chips and seasonal soft serve</p>
                <h5>$12</h5>
            </div>
            <div className='menu-item'>
                <h4>Soft serve</h4>
                <p>Seasonal soft serve</p>
                <h5>$5.50</h5>
            </div>
            <hr id='line' />

        </div>
        </React.Fragment>

    );
}