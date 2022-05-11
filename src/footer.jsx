import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () =>
{
    useEffect(() => {
        AOS.init(
            {
                duration : 1500
            }
        );
        AOS.refresh();
      }, []);
    return(
        <>
             <div className="container-fluid mp-0 orange-bg ">
                    <div className="row mp-0 py-5 ">
                    <div className="col-md-12 text-center pt-5 pb-5">
                    <h2 className="text-center px-5 text-white" data-aos="fade-up">For trade enquiries and feedback</h2>    
                    <button className="btn bg-white rounded-pill orange-text fs-4 mt-2 px-4" data-aos="fade-up">Contact Us</button>
                    </div>
                    </div>
                </div>
            <div className="container-fluid mp-0 bg-dark-pink ">
                    <div className="row mp-0 ">
                        <div className="col-md-4 px-5">
                            <img className="w-10" src="img/7.PNG" style={{width: "150px"}} />
                        </div>
                        <div className="col-md-4">
                        <ul class="nav-list pt-4 pb-4 text-white fs-6 lh-lg">
                            <li class="list"><a id="anchor" className="anchor" href="#">Home</a></li>
                            <li class="list"><a id="anchor" className="anchor" href="#">About us </a></li>
                            <li class="list"><a id="anchor" className="anchor" href="#">Legacy</a></li>
                            <li class="list"><a id="anchor" className="anchor" href="#">Products</a></li>
                            <li class="list"><a id="anchor" className="anchor" href="#">Career</a></li>
                            <li class="list"><a id="anchor" className="anchor" href="#">Contact us</a></li>
                            <li class="list"><a id="anchor" className="anchor" href="#">App Privacy Policy</a></li>
                        </ul>
                        </div>
                        <div className="col-md-4">
                        <ul class="nav-list pt-4 pb-4 text-white fs-6">
                            <li class="list">Dinshaw's Dairy Foods Pvt. Ltd.,</li>
                            <li class="list">Gorewada Road, Borgaon, Gittikhadan, Nagpur - 440013.</li>
                            <li class="list">(Maharashtra) India.</li>
                            <br />
                            <li class="list" style={{border: "1px solid #FFF"}}></li>
                            <br/>
                            <li class="list"><span><a id="anchor" className="anchor" href="tel:+91 712 2865500">+91 712 2865500</a></span> | <span> <a id="anchor" className="anchor" href="mailto:customerdelight@dinshaws.co.in">customerdelight@dinshaws.co.in</a></span></li>
                            <br/>
                            <li class="list">
                                <span><a href="#"><img className="social-icon mx-1" src="img/icon/fb.png" /></a></span>
                                <span><a href="#"><img className="social-icon mx-1" src="img/icon/insta.png" /></a></span>
                                <span><a href="#"><img className="social-icon mx-1" src="img/icon/twitter.png" /></a></span>
                                <span><a href="#"><img className="social-icon mx-1" src="img/icon/youtube.png" /></a></span>
                                <span><a href="#"><img className="social-icon mx-1" src="img/icon/linkedin.png" /></a></span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div> 
        </>
    )
}
export default Footer;