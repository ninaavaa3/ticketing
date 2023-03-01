import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import App from './App';
import Ticket from './Component/pages/DomesticTicket/mainpage/Ticket';
import DomesticFlightPassengersPage from './Component/pages/DomesticTicket/mainpage/DomesticFlightPassengersPage';
import DomesticFlightConfirmPage from './Component/pages/DomesticTicket/mainpage/DomesticFlightConfirmPage';



class Router extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route path="flight" element={<Ticket />} />
                    <Route exact path="/flight/passengers" element={<DomesticFlightPassengersPage />} />
                    <Route path='/flight/confirm' element={<DomesticFlightConfirmPage/>}/>
                </Routes>
            </div>
        )
    }
}

export default Router;