import React from 'react';
import DealProduct from './DealProduct';

const DealsOfTheDay = () => {
    return (
        <div className="deals-of-the-day mx-auto">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="deals-title">
                        <h1>Deals of the day</h1>
                    </div>
                </div>

                <DealProduct/>
            </div>
        </div>
    );
}

export default DealsOfTheDay;
