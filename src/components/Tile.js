import React from 'react';

function Tile( {image, title, children} ) {

    return image !== undefined ?
        (
            <section>
                <img src={image} alt=""/>
            </section>
        ):(
            <section>
                <h2>{title}</h2>
                {children}
            </section>
        )
}

export default Tile;