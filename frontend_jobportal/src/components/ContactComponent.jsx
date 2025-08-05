import React from 'react';

const ContactComponent = () => {
    return (
        <div className="container">
            <h2 className="text-center my-4">Contact Us</h2>
            <div className="row">
                <div className="col-md-4 d-flex">
                    <div className="card mb-3 flex-fill">
                        <img
                            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZW1haWx8fHx8fHwxNzE1MzMzMTI5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500"
                            className="card-img-top"
                            alt="Mail us"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Mail us</h5>
                            <p className="card-text">
                                Feel free to reach out to us regarding your queries through our official e-mail ID:
                                <a href="mailto:jobportal_official@gmail.com"> jobportal_official@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex">
                    <div className="card mb-3 flex-fill">
                        <img
                            src="https://images.unsplash.com/photo-1498230870289-7561110a6e69?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVsZXBob25lfHx8fHx8MTcxNTMzMzIxNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500"
                            className="card-img-top"
                            alt="Call us"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Call us</h5>
                            <p className="card-text">
                                Contact us regarding your queries through our toll-free number:
                                <a href="tel:+9112345678908"> +91 1234-567-8908</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex">
                    <div className="card mb-3 flex-fill">
                        <img
                            src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8bGV0dGVyfHx8fHx8MTcxNTMzMzE3NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1500"
                            className="card-img-top"
                            alt="Office address"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Office address</h5>
                            <p className="card-text">
                                Job Portal Headquarters,
                                <br />Navalur,
                                <br />Chennai - 600 025
                                <br />
                                <a
                                    href="https://www.google.com/maps/place/HCL+Technologies+Ltd/@12.8397157,80.1750236,13.94z/data=!4m10!1m2!2m1!1sHCL+Technologies!3m6!1s0x3a525a53ab753daf:0xd579506d88391062!8m2!3d12.8507336!4d80.2237347!15sChBIQ0wgVGVjaG5vbG9naWVzIgOIAQGSARBzb2Z0d2FyZV9jb21wYW554AEA!16s%2Fg%2F1tgh5_3t?authuser=0&entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Job Portal Headquarters
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
