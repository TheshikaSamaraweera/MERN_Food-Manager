import React, { useState, useEffect } from 'react';
import Navbar from '../components/C_M_Navbar';
import swal from 'sweetalert';
import Select from "react-select";
import { reactBaseURL } from '../config';

//css
import '../css/modern.css';

//js
import '../js/app.js';

// Controllers
import { logIn } from '../controllers/employee';


export default function Login() {

    const employeeType = [
        { value: "cm", label: "Customer Manager" },
        { value: "em", label: "Employee Manager" },
       
        { value: "fm", label: "Food Manager" },
    ];

    const [selectedType, setSelectedType] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function login() {

        if (selectedType === '' && email === '' && password === '') {
            swal("All field is empty..");
        } else if (email === '') {
            swal("Email field is empty");
        } else if (!validateEmail(email)) {
            swal("Enter a valid email");
        } else if (password === '') {
            swal("Password field is empty");
        } else if (selectedType === '') {
            swal("Select the employee type");
        } else{
            logIn({ Type: selectedType.value, email: email, password: password}).then((result) => {
                if (result.status) {
                    swal({
                        title: "Success!",
                        text: "Login Successfully",
                        icon: 'success',
                        timer: 2000,
                        button: false,
                    });
                    if(result.details.Type==="em"){
                        setTimeout(() => {
                            window.location.replace(reactBaseURL + "/employeeDashboard");
                        }, 2000)
                    }else if(result.details.Type==="fm"){
                        setTimeout(() => {
                            window.location.replace(reactBaseURL + "/foodDashboard");
                        }, 2000)
                    
                    }else{
                        setTimeout(() => {
                            window.location.replace(reactBaseURL + "/customerDashboard");
                        }, 2000)
                    }
                    
                }else{
                    swal({
                        title: "Error!",
                        text: "Incorect Credential",
                        icon: 'error',
                        timer: 2000,
                        button: false
                    });
                }

            });
        }
    }

    return (

        <body class="theme-blue"  >
        <main class="background" >
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div class="d-table-cell align-middle" >
                            <div class="card" style={{ marginTop: 150 ,borderColor:'rgba(23, 20, 6, 0)',borderRadius: '20px 20px 20px 20px ',borderColor:'rgba(23, 20, 6, 0)',width : '800px'}}>

                            <div class="card" style={{  backgroundColor: 'rgba(23, 20, 6, 0.85)',opacity:95, padding: 20, borderRadius: '20px 20px 0px 0px ', alignItems: 'center', marginBottom: -1, height:200 ,widows :400 }} >
                            <img style={{ position: 'absolute', top: 0, right: 0, height: 300 }} src={require('../img/photos/Removal399.png')} />
                            <label class="title" style={{color:'rgba(255, 218, 67)',fontWeight:'bolder',fontFamily:'Luckiest Guy',marginRight:"430px",marginBottom:"-15px",fontSize:60}}>The</label>
                            <label class="title" style={{color:'rgba(255, 218, 67)',fontWeight:'bolder',fontFamily:'Luckiest Guy',marginRight:"500px",marginTop:"-10px",fontSize:70}}>KADE</label>

                                </div>
                                <div class="card-body" style={{ backgroundColor: 'rgba(255, 218, 67, 0.90)',marginTop:"0px",borderRadius: '0px 0px 20px 20px ',border:'#000',}}>
                                <div class="m-sm-4">
                                <div class="mb-3" style={{ width:'400px'}}>
                                    
                                                <label >Employee Type</label>
                                                <Select class="form-control form-control-lg" options={employeeType} onChange={setSelectedType} />
                                            </div>
                                            <div class="mb-3">
                                                <label>Email</label>
                                                <input class="form-control " type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width:'400px'}}/>
                                            </div>
                                            <div class="mb-3">
                                                <label>Password</label>
                                                <input class="form-control " type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width:'400px'}} />
                                            </div>

                                            <div class="text-center mt-3">
                                                <button type="submit" class="btn  btn-primary" id="addCustomer" style={{ backgroundColor: 'rgba(23, 20, 6, 0.85)', borderColor: '#081E3D', color: '#fff' }} onClick={() => login()} >Sign in</button>
                                            </div>
                             
                                    
                                </div>
                                </div>    
                            
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>



    </body>

    )

}

