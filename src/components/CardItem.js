import React from 'react';
import UnorderList from './UnorderList';
import './App.css';
const CardItem = ({ listitem}) => {
    console.log(listitem);
    return (
        <div className="col mb-4 col-lg-4 col-sm-6 cardhover">
            <div className="card"  key={listitem.title} style={{width:'23rem', height:'auto'}}>
                <div className="card-title" style={{paddingTop:'20px'}}>
                    <img className="float-left" src={listitem.image.source} alt={listitem.title} width="70px" height="30px"></img>
                    <h5 key={listitem.title}>{listitem.title}</h5>
                </div>
                <div className="card-body" style={{height:'300px'}}>
                    <p className="card-text">
                        {listitem.body}
                    </p>
                    <UnorderList listitem={listitem}></UnorderList>
                </div>
            </div>
        </div>
    );
}
export default CardItem;