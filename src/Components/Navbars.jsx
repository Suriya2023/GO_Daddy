import React from 'react'


function Navbars() {


    return (
        <div id = "OnclickNav" className='tw-w-screen' >
            <div className=" tw-flex tw-items-center tw-justify-center tw-bg-gray-50 tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
                <div className="tw-max-w-7xl tw-w-full">
                    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
                        <div>
                            <h2 className="tw-text-sm  tw-from-neutral-700  tw-mb-4">Find a Domain</h2>
                            <div className="tw-space-y-4">
                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white tw-rounded">
                                    <i className="fa-solid fa-magnifying-glass"></i>





                                    <span >Search for Domain Names</span>



















                                </div>
                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                    <i className="fa-solid fa-right-left"></i>
                                    <span>Transfer Domain Names</span>
                                </div>
                                <div className="tw-flex tw-items-center  tw-p-4 tw-bg-white  tw-rounded">
                                    <i className="fa-solid fa-bars"></i> &nbsp;&nbsp;
                                    <span>Browse Domain Name Options</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="tw-text-sm  tw-from-neutral-700  tw-mb-4">Auctions for Domains</h2>
                            <div className="tw-space-y-4">
                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                    <i className="fa-solid fa-gavel"></i>
                                    <span>Auctions for Domain Names</span>
                                </div>
                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                    <i className="fa-solid fa-hand-holding-dollar"></i>
                                    <span>Appraise Domain Name Value</span>
                                </div>
                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                    <i className="fa-solid fa-hand-sparkles"></i>
                                    <span>Investing in Domain Names</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="tw-text-sm tw-from-neutral-700 tw-mb-4">Domain Tools and Services</h2>
                            <div className="tw-space-y-4">
                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white tw-rounded">
                                    <i className="fa-solid fa-hand-point-up"></i>
                                    <span>Generate Domain Names</span>
                                </div>
                                <div className="tw-flex tw-items-center  tw-p-4 tw-bg-white  tw-rounded">
                                    <i className="fa-solid fa-globe"></i> &nbsp;&nbsp;
                                    <span>Find a Domain Owner (WHOIS)</span>
                                </div>
                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                    <i className="fa-solid fa-circle-user"></i>
                                    <span>Domain Broker Service</span>
                                </div>

                            </div>

                        </div>
                        <div className=" tw-flex tw-justify-center">
                            <div className="tw-bg-white  tw-rounded tw-p-0">
                                <img className='hover:-tw-scale-95  md:tw-transform-none tw-delay-75 transition-transform tw-overflow-hidden'  data-cy="image" alt="img-meganav-domains-2" height="740" width="835" data-src="https://img1.wsimg.com/cdnassets/transform/439199f2-6368-4a61-86f7-0c8f259d6639/img-meganav-domains-2" src="https://img1.wsimg.com/cdnassets/transform/439199f2-6368-4a61-86f7-0c8f259d6639/img-meganav-domains-2" /><br />
                                <p className="tw-text-sm tw-font-extrabold tw-bg-transparent">Buy a Domain You Want</p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Navbars
