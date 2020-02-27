import React from 'react';
import './App.css';
import CardItem from './CardItem';
const CardList = ({listItems}) => {
    const renderList = listItems.map((listitem) => {
        return <CardItem key={listitem.title} listitem={listitem}></CardItem>;
    })
    return  (
        <div className="row row-cols-1 row-cols-md-3">{renderList}</div>
    );
}
export default CardList;