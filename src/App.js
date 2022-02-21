import React from 'react';
import './App.css';
import Button from './components/Button.js';
import Product from './components/Product.js';
import Tile from './components/Tile.js';

import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';

function App() {
  return (
    <div>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button name="to the collection"/>
            <Button name="shop all bags"/>
            <Button name="pre-orders" disabled={true}/>
        </nav>
        <main>
            <Product label="Best seller" image={bag1} title="The handy bag" price="400"/>
            <Product label="Best seller" image={bag2} title="The stylish bag" price="250"/>
            <Product label="New Collection" image={bag3} title="The simple bag" price="300"/>
            <Product label="New Collection" image={bag4} title="The trendy bag" price="150"/>
        </main>
        <footer>
            <Tile title="the brand">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eligendi ex harum magnam nobis reprehenderit sequi voluptates. Culpa, deleniti, natus.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus eligendi ex harum magnam nobis reprehenderit sequi voluptates. Culpa, deleniti, natus.</p>
            </Tile>
            <Tile image={brand} />
            <Tile image={ourStory} />
            <Tile title="our story">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur autem, beatae debitis dolor dolorem dolorum earum eius eos error id illo labore, maiores modi nesciunt omnis perferendis porro possimus quaerat quam quisquam quod quos rerum saepe ut voluptate voluptates voluptatum.</p>
            </Tile>

        </footer>
    </div>
  );
}

export default App;


