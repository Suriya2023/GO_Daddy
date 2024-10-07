import React from 'react'
import logo from './Imgaes/logo.png'
import Navbars from './Navbars';
import Navbar2 from './Navbar2';
import Navbar3 from './Navbar3';
import Navbar4 from './Navbar4';

function Header() {
    

    // function Domains() {
    //     // style.display = block
    //     if (document.getElementById('OnclickNav').style.tw-display == none) {
    //         document.getElementById('OnclickNav').style.tw-display = block;
    //     } else {
    //         document.getElementById('OnclickNav').style.tw-display = none
    //     }

    // }


    let Domains = () => {
        if (document.getElementById('OnclickNav').style.display == "block") {

            document.getElementById('OnclickNav').style.display = "none"
            document.getElementById("OnclickNav").style.position = "absolute"

        } else {
            document.getElementById('OnclickNav').style.display = "block"
            document.getElementById("OnclickNav").style.position = "absolute"
            document.getElementById("hosting").style.display = "none";
            document.getElementById("security").style.display = "none";

            document.getElementById("marketing").style.display = "none"



        }
    }
    const Hosting = () => {
        if (document.getElementById("hosting").style.display == 'block') {
            document.getElementById("hosting").style.position = "absolute"

            document.getElementById("hosting").style.display = "none";

        } else {
            document.getElementById("hosting").style.display = "block";
            document.getElementById("hosting").style.position = "absolute"
            document.getElementById("security").style.display = "none";
            document.getElementById("marketing").style.display = "none";

            document.getElementById('OnclickNav').style.display = "none"



        }
    }
    let Security = () => {
        if (document.getElementById("security").style.display == "block") {
            document.getElementById("security").style.display = "none";
            document.getElementById("security").style.position = "absolute"


        } else {
            document.getElementById("security").style.display = "block";
            document.getElementById('OnclickNav').style.display = "none"
            document.getElementById("hosting").style.display = "none";


            document.getElementById("security").style.position = "absolute"
            document.getElementById("marketing").style.display = "none"



        }
    }
    let Marketing = () => {
        if (document.getElementById("marketing").style.display == "block") {
            document.getElementById("marketing").style.display = "none"
            document.getElementById("marketing").style.position = "absolute"


        } else {
            document.getElementById("marketing").style.display = "block"
            document.getElementById("marketing").style.position = "absolute"
            document.getElementById("hosting").style.display = "none";

            document.getElementById("security").style.display = "none";
            document.getElementById('OnclickNav').style.display = "none"




        }
    }
    // function Domains(){
    //     if (document.getElementsByTagName(Navbars).style.display == "block") {
    //         document.getElementsByTagName(Navbars).style.display = 'none';

    //     } else {
    //         document.getElementsByTagName(Navbars).style.display = 'block';


    //     }
    // }
    let setProgress = () =>{
        console.log("Clicked")
    }



    return (
        <>
            <div className='main_bg_black'>
                <nav className="navbar navbar-expand-lg tw-text-white  " id='bgcolor'>
                    <div className="container-fluid tw-text-white">
                        <a className="navbar-brand" id='logo' href="/">

                            <img src={logo} alt="" />
                        </a>



                        {/* <button  className="navbar-toggler tw-text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <button props='setProgress'>
                            Click me
                        </button>


                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <li className="nav-item  ">
                                    <a className="nav-link  tw-text-white
                             active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white   " aria-disabled="true"
                                        onClick={Domains}

                                    >Domains <i id='Sd_flex' className="fa-solid    tw-border-x-neutral-400 fa-angle-down active:tw-text-black"></i></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link tw-text-white
                             active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white  " onClick={Hosting} aria-disabled="true">Websites And Hosting <i id='Sd_flex' className="fa-solid    tw-border-x-neutral-400 fa-angle-down active:tw-text-black"></i></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tw-text-white
                             active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white" aria-disabled="true">Email</a>
                                </li>


                                <li className="nav-item">
                                    <a className="nav-link tw-text-white
                             active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white " onClick={Security} aria-disabled="true">Security <i id='Sd_flex' className="fa-solid    tw-border-x-neutral-400 fa-angle-down active:tw-text-black"></i></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link tw-text-white
                             active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white" onClick={Marketing} aria-disabled="true">Marketing <i id='Sd_flex' className="fa-solid    tw-border-x-neutral-400 fa-angle-down active:tw-text-black"></i></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link tw-text-white
                             active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white " aria-disabled="true">princing</a>
                                </li>

                            </ul>
                            <form className="d-flex" role="search">
                                <ul className='tw-flex'>
                                    <li id='Sd_flex' className=' tw-p-2 active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white'>Contact Us</li>&nbsp;&nbsp;&nbsp;

                                    <li id='Sd_flex' className=' tw-p-2 active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white'>Help</li>&nbsp;&nbsp;&nbsp;
                                    <li id='Sd_flex' className=' tw-p-2 active:tw-bg-white active:tw-text-black tw-rounded       hover:tw-bg-gray-400       hover:tw-text-white'>Sing In <i id='Sd_flex' className="fa-solid    tw-border-x-neutral-400 fa-angle-down active:tw-text-black"> </i> </li>&nbsp;&nbsp;&nbsp;
                                    <li className=' tw-p-2 '><i className="fa-solid fa-cart-shopping"></i></li>&nbsp;&nbsp;&nbsp;
                                </ul>
                                {/* <button className="btn btn-outline-success tw-text-white" type="submit">Search</button> */}
                            </form>
                        </div>
                    </div>
                </nav >



            </div >

            <Navbars />
            <Navbar2 Name="Website Builder" Fname="online Store" Sname="All Website Options" Tname="Web Hosting" Foname="WordPress Hosting" Finame="VPS Hosting" Siname="Tools for Web Professionals" ti="WEBSITE" tit="HOSTING" tite="GODADDY PRO" />


            <Navbar3 ffname="SSL Certificates" ssname="Managed SSL Certificate" ttname="Complete Website Security" fooname="All Web Security Options" title="SSL Certificates" titleo="Web Security" />

            <Navbar4 fname="Digital Marketing" sname="Content & Photo Creator" tname="Logo Maker" titel="Communication Tools" title2="Content Creation Tools" />

        </>


    )
}

export default Header
