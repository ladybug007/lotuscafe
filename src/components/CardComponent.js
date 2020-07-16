import React from 'react';




export default function Card(props) {
    const cards = props.cards.map(card => {
        return (<div className='col col-sm-4'>
            <div className='cube'>
                <h5><strong>{card.title}</strong></h5>
                <img className='img-cube' src={card.src} alt={card.alt} />
                <p>{card.description}</p>
            </div>
        </div>);
    })

    return (
        <div>
            <div className='title'>
                <h2><strong>Lotus Cowork Cafe</strong></h2>
                <hr />
                <h4>A casual, comfortable and convenient coworking space with the benefit of a cafe and a colloborative
                community
            </h4>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    {cards}

                </div>
            </div>
        </div>



    );
}

