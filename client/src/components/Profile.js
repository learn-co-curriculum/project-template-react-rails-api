import React from 'react'
import picture from '../assets/profilepic.JPG'

function Profile() {


function handleClick(){
    alert('Profile Changes Saved!')
}




    return (
        <div class="container">
            <h1 className='profile-header'> Profile </h1>
            <div class="main-body">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src={picture} alt="Admin" class="rounded-circle p-1 bg-dark" width="110" />
                                    <div class="mt-3">
                                        <h4>Kelan Hamman</h4>
                                        <p class='card-font'> Music VIP </p>
                                        <p class='card-font'> Denver, Colorado </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="card">
                            <div class="card-body">
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0"> Username </h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value='' placeholder='Username' />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="text" class="form-control" value="" placeholder='DCL@gmail.com' />
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Password</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        <input type="password" class="form-control" value="" placeholder='Password' />
                                    </div>
                                </div>

                                   
                                <div class="row">
                                    <div class="col-sm-3"></div>
                                    <div class="col-sm-9 text-secondary">
                                        <input onClick={handleClick} type="button" class="button-color" value="Save Changes" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile