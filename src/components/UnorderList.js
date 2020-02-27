import React from 'react';
import './App.css';
const UnorderList = ({ listitem }) => {
    return (
        <ul className="list-group list-group-flush">
                { listitem.documentation.coverURL.length > 0 &&
                    <li className="list-group-item cardfooter" >
                        <a href ="/intro" style={{color:'#666'}}>Intro
                        </a>
                    </li>
                }
                {
                    listitem.documentation.guideURL.length > 0 && 
                    <li className="list-group-item cardfooter">
                        <a href ="/guide"  style={{color:'#666'}}>Developer's guide</a>
                    </li>
                }
                {
                    listitem.documentation.referenceURL.length > 0 && 
                    <li className="list-group-item cardfooter">
                        <a href={listitem.documentation.referenceURL} style={{color:'#666'}}>API reference</a>
                    </li>
                }
        </ul>
    )
}
export default UnorderList;