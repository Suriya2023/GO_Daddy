import React from 'react'
import one1 from './Imgaes/dady1.webp'
import two2 from './Imgaes/dad2.webp'
function Articals2() {
  return (
          <>
          <div id='donmainhidetwo'>
      <div  className='onecontainer'>
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
            <img src={one1} alt="one" className='twwauto' />

          </div>

          {/* \end{code} */}
          <div  className="one2">
            <div className='thisptage' id='thisptage'>

              <h1 className='DomainArticals'>.Co for ₹ 999.00/1st</h1>
              <p>Ensure your company and website stand out with a .co domain.      <br />
              1-year purchase required. ₹ 3,299.00‬.</p>
         

              <button>
                Search Domains
              </button>
            </div>
            <img src={two2} alt="one" className='twwauto' />


          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Articals2
