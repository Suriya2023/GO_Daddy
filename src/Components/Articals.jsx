import React from 'react'
import one from './Imgaes/one.webp'
import two from './Imgaes/two.webp'

function Articals() {
  return (
    <>
      <div className='onecontainer'>
        <div className="one1">
          <div className="one2">
            <div>
              <div className='thisptage' id='thisptage'>

                <h1 className='DomainArticals'>Domains</h1>
                <p>Get started with the perfect domain, which comes with free domain privacy protection forever.</p>
                <button>
                  Search Domains
                </button>
              </div>
            </div>
            <img src={one} alt="one" className='twwauto' />

          </div>
          {/* \end{code} */}
          <div className="one2">
            <div className='thisptage' id='thisptage'>

              <h1 className='DomainArticals'>.Co for ₹ 999.00/1st</h1>
              <p>Ensure your company and website stand out with a .co domain.      <br />
              1-year purchase required. ₹ 3,299.00‬.</p>
         

              <button>
                Search Domains
              </button>
            </div>
            <img src={two} alt="one" className='twwauto' />


          </div>
        </div>
      </div>
    </>
  )
}

export default Articals
