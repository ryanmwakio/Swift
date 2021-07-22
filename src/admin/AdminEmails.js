import React from 'react';
import LeftNavLinks from './LeftNavLinks'

const AdminEmails = () => {
    return (
        <div className="admin mx-auto">
        <div className="row">


            <div className="col-3">
                <div className="left-panel">
                    <ul className="list-unstyled vert-nav">
                        <div>
                            <LeftNavLinks/>
                        </div>
                    </ul>
                </div>
            </div>


         <div className="col-9">
            <div className="right-panel">
                <h1>Emails</h1>
            </div>
        </div>


        </div>
    </div>
    );
}

export default AdminEmails;
