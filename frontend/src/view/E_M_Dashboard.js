import React, { useState, useEffect } from 'react';
import Navbar from '../components/E_M_Navbar';
import '../css/modern.css';
import '../js/app.js';

//controllers
import {getAllEmployeesCount,getAllChefCount,getAllKetchenHCount,getAllWaitersCount,getAllReceptionistsCount,getAllOfficeSCount,getAllVehicleEmployeesCount,getAllContractBaseCount} from '../controllers/employee'


export default function E_M_Dashboard() {

	let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    
    let sysDate = year + "-" + month + "-" + date;

	const [allEmployeeCount , setAllEmployeeCount] = useState('');


	getAllEmployeesCount().then((result)=>{
		setAllEmployeeCount(result);
	});
	


    return (

        <div class="wrapper">

<Navbar/>

            <div class="main">

{/* top nav */}

                <main class="content">
                    <div class="container-fluid">

                        <div class="header">
                            <h1 class="header-title" >
                                Employee Manager Dashboard
                            </h1>

                        </div>
						<div class="row">
							
							<div class="col-md-6 col-lg-3 col-xl">

								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="col mt-0">
												<center><h5 class="card-title"> Date</h5></center>
											</div>

											<div class="col-auto">
												<div class="avatar">
													<div class="avatar-title rounded-circle bg-primary-dark">
														<i class="align-middle fas fa-fw fa-calendar-alt"></i>
													</div>
												</div>
											</div>
										</div>
										<center><h1 class="display-5 mt-1 mb-3 " >{sysDate}</h1></center>
									</div>
								</div>
							</div>

							
						</div>
						</div>
						
                        <div class="row">
						<div class="col-md-6 col-lg-3 col-mx-auto" style={{width:800  }}>
							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col mt-0">
											<h3 class="card-title">All Employee Count</h3>
										</div>

										<div class="col-auto">
											<div class="avatar">
												<div class="avatar-title rounded-circle bg-primary-white">

												<img src={require('../img/avatars/employee.png')}  alt="Angelica Ramos" width="220" height="120" style={{margin: '0 100px -70px 0'}}/>
												</div>
											</div>
										</div>
									</div>
									<h1 class="display-5 mt-1 mb-3">{allEmployeeCount}</h1>
								</div>
							</div>
						
					</div>

         
                    


                    </div>
                </main>



            </div>

        </div>


    )

}

