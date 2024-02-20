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

export default function C_M_Navbar() {
    return (
        <nav id="sidebar" class="sidebar">

<Link to='/' class="sidebar-brand">
  <img style={{ maxWidth: 100 }} src={require('../img/logo/logo.png')} />
  <span style={{ color: 'black', fontSize :31 ,fontWeight:'bold', fontFamily:'fantasy'}}>The KADE</span>
</Link>

<div class="sidebar-content">
    <div class="sidebar-user">
    <div style={{ display: 'flex', alignItems: 'center' }}>

  <Link to='/'>
  <br></br>

    <img src={require('../img/avatars/Fmanager.jpg')} class="img-fluid rounded-circle mb-2"  style={{width:"100px",height:'80px'}} />
  </Link>
  <span style={{ marginLeft: 'auto',fontWeight: 'bold',fontSize:20}}>Theshika Navod</span>
</div>


                    
     <small>----Food & Beverage Manager----</small>
    <br></br>
    <br></br>
                    
  </div>





                <ul class="sidebar-nav">
                    <li class="sidebar-item ">
                        <Link class="sidebar-link"to='/foodDashboard'>
                            <i class="align-middle me-2 fas fa-fw fa-home"></i> <span class="align-middle">Dashboards</span>
                        </Link>

                    </li>

                    <li class="sidebar-item ">
                        <a data-bs-target="#customer" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-coffee"></i> <span class="align-middle">Food and Beverages</span>
                        </a>
                        <ul id="customer" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li class="sidebar-item"><Link to='/foodItemList' class="sidebar-link" >Foods</Link></li>
                            <li class="sidebar-item"><Link to='/foodItemList' class="sidebar-link" >Beverages</Link></li>
                            <li class="sidebar-item"><Link to='/foodItemList' class="sidebar-link" >Deserts</Link></li>
                            <li class="sidebar-item"><Link to='/foodItemList' class="sidebar-link" >Fast Foods</Link></li>
                        </ul>
                    </li>

                    <li class="sidebar-item">
                        <a data-bs-target="#sim" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-hand-pointer"></i> <span class="align-middle">Make an order</span>
                        </a>
                        <ul id="sim" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li class="sidebar-item"><Link to='/roomSelect' class="sidebar-link" >Select Room</Link></li>
                            <li class="sidebar-item"><Link to='/foodSelect' class="sidebar-link" >Select Food</Link></li>
                        </ul>
                    </li>

                    <li class="sidebar-item">
                        <a data-bs-target="#package" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-cubes"></i> <span class="align-middle">Manage items</span>
                        </a>
                        <ul id="package" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                        <li class="sidebar-item"><Link to='/foodItemList' class="sidebar-link" >Food item list</Link></li>
                            <li class="sidebar-item"><Link to='/addNewItem' class="sidebar-link" >Add new item</Link></li>
                            
                        </ul>
                    </li>

                    <li class="sidebar-item ">
                        <Link class="sidebar-link" to='/foodPaymentReport'>
                            <i class="align-middle me-2 fas fa-fw fa fa-list"></i> <span class="align-middle">Report</span>
                        </Link>
                    </li>

                    <li class="sidebar-item ">
                        <Link class="sidebar-link" to='#' onClick={handleLogoutClick}>
                            <i class="align-middle me-2 fas fa-fw fa fa-user"></i> <span class="align-middle">Log Out</span>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}




