import React from 'react';
import { Link } from 'react-router-dom';
import './studentOverview.css';

const StudentOverview = () => {
  return (
    <div>
        <div class="container my-5">
        <div class="row">
            <div class="col-md-3">
                <div class="sidebar">
                    <div class="profile-info mb-4">
                        <img src="https://via.placeholder.com/80" alt="Profile" class="rounded-circle mb-2"></img>
                        <h5>User Points</h5>
                        <p>0.00</p>
                    </div>
                    <div>
                        <p><i class="fas fa-th-large"></i> Dashboard</p>
                        <p><i class="fas fa-book"></i> My Courses</p>
                        <p><i class="fas fa-check-square"></i> Completed Courses</p>
                        <p><i class="fas fa-user"></i> Profile</p>
                    </div>
                </div>
            </div>

            <div class="col-md-9">
                <div class="row text-center mb-4">
                    <div class="col-md-4" >
                        <div class="p-3 border rounded">
                            <h5>Enrolled Courses</h5>
                            <h3>3</h3>
                            <button class="btn btn-view">View All</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 border rounded">
                            <h5>Completed Courses</h5>
                            <h3>1</h3>
                            <button class="btn btn-view">View All</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 border rounded">
                            <h5>Ongoing Courses</h5>
                            <h3>2</h3>
                            <button class="btn btn-view">View All</button>
                        </div>
                    </div>
                </div>

                <h4>You have completed 1 course!</h4>
                <div class="row">
                    <div class="col-md-4 mb-4">
                    <div class="card w-100">
                        <img src="https://cdn.ghoorilearning.com/uploads//learning/images/20221213145904-63983ed8940b0.jpeg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Quran Shikkha</h5>
                            <p>170 mins</p>
                            <div class="progress mb-2">
                                <div class="progress-bar" role="progressbar"  aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">18% completed</div>
                                </div>
                                <button class="btn btn-outline-dark btn-block">Continue</button>
                                </div>
                                </div>
                            </div>

                    

                            <div class="col-md-4 mb-4">
                    <div class="card w-100">
                        <img src="https://cdn.ghoorilearning.com/uploads//learning/images/20221213145904-63983ed8940b0.jpeg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Quran Shikkha</h5>
                            <p>170 mins</p>
                            <div class="progress mb-2">
                                <div class="progress-bar" role="progressbar"  aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">18% completed</div>
                                </div>
                                <button class="btn btn-outline-dark btn-block">Continue</button>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4">
                    <div class="card w-100">
                        <img src="https://cdn.ghoorilearning.com/uploads//learning/images/20221213145904-63983ed8940b0.jpeg" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                            <h5 class="card-title">Quran Shikkha</h5>
                            <p>170 mins</p>
                            <div class="progress mb-2">
                                <div class="progress-bar" role="progressbar"  aria-valuenow="18" aria-valuemin="0" aria-valuemax="100">18% completed</div>
                                </div>
                                <button class="btn btn-outline-dark btn-block">Continue</button>
                                </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
};

export default StudentOverview;
