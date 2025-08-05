import React from 'react'

const HomeComponent = () => {
    return (
        <div className="container mt-5">
            <div className="col-md-8 mx-auto">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://i.ibb.co/25ZkXNt/about.jpg"
                                alt="About us"
                                className="img-fluid rounded-start"
                            />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-center">
                            <div className="card-body">
                                <h5 className="card-title">About Us</h5>
                                <p className="card-text">
                                    Welcome to Job Application Portal, your one-stop destination for job seekers and employers alike. We connect talented professionals with top companies and make it easy to manage applications all in one place
                                </p>
                                <a href="/about" className="btn btn-primary">Learn more</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://i.ibb.co/9wS42pT/search.jpg"
                                alt="About us"
                                className="img-fluid rounded-start"
                            />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-center">
                            <div className="card-body">
                                <h5 className="card-title">Search Jobs</h5>
                                <p className="card-text">
                                    Discover your next career move with our job search tool. Explore a variety of roles across industries, apply directly, and take the next step in your professional journey. Start searching now and find the opportunity that fits your skills and aspirations!
                                </p>
                                <a href="/search" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img
                                src="https://i.ibb.co/1vvSdMq/apply.jpg"
                                alt="About us"
                                className="img-fluid rounded-start"
                            />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-center">
                            <div className="card-body">
                                <h5 className="card-title">Apply for Jobs</h5>
                                <p className="card-text">
                                    Ready to take the next step? Our streamlined application process makes it easy to apply for jobs that match your skills and interests. Submit your application directly to top employers and get one step closer to your dream job!
                                </p>
                                <a href="/apply" className="btn btn-primary">Apply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent