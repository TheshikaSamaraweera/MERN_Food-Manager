import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function handleLogoutClick(event) {
  event.preventDefault();
  
  // Show a confirmation dialog using SweetAlert2
  Swal.fire({
    title: 'Are you sure?',
    text: "You will be permanently removed from this page!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, Do it!'
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.removeItem('token');
      window.location.href = '/';
    }
  });
}






export default function E_M_Navbar() {
    return (
        <nav id="sidebar" class="sidebar" >

<Link to='/' class="sidebar-brand">
  <img style={{ maxWidth: 100 }} src={require('../img/logo/logo.png')} />
  <span style={{ color: 'black', fontSize :31 ,fontWeight:'bold', fontFamily:'fantasy'}}>The KADE</span>
</Link>

<div class="sidebar-content">
    <div class="sidebar-user">
    <div style={{ display: 'flex', alignItems: 'center' }}>

  <Link to='/'>
  <br></br>

    <img src={require('../img/avatars/EManager.jpg')} class="img-fluid rounded-circle mb-2" style={{width:"100px",height:'80px'}}  />
  </Link>
  <span style={{ marginLeft: 'auto',fontWeight: 'bold',fontSize:20}}>Theshika Navod</span>
</div>
                    <small style={{ color:"black" }}>----General Manager----</small>
                    <br></br>
                    <br></br>
                    
                </div>




        {/* sidebar menu buttons */}
        <ul class="sidebar-nav">
  <li class="sidebar-item">
    <Link class="sidebar-link" to='/employeeDashboard'>
      <i className="align-middle me-2 fas fa-fw fa-home" style={{ color: 'black' }}></i> <span className="align-middle">Dashboard</span>
    </Link>
  </li>

  <li class="sidebar-item">
    <Link class="sidebar-link" to='/registration'>
      <i className="align-middle me-2 fas fa-fw fa-user-plus" style={{ color: 'black' }}></i> <span className="align-middle">Registration</span>
    </Link>
  </li>

  <li class="sidebar-item">
    <Link class="sidebar-link" to='/manageEmployee'>
      <i className="align-middle me-2 fas fa-fw fa-users" style={{ color: 'black' }}></i> <span className="align-middle">Manage Employee</span>
    </Link>
  </li>

 
  <li class="sidebar-item">
    <Link class="sidebar-link" to='/employeeReport'>
      <i className="align-middle me-2 fas fa fa-credit-card" style={{ color: 'black' }}></i> <span className="align-middle">Report</span>
    </Link>
  </li>

  <li className="sidebar-item">
  <Link className="sidebar-link" to='#' onClick={handleLogoutClick}>
    <i className="align-middle me-2 fas fa-fw fa-home" style={{ color: 'black' }}></i> <span className="align-middle">Logout</span>
  </Link>
</li>
</ul>

            </div>
        </nav>
    )
}




