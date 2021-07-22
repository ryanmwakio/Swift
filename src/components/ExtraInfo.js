import React from 'react';

const ExtraInfo = () => {
    return (
        <div className="extra-info mx-auto">
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-4 extra-info-col">
                        <div>
                            <h3>14500</h3>
                            <div className="extra-info-block my-2"></div>
                            <p className="extra-info-text">available products</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 extra-info-col my-2">
                        <div>
                            <h3>140</h3>
                            <div className="extra-info-block"></div>
                            <p className="extra-info-text">site members</p>
                        </div>
                    </div>

                     <div className="col-sm-12 col-md-4 extra-info-col my-2">
                        <div>
                            <h3>75%</h3>
                            <div className="extra-info-block"></div>
                            <p className="extra-info-text">clients come back</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ExtraInfo;
