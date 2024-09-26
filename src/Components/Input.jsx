import React from 'react'

function Input() {



  let HoideAndshaow = () => {
    // let input = document.getElementById("input");
    document.getElementById('s33').style.border = "2px solid black"
    document.getElementById('hide').style.transition = "all 2s"



    if (document.getElementById('hide').style.display === "block") {
    document.getElementById('hide').style.display = "none"   
    }
    
    else {
    document.getElementById('hide').style.display = "none"
    }
      console.log('Hello, world!')
  }




  return (
    <div className='hellow tw-w-screen'>
      <br />
      <div className='tw-w-screen tw-d-flex '>
        <div>
          {/* <div type="text" className='tw-shadow-lg  tw-align-middle tw-justify-center  tw-text-left tw-pl-5 tw-p-5 ' id='placholders' placeholder='Type The Domain You want ' />
          <button>btn</button> */}
          <div className="conatiner tw-pl-5 tw-pr-5  ">
            <div className="roqw tw-rounded-md">

              <div className="s1">


                <div onClick={HoideAndshaow} id='s33' className="s2">
                  {/* <input type="text" placeholder='Type The domains Do you Want' className='tw-outline-none' name="hellow" id="s4" /> */}
                  <div className='io tw-text-gray-500  '>



                    <span id='hide'>  <i className="fa-solid fa-magnifying-glass"></i>
                      &nbsp; </span> Type The domains Do you Want
                  </div>





                  <button className='tw-bg-black tw-text-white tw-h-11 tw-pl-3 tw-pr-3 tw-rounded' id='block'> Search Domains</button>
                  <button className='tw-bg-black tw-text-white tw-h-11 tw-pl-3 tw-pr-3 tw-rounded' id='none'> <i className="fa-solid fa-magnifying-glass"></i></button>
                </div>

                <span id='and'>  &nbsp;&nbsp;&nbsp;</span>


                <div className="s3">

                  <div id="flex">

                    <div className="s4 ">
                      .shope
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;


                    <div className="s5">
                      ₹125.21*/1st yr. <br />
                      <a href="/" className='tw-text-slate-400 tw-text-xs tw-text-black' >     Satisfy  the world' buyers with .shop</a>
                    </div>


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

export default Input
