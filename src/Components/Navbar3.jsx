import React, { Component } from 'react'

export default class Navbar3 extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                Titel: this.props.title,
                Titel2: this.props.titleo,

                F_name: this.props.ffname,
                S_name: this.props.ssname,
                Tt_name: this.props.ttname,
                Fo_name: this.props.fooname
            }
        }
    }


    render() {
        return (
            <div>
                <div id='security' className='tw-w-screen'>
                    <div>
                        <div>
                            <div className=" tw-flex tw-items-center tw-justify-center tw-bg-gray-50 tw-py-12 tw-px-4 sm:tw-px-6 lg:tw-px-8">
                                <div className="tw-max-w-7xl tw-w-full">
                                    <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
                                        <div>
                                            <h2 className="tw-text-sm  tw-from-neutral-700  tw-mb-4">{this.state.Titel}</h2>
                                            <div className="tw-space-y-4">
                                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white tw-rounded">
                                                    <i className="fa-regular fa-file-powerpoint"></i>
                                                    <span className='tw-font-bold'>{this.state.F_name}</span>
                                                </div>
                                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                                    <i className="fa-solid fa-lock"></i>
                                                    <span className='tw-font-bold'>{this.state.S_name}</span>
                                                </div>

                                            </div>
                                        </div>



                                        <div>
                                            <h2 className="tw-text-sm  tw-from-neutral-700  tw-mb-4">{this.state.Titel2}</h2>
                                            <div className="tw-space-y-4">
                                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                                    <i className="fa-solid fa-shield-halved"></i>

                                                    <span className='tw-font-bold'>{this.state.Tt_name}</span>

                                                </div>
                                                <div className="tw-flex tw-items-center tw-space-x-4 tw-p-4 tw-bg-white  tw-rounded">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                    <span className='tw-font-bold'>{this.state.Fo_name}</span>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="tw-space-y-4">

                                        </div>


                                        <div className=" tw-flex tw-justify-center">
                                            <div className="tw-bg-white  tw-rounded tw-p-0"><img  className='hover:-tw-scale-95  md:tw-transform-none tw-delay-75 transition-transform tw-overflow-hidden'  data-cy="image" alt="img-meganav-website-backup" height="741" width="835" data-src="https://img1.wsimg.com/cdnassets/transform/a00296a4-9b10-470e-9845-1124f28b7d51/img-meganav-website-backup" src="https://img1.wsimg.com/cdnassets/transform/a00296a4-9b10-470e-9845-1124f28b7d51/img-meganav-website-backup"/><br />
                                                <p className="tw-text-sm  tw-font-extrabold tw-bg-transparent">Back Up Your Website for Peace of Mind </p>
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
}
