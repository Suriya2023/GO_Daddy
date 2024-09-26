import React, { Component } from 'react'

export class Navbar4 extends Component {
    constructor (props){
        super(props);{
            this.state= {
                F_name : this.props.fname,
                Tt_name:this.props.sname,
                Fo_name:this.props.tname,
                Titel:this.props.titel,
                Titel2:this.props.title2,
            }
        }
    }
    
  render() {
    return (
      <div>
          <div id='marketing' className='tw-w-screen'>
                <div>
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
                                            <div className="tw-bg-white  tw-rounded tw-p-0"><img  className='hover:-tw-scale-95  md:tw-transform-none tw-delay-75 transition-transform tw-overflow-hidden'  data-cy="image" alt="Image-Grow-Desktop" height="740" width="835" data-src="https://img1.wsimg.com/cdnassets/transform/d6e6388f-e0ca-4cf4-a4b7-e9db7af568b1/Image-Grow-Desktop" src="https://img1.wsimg.com/cdnassets/transform/d6e6388f-e0ca-4cf4-a4b7-e9db7af568b1/Image-Grow-Desktop"/><br />
                                                <p className="tw-text-sm  tw-font-extrabold tw-bg-transparent">Learn to Grow Your Business </p>
                                            </div>
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

export default Navbar4
