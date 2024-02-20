import React, { useState, useEffect } from 'react';
import Navbar from '../components/C_M_Navbar';
import '../css/modern.css';
import '../js/app.js';

// Controllers
import { getAllAppointmentsCount, getAllPendingCount, getAllActiveCount, getAllDoneCount, getAllCancelCount } from '../controllers/appointment';
import { getAllCustomersCount } from '../controllers/customer';

export default function C_M_Dashboard() {

	let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    
    let sysDate = year + "-" + month + "-" + date;

	const [allAppointmentsCount, setAllAppointmentsCount] = useState('');
	const [allPendingCount, setAllPendingCount] = useState('');
	const [allActiveCount, setAllActiveCount] = useState('');
	const [allDoneCount, setAllDoneCount] = useState('');
	const [allCancelCount, setAllCancelCount] = useState('');
	const [allCustomersCount, setAllCustomersCount] = useState('');

 
	getAllAppointmentsCount().then((result)=>{
		setAllAppointmentsCount(result);
	 });
	 getAllPendingCount().then((result)=>{
		setAllPendingCount(result);
	 });
	 getAllActiveCount().then((result)=>{
		setAllActiveCount(result);
	 });
	 getAllDoneCount().then((result)=>{
		setAllDoneCount(result);
	 });
	 getAllCancelCount().then((result)=>{
		setAllCancelCount(result);
	 });
	 getAllCustomersCount().then((result)=>{
		setAllCustomersCount(result);
	 });
	 getAllDoneCount().then((result)=>{
		setAllDoneCount(result);
	 });

	return (

		<div class="wrapper">

			<Navbar />

			<div class="main">

				{/* top nav */}

				<main class="content">
					<div class="container-fluid">

						<div class="header">
							<h1 class="header-title">
								Analytics Overview
							</h1>

						</div>

						<div class="row">
						<div class="col-md-6 col-lg-3 col-xl">

							<div class="card">
								<div class="card-body">
									<div class="row">
										<div class="col mt-0">
											<h5 class="card-title"> Date</h5>
										</div>

										<div class="col-auto">
											<div class="avatar">
												<div class="avatar-title rounded-circle bg-primary-dark">
													<i class="align-middle fas fa-fw fa-calendar-alt"></i>
												</div>
											</div>
										</div>
									</div>
									<h1 class="display-5 mt-1 mb-3 " >{sysDate}</h1>
								</div>
							</div>
							</div>



							<div class="row">

							<div class="col-md-6 col-lg-3 col-xl">
								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="col mt-0">
												<h5 class="card-title">Customers</h5>
											</div>

											<div class="col-auto">
												<div class="avatar">
													<div class="avatar-title rounded-circle bg-primary-white">
													<img src={require('../img/avatars/customer.png')}  alt="Angelica Ramos" width="220" height="120" style={{margin: '0 100px -70px 0'}}/>
													<i class="align-middle fas fa-fw fa-users"></i>
													</div>
												</div>
											</div>
										</div>
										<h1 class="display-5 mt-1 mb-3">{allCustomersCount}</h1>
									</div>
								</div>
							</div>
							<div class="col-md-6 col-lg-3 col-xl">
								<div class="card">
									<div class="card-body">
										<div class="row">
											<div class="col mt-0">
												<h5 class="card-title">All Appointment</h5>
											</div>

											<div class="col-auto">
												<div class="avatar">
													<div class="avatar-title rounded-circle bg-primary-white">
													<img src={require('../img/avatars/appoiment.png')}  alt="Angelica Ramos" width="220" height="120" style={{margin: '0 100px -70px 0'}}/>
														<i class="align-middle fas fa-fw fa-bookmark"></i>
													</div>
												</div>
											</div>
										</div>
										<h1 class="display-5 mt-1 mb-3">{allAppointmentsCount}</h1>
									</div>
								</div>
							</div>
							</div>
						
							


						
							
							
						</div>












					</div>
				</main>



			</div>

		</div>


	)

}

