import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHomeComponent = () => {
    const navigator = useNavigate();

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 35px'
    };

    const buttonStyle = {
        width: '250px',
        height: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px'
    };

    const imageStyle = {
        width: '60%',
        height: 'auto'
    };

    const descriptionStyle = {
        margin: '0',
        fontSize: '25px',
        fontWeight: 'bold'
    };

    return (
        <div>
            <h2 className="text-center" style={{ marginTop: '35px' }}>Welcome, Admin!</h2>
            <div className="d-flex justify-content-center" style={{ marginTop: '35px' }}>
                <div style={buttonContainerStyle}>
                    <button className="btn btn-primary" style={buttonStyle} onClick={() => navigator('/users')}>
                        <img src="https://i.ibb.co/nshCjgq/33308.png" alt="Users" style={imageStyle} />
                    </button>
                    <p style={descriptionStyle}>Users</p>
                </div>
                <div style={buttonContainerStyle}>
                    <button className="btn btn-primary" style={buttonStyle} onClick={() => navigator('/jobs')}>
                        <img src="https://i.ibb.co/qCHRrv0/facebook-jobs-facebook-social-media-application-brand-job-icon-197314.png" alt="Jobs" style={imageStyle} />
                    </button>
                    <p style={descriptionStyle}>Jobs</p>
                </div>
                <div style={buttonContainerStyle}>
                    <button className="btn btn-primary" style={buttonStyle} onClick={() => navigator('/applications')}>
                        <img src="https://i.ibb.co/dbQcZFt/2833637.png" alt="Applications" style={imageStyle} />
                    </button>
                    <p style={descriptionStyle}>Applications</p>
                </div>
            </div>
        </div>
    );
}

export default AdminHomeComponent;
