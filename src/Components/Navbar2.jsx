import React, { Component } from 'react'
export default class Navbar2 extends Component {


    constructor(props) {
        super(props); {
            this.state = {
                F_name: this.props.Name,
                S_name: this.props.Fname,
                T_name: this.props.Sname,
                Tt_name: this.props.Tname,
                Fo_name: this.props.Foname,
                Fi_name: this.props.Finame,
                Si_name: this.props.Siname,
                Titel: this.props.ti,
                Titel2: this.props.tit,
                Titel3: this.props.tite,

            }
        }
    }

    render() {


        return (
            <div>
                <div id='hosting' className='tw-w-screen'>
                    <div className=" tw-flex tw-items-center tw-justify-center tw-bg-gray-50 tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
                        <div className="tw-max-w-7xl tw-w-full">
                            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
                                <div>
                                    <h2 className="tw-text-sm  tw-from-neutral-700  tw-mb-4">{this.state.Titel}</h2>
                                    <div className="tw-space-y-4">
                                        <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white tw-rounded">
                                            <i className="fa-regular fa-window-maximize"></i>




                                            <span className='tw-font-bold'>{this.state.F_name}</span>











                                        </div>
                                        <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                            <i className="fa-solid fa-store"></i>
                                            <span className='tw-font-bold'>{this.state.S_name}</span>
                                        </div>
                                        <div className="tw-flex tw-items-center  tw-p-4 tw-bg-white  tw-rounded">
                                            <i className="fa-solid fa-arrow-right"></i> &nbsp;&nbsp;
                                            <span className='tw-font-bold'>{this.state.T_name}</span>

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="tw-text-sm  tw-from-neutral-700  tw-mb-4">{this.state.Titel2}</h2>
                                    <div className="tw-space-y-4">
                                        <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                            <i className="fa-solid fa-arrow-right"></i>
                                            <span className='tw-font-bold'>{this.state.Tt_name}</span>

                                        </div>
                                        <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                            <i className="fa-solid fa-hand-holding-dollar"></i>
                                            <span className='tw-font-bold'>{this.state.Fo_name}</span>

                                        </div>
                                        <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                            <i className="fa-solid fa-hand-sparkles"></i>
                                            <span className='tw-font-bold'>{this.state.Fi_name}</span>

                                        </div>
                                        <div className="tw-flex tw-items-center  tw-p-4 tw-bg-white  tw-rounded">
                                            <i className="fa-solid fa-arrow-right"></i> &nbsp;&nbsp;
                                            <span className=''>{this.state.T_name}</span>

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="tw-text-sm tw-from-neutral-700 tw-mb-4">{this.state.Titel3}</h2>
                                    <div className="tw-space-y-4">
                                        <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white tw-rounded">
                                            <i className="fa-solid fa-hand-point-up"></i>
                                            <span className='tw-font-bold'>{this.state.Si_name}</span>
                                        </div>


                                    </div>

                                </div>
                                <div className=" tw-flex tw-justify-center">
                                    <div className="tw-bg-white  tw-rounded tw-p-0"><img className='hover:-tw-scale-95  md:tw-transform-none tw-delay-75 transition-transform tw-overflow-hidden'   data-cy="image" alt="img-meganav-ecommerce-hosting" height="741" width="835" data-src="https://img1.wsimg.com/cdnassets/transform/4bb63964-e152-412b-aa4d-6debb2e475a1/img-meganav-ecommerce-hosting" src="https://img1.wsimg.com/cdnassets/transform/4bb63964-e152-412b-aa4d-6debb2e475a1/img-meganav-ecommerce-hosting" /><br />
                                        <p className="tw-text-sm tw-font-extrabold tw-bg-transparent">Sell Online With WordPress Ecommerce Hosting </p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
