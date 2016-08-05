import React from 'react';
//import { Link } from 'react-router';

const App = (props) => {
    return (
        <div className="content container">
            <div className="row">
                <div className="col-md-offset-3 col-md-6">
                    <div className="header">
                        <h1>Vninfo</h1>
                    </div>

                    {props.children}

                    <div className="footer">
                        Footer
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App;
