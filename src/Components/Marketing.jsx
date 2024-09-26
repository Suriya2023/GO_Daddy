import React from 'react'
import s1 from './Imgaes/s2.png'
import s2 from './Imgaes/s3.png'
function Marketing() {

    function SecondImg(){
            }
    return (
        <div>
            <div className="containeerrr">
                <h1 className="h1">Grow your brand with Websites + Marketing.</h1>
                <div className="image-sectiooon">
                    <img className='alcs3' src="https://img1.wsimg.com/cdnassets/transform/305e0fdd-0043-42cd-851e-5a6a00df7576/intl-img-bl-prod-feature-engage-with-marketing-desktop" alt="Night Dwellers Website"></img>
                    <img src={s1} className='alcs1' alt="" />
                    <img src={s2} className='alcs2' alt="" />



                </div>
                <div className="info-sectiooon">
                    <div className="info-booox1" onClick={SecondImg()}>
                        <h2>Get online fast. No design skills needed.</h2>
                        <p>Build your site in minutes. Choose from 100s of beautiful, mobile-friendly templates with our Website Builder, many with ecommerce features.</p>
                    </div>
                    <div className="info-booox2" onClick={SecondImg()}>
                        <h2>Build trust with email that matches your domain.</h2>
                        <p>Help boost your credibility with customers with free Professional Email that’s identical to your domain name.</p>
                    </div>
                    <div className="info-booox3" onClick={SecondImg()}>
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
