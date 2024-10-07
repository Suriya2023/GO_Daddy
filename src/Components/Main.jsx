import React from 'react'
import Articals from './Articals';
import Articals2 from './Articals2';

function Main() {

    let hideandshow = () =>{
        if(document.getElementById('donmainhide').style.display === 'none'){
            document.getElementById('donmainhide').style.display = 'block';

            document.getElementById('donmainhidetwo').style.display = 'none';


        }
        else{
            document.getElementById('donmainhide').style.display = 'none';
        }
    }

    let hideandshow2 = () =>{
        if(document.getElementById('donmainhidetwo').style.display === 'none'){
            document.getElementById('donmainhidetwo').style.display = 'block';
            document.getElementById('donmainhide').style.display = 'none';

            

        }
        else{
            document.getElementById('donmainhidetwo').style.display = 'none';
        }
    }
    return (
        <div>


            <div className="tw-bg-white ">
                <div id='side' className="tw-container tw-rounded-sm tw-justify-around tw-mx-auto tw-flex  tw-p-4 main-container">
                    <div className="mybgimg tw-rounded-md">
                        {/* <!-- Left Section --> */}
                        <div className="md:tw-w-2/4 left-section tw-p-8">
                            <div className="tw-mb-4 tw-bg-teal-200 tw-w-fit tw-text-black tw-text-xs tw-p-1 tw-rounded-md ">NEW</div>
                            <div className="tw-mb-2 tw-text-gray-700 " id='aisuggestion'>AI Suggested Domains</div>
                            <h1 id='fontfmll' className="tw-text-4xl tw-font-extrabold tw-text-gray-900">
                                Find the perfect domain and business name with AI.
                            </h1>

                            <button className="tw-mt-10 tw-bg-black tw-text-white tw-py-3 tw-px-6 tw-rounded-sm">Try AI Domain Search</button>
                            <br /><br /><br /><br />
                        </div>

                        {/* <!-- Center Image --> */}

                    </div>

                    <br />

                    {/* <!-- Right Section --> */}
                    <div className="tw-flex tw-rounded-md tw-flex-col tw-p-8 right-section">
                        <br />
                        <h2 className="tw-text-sm tw-text-center tw-font-bold tw-text-gray-900">Websites + Marketing</h2>
                        <p id='fontfml' className="tw-mt-4 tw-text-2xl tw-text-center tw-font-bold">Create your free website.</p>
                        <button className="tw-mt-4 tw-bg-black tw-text-white tw-py-3 tw-px-6 tw-rounded-sm">Start for Free</button>
                        <div id='kaka' className="text-center">
                            <p className='tw-mt-4  '>Learn More</p>
                            <p className="tw-mt-4  tw-text-xs tw-text-gray-600">No charge, no obligation, nothing to cancel.* *</p>
                        </div>
                    </div>
                </div>


            </div>


            <div className='tw-mt-6 tw-mb-3 tw-text-center'>
                <div id='find' className="tw-text-4xl tw-font-bold tw-text-gray-900">What's first up for your business?</div>
                <br />
                <div id='tw_flex'>
                    <div><button onClick={hideandshow} id='bdbtn' className=' tw-rounded-full ' >Domains</button></div>
                    <div><button id='bdbtn' className=' tw-rounded-full '>Recommended</button></div>
                    <div><button onClick={hideandshow2} id='bdbtn' className=' tw-rounded-full '>WordPress And Security</button></div>
                </div>
            </div>

            <Articals  />
            <br />
            <Articals2 />
        </div>




    )
}

export default Main
