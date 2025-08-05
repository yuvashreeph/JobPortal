import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeComponent = () => {
    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-6 p-0">
                    <div
                        style={{
                            height: '100vh',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            src="https://media.cnn.com/api/v1/images/stellar/prod/240117205958-online-job-hunting-stock-image-restricted.jpg"
                            alt="Job Portal Image"
                            style={{
                                height: '100%',
                                width: 'auto',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <h1 className="title">Job Portal</h1>
                        <Link to="/signup" className="btn btn-secondary btn-block mx-2 my-2">Sign Up</Link>
                        <Link to="/signin" className="btn btn-secondary btn-block mx-2">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeComponent;
