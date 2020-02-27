import React from 'react';
import {  BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import CardList from './CardList';
class Home extends React.Component{
    state = { isLoading: true, listItems : []};
    fetchItems = async() => {
        const data = await fetch(
            'https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20200109065713/payloads/external-api-list.json'
        );
       const items = await data.json();
       setTimeout(
        this.setState({ 
            listItems : items,
            isLoading : false
        }), 1000);
    }
    componentDidMount()
    {
        this.fetchItems();
    }
    render() {
        if(this.state.isLoading){
            return <div>Loading...</div>
        }

        return (
            <Router>
            <div className="div-body">
                   <div className="div-header">
                        <div className="container"><h1 className="div-h1tag">Documentation</h1></div>
                    </div>
                    <div className="container"><div className="row"><div className="div-title">
                        <h2 className='h2-title'>APIs Services</h2>
                        <p>Access information on how to use Forge APIs and Services</p>
                        <CardList listItems = {this.state.listItems}></CardList>
                    </div></div></div>
            </div>
            </Router>  
        );
    }
}
export default Home;