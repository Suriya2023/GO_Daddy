import React from 'react'
import s1 from './Imgaes/s2.png'
import s2 from './Imgaes/s3.png'
function Marketing() {

    let SecondImg= () => {
        // let input = document.getElementById("input");

        if (document.getElementById('ss22').style.display === "none") {
            document.getElementById('ss22').style.display = "block"
            document.getElementById('ss224').style.display = "none"
            document.getElementById('ss223').style.display = "none"    
        }

        else {
            document.getElementById('ss22').style.display = "none"
        }
    }

    let SecondImgTwo= () => {
        // let input = document.getElementById("input");

        if (document.getElementById('ss223').style.display === "none") {
            document.getElementById('ss223').style.display = "block"
            document.getElementById('ss22').style.display = "none"
            document.getElementById('ss224').style.display = "none"
            
        }

        else {
            document.getElementById('ss223').style.display = "none"
        }
    }


    let SecondImgThree= () => {
        // let input = document.getElementById("input");

        if (document.getElementById('ss224').style.display === "none") {
            document.getElementById('ss224').style.display = "block"
            document.getElementById('ss22').style.display = "none"
            document.getElementById('ss223').style.display = "none"

        }

        else {
            document.getElementById('ss224').style.display = "none"
        }
    }
    return (
        <div>
            <div className="containeerrr">
                <h1 className="h1">Grow your brand with Websites + Marketing.</h1>
                <div className="image-sectiooon">
                    <img id='ss22' className='alcs3' src="https://img1.wsimg.com/cdnassets/transform/305e0fdd-0043-42cd-851e-5a6a00df7576/intl-img-bl-prod-feature-engage-with-marketing-desktop" alt="Night Dwellers Website"></img>
                    <img id='ss223'  src={s1} className='alcs1' alt="imagge1" />
                    <img id='ss224' src={s2} className='alcs2' alt="image2" />



                </div>
                <div className="info-sectiooon">
                    {/* <div className="info-booox1" onMouseLeave={SecondImgTwo}> */}
                    <div className="info-booox1" onClick={SecondImgTwo}>
                        <h2>Get online fast. No design skills needed.</h2>
                        <p>Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
                    </div>
                    {/* <div className="info-booox2" onMouseLeave={SecondImg} > */}
                    <div className="info-booox2" onClick={SecondImg} >
                        <h2>Build trust with email that matches your domain.</h2>
                        <p>Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
                    </div>
                    {/* <div className="info-booox3" onMouseLeave={SecondImgThree}> */}
                    <div className="info-booox3" onClick={SecondImgThree}>
                        <h2>Engage with marketing tools.</h2>
                        <p>Help your audience find you with built-in SEO and promote your business with social media and email marketing tools.</p>
                    </div>
                </div>
                <button className="startbtn">Start for Free</button>
            </div>

        </div>
    )
}

export default Marketing
