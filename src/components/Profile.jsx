import React from 'react'
import './Profile.css'
// import {useState} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { pink, blue } from '@mui/material/colors';

import {Link} from "react-router-dom";


function Profile() {

    // const [isCalci, setCalci] = useState(false);

  return (
    <React.Fragment>

        <Link to = {'/calculator'}>
            <button className='calciButton'>Go to Calculator</button>
        </Link>
       
        <Link to = {'/cartoon'}>
            <button className='ApiButton'>Go to Ricky and Morky</button>
        </Link>

        <table id = "maintable" align="center">
        <tr>
            <td id="personal">
                <img src="https://images.unsplash.com/photo-1544179559-032b931c661e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" title="Myself" height="200px" width="200px" alt="My_Profile"/>
                <h1><u>Personal Details</u></h1>

                <p>
                    <b>Name:</b><br/>
                    Kousik Raj Kabilan<br/><br/>
                    
                    <b>DOB:</b><br/>
                    13-03-2003<br/><br/>
                    
                    <b>Address:</b>
                    <address>
                    No:4/33,vellalar street,<br/>
                    Thandalam,<br/>
                    Chennai-600122.<br/><br/>
                    </address>

                    <b>Phone No:</b><br/>
                    +91 7358647660<br/><br/>

                    <b>Email Address:</b><br/>
                    <a href="mailto:rajkousik20@gmail.com">rajkousik20@gmail.com</a><br/><br/>
                </p>

                <h2><u>INTEREST</u></h2>
                    <ul>
                        <li>Sports</li>
                        <li>Cooking</li>
                        <li>Reading</li>
                    </ul>

                <h2><u>SOCIAL MEDIA</u></h2>
                
                <div className = "media">
                    <a href="https://www.facebook.com"><FacebookIcon sx = {{ fontSize :50,color:blue[900]}}/></a>

                    <a href="https://twitter.com"><InstagramIcon sx = {{ fontSize :50,color:pink[500]}}/></a>
                
                    <a href="https://instagram.com"><TwitterIcon sx = {{ fontSize :50,color:blue[500]}}/></a><br/>
                </div>

                <h3><b>-rajkousik03</b></h3>
                
            </td>
            <td id = "education">
                <h1>KOUSIK RAJ</h1><hr/>

                <h2><u>Career Objective</u></h2>
                <p><b>To suceed in an environment of growth and excellence and earn a job which provides me job satisfication and self development and help me achieve personal as well as organization goals.</b></p><br/>
                
                <h2><u>ACADEMIC QUALIFICATION</u></h2>
                <table border="5" id = "qualification">
                    <tr>
                        <th>QUALIFICATION</th>
                        <th>UNIVERSITY</th>
                        <th>YEAR OF PASSING</th>
                        <th>PERCENTAGE</th>
                    </tr>

                    <tr>
                        <td>BE-CSE</td>
                        <td><a href="https://www.saveetha.ac.in">SAVEETHA ENGINEERING COLLEGE</a></td>
                        <td>2024</td>
                        <td>95%</td>
                    </tr>

                    <tr>
                        <td>12<sup>th</sup></td>
                        <td>St.John's MHSS</td>
                        <td>2020</td>
                        <td>91.5%</td>
                    </tr>

                    <tr>
                        <td>10<sup>th</sup></td>
                        <td>St.John's MHSS</td>
                        <td>2018</td>
                        <td>95.6%</td>
                    </tr>
                </table>
                
                <br/><br/>

                <h2><u>STRENGTHS</u></h2>
                <ul className="list">
                    <b>
                        <li className = "li">Good Communication skills</li>
                        <li className = "li">Focused and Confident with Positive Attitude</li>
                        <li className = "li">Good Team Player</li>
                        <li>Self Motivated</li>
                    </b>
                </ul><br/>
                
                <h2><u>LANGUAGES</u></h2>
                <p>
                    <ul className="list">
                        <li className = "li"><b>ENGLISH</b> - Excellent Fluency</li>
                        <li className = "li"><b>TAMIL</b> - Native Speaker</li>
                        <li ><b>FRENCH</b> - Working Knowledge</li>
                    </ul>
                </p><br/>

                <h2><u>ACHIEVEMENTS</u></h2>
                <ul className="list">
                    <b>
                        <li className = "li">Medal in English Proficiency</li>
                        <li className = "li">Medal in Athletics</li>
                        <li>Discipline Awards</li>
                    </b>
                </ul><br/>
            </td> 
        </tr>
    </table>

    </React.Fragment>
  )
}

export default Profile