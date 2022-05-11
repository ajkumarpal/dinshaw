import React, {useEffect} from "react";
import ContactModal from "./contact-modal";
import AOS from "aos";
import "aos/dist/aos.css";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import { $ } from "react-jquery-plugin";

const Home = () =>
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
                <div className="container-fluid mp-0">
                        <div className="">
                                <img src="img/banner.png" className="home-banner w-100" />
                        </div>
                </div>
                <div className="container-fluid mp-0">
                        <div className="row mp-0">
                        <div className="col-md-6 col-sm-6 mp-0" data-aos="zoom-in" data-aos-anchor-placement="center-center">
                            <img src="img/1.PNG" className="mp-0 w-100"  />
                        </div>
                        <div className="col-md-6 col-sm-6 p-5 pt-5 pb-5 orange-bg">
                            <br/> <br/> <br/> <br/> <br/>
                            <h2 className="text-center px-5 yellow-text" data-aos="fade-up">Finest Quality Products</h2>    
                            <h2 className="text-center px-5 yellow-text" data-aos="fade-up">WRAPPED IN LOVE</h2>
                            <p className="text-center p-5 pt-3 text-white fs-6" data-aos="fade-up">Every Dinshaw’s product is made from the finest & purest of
                                ingredients and passes through the most stringent of<br/>
                                quality checks before it reaches you. We don’t make even< br/>
                                the slightest of compromises when it comes to quality, and<br/>
                                hence, the product that ultimately reaches you, is sure to<br/>
                                leave a smile on your face! 
                            </p>
                        </div>
                        </div>
                </div>
                <div className="container-fluid mp-0">
                    <div className="row mp-0">
                        <h2 className="text-center px-5 pt-5 orange-text">Range Of Products</h2>    
                        <h2 className="text-center px-5 pb-5 orange-text">WRAPPED IN LOVE</h2>
                        <div className="col-md-6 mp-0">
                            <div class="card border-0" style={{width: ""}}>
                            <img src="img/1-02.jpg" class="card-img-top h-80" alt="..." />
                            <div class="card-img-overlay text-center" data-aos="fade-up">
                            <h2 className="text-voilet">Bakery</h2>
                            <p className="text-center text-black fs-6">
                                Baking for us is an expression of perfection, and<br/>
                                our bakers are lovers of the craft. With their<br/>
                                artistic culinary skills collectively spanning over a<br/>
                                century, you are bound to fall in love at first bite.
                            </p>
                            <button className="btn orange-bg rounded-pill text-white">Know More</button>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 mp-0">
                            <div class="card border-0" style={{width: ""}}>
                            <img src="img/1-03.jpg" class="card-img-top h-80" alt="..." />
                            <div class="card-img-overlay text-center"  data-aos="fade-up">
                            <h2 className="text-voilet">Dairy</h2>
                            <p className="text-center text-black fs-6">
                            Every product is a promise that it has been made with<br/>
                            purest of intentions and ingredients! Milk is nature’s gift to<br/>
                            humans and we strive to turn this gift into a blessing.<br/>
                            Every product is as good as the nature intended it to be!
                            </p>
                            <button className="btn orange-bg rounded-pill text-white">Know More</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid mp-0 bg-voilet">
                    <div className="row mp-0 py-5">
                    <h2 className="text-center yellow-text pt-5"  data-aos="fade-up">Story of ethics, values and trust</h2>  
                    <p className="text-center text-white fs-6 pb-5"  data-aos="fade-up">
                        In 1932, when refrigerators were still a novelty, Dinshaw’s launched handcrafted premium<br/>ice creams in India. Since then, we’ve crossed many milestones in our long journey so far,<br/>but we feel, we’ve just started! <br/>Even today, Dinshaw’s is an ardent believer that quality ranks above profit and natural<br/>beats preservatives. We never compromise on quality. We never sacrifice our values &<br/>ethics. Our promise is to produce products that are delicious, healthy, pure and natural.<br/>We owe it to the community, our legacy and most importantly, to you.
                    </p>  
                    </div>
                </div>
                <div className="container-fluid mp-0">
                    <div className="row mp-0">
                        
						<div className="col-md-4 mp-0" data-aos="zoom-in" data-aos-anchor-placement="center-center">
                            <div class="card border-0 img-hover" style={{width: ""}}>
                            <img src="img/1-06.jpg" class="card-img-top" alt="..." />
                            <div class="card-img-overlay">
                            <h2 className="fs-5 skyblue-text pt-5">Surety Of Purity,<br/>WRAPPED IN TRUST</h2>
                            <button className="btn orange-bg rounded-pill text-white">Know More</button>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4 mp-0" data-aos="zoom-in" data-aos-anchor-placement="center-center">
                            <div class="card border-0 img-hover" style={{width: ""}}>
                            <img src="img/1-09.jpg" class="card-img-top" alt="..." />
                            <div class="card-img-overlay">
                            <h2 className="fs-5 skyblue-text pt-5">Range Of Products,<br/>WRAPPED IN SMILES</h2>
                            <button className="btn orange-bg rounded-pill text-white">Know More</button>
                            </div>
                            </div>
                           
                        </div>
                        <div className="col-md-4 mp-0" data-aos="zoom-in" data-aos-anchor-placement="center-center">
                            <div class="card border-0 img-hover" style={{width: ""}}>
                            <img src="img/1-08.jpg" class="card-img-top" alt="..." />
                            <div class="card-img-overlay">
                            <h2 className="fs-5 skyblue-text pt-5">Legacy Of Innovation<br/>WRAPPED IN TRUST</h2>
                            <button className="btn orange-bg rounded-pill text-white">Know More</button>
                            </div>
                            </div>
                           
                        </div>
                        <div className="col-md-4 mp-0" data-aos="zoom-in" data-aos-anchor-placement="center-center">
                            <div class="card border-0 img-hover" style={{width: ""}}>
                            <img src="img/1-07.jpg" class="card-img-top" alt="..." />
                            <div class="card-img-overlay">
                            <h2 className="fs-5 skyblue-text pt-5">Surety Of Purity,<br/>WRAPPED IN TRUST</h2>
                            <button className="btn orange-bg rounded-pill text-white">Know More</button>
                            </div>
                            </div>
                           
                        </div>
                        <div className="col-md-4 mp-0" data-aos="zoom-in" data-aos-anchor-placement="center-center">
                            <div class="card border-0 img-hover" style={{width: ""}}>
                            <img src="img/1-10.jpg" class="card-img-top" alt="..." />
                            <div class="card-img-overlay">
                            <h2 className="fs-5 skyblue-text pt-5">Range Of Products,<br/>WRAPPED IN SMILES</h2>
                            <button className="btn orange-bg rounded-pill text-white">Know More</button>
                            </div>
                            </div>
                           
                        </div>
                        <div className="col-md-4 mp-0" data-aos="zoom-in" data-aos-anchor-placement="center-center">
                            <div class="card border-0 img-hover" style={{width: ""}}>
                            <div class="card-zoom"><img src="img/1-11.jpg" class="card-img-top" alt="..." /></div>
                            <div class="card-img-overlay">
                            <h2 className="fs-5 skyblue-text pt-5">Legacy Of Innovation<br/>WRAPPED IN TRUST</h2>
                            <button className="btn orange-bg rounded-pill text-white">Know More</button>
                            </div>
                            </div>
                           
                        </div>
                    </div>
                </div>

                <div className="container-fluid mp-0">
                        <div className="row mp-0">
                        <div className="col-md-6 col-sm-6 mp-0">
                            <img src="img/2.PNG" className="mp-0 w-100"  />
                        </div>
                        <div className="col-md-6 col-sm-6 pt-5 pb-5 bg-pink">
                            <br/> <br/> <br/> <br/> <br/>
                            <h2 className="text-center text-white"  data-aos="fade-up">Stay plugged to purity</h2>    
                            <p className="text-center pt-2 text-white fs-6"  data-aos="fade-up">Join our family of 30K+ members to stay updated with every<br/>
                            news related to Dinshaw’s and industry
                            </p><br/><br/>
                            <form  data-aos="fade-up">
                            <div className="row justify-content-center mp-0">
                                <div className="col-md-5 ">
                                <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Email Id" />
                                </div>
                                <div className="col-md-3 mt-1">
                                     <a className="text-white" type="button">Submit</a>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                </div>
                <div className="container-fluid mp-0">
                    <div className="row mp-0 py-5">
                        <h2 className="text-center px-5 orange-text"  data-aos="fade-up">Know The News</h2>    
                        <p className="text-center pt-2 text-black fs-6"  data-aos="fade-up">
                                Find out what’s baking behind the scene. Get first-hand insights on brand new<br/>
                                flavours, products, partnerships and much more</p>
                    <div className="col-md-6"  data-aos="fade-right">
                    <img src="img/3.PNG" className="mp-0 w-100"  />
                    </div>
                    <div className="col-md-6"  data-aos="fade-left">
                    <img src="img/4.PNG" className="mp-0 w-100"  />
                    </div>
                    </div>
                </div>
                <div className="container-fluid mp-0">
                        <div className="row mp-0">
                       
                        <div className="col-md-6 col-sm-6 p-5 pt-5 pb-5 bg-skyblue text-center">
                            <br/> <br/> <br/> <br/> <br/>
                            <h2 className="text-center px-5 text-white" data-aos="fade-up">Wide Range Of Smiles</h2>    
                            <p className="text-center p-3 text-white fs-6" data-aos="fade-up">
                                    Dinshaw’s offers a wide range of products from dairy to<br/>
                                    bakery; we ensure that your mornings & evenings are<br/>
                                    always ‘delectable’ & ‘delightful’ 
                            </p>
                            <button className="btn bg-white rounded-pill text-gray" data-aos="fade-up">View all</button>
                        </div>
                         <div className="col-md-6 col-sm-6 mp-0">
                            {/* <img src="img/1.PNG" className="mp-0 w-100"  /> */}
                            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="img/5.PNG" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="img/5.PNG" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="img/5.PNG" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                        </div>
                           </div>
                            </div>
                        </div>
                        <div className="container-fluid mp-0 pb-5 pt-5">
                             <div className="row justify-content-center">
                                <h2 className="text-center pt-5 skyblue-text" data-aos="fade-up">Approved by NABL Lab & You</h2>    
                                 <p className="text-center fs-6" data-aos="fade-up">
                                    All Dinshaw’s products are rigorously tested in a world-class NABL laboratories<br/>on strictest of quality parameters before they reach your dinner table. 
                                  </p>
                        <img src="img/6.PNG" className="card-img pb-5" style={{width: "100px"}} data-aos="zoom-in" />
                    </div>
                </div>
               
                    
                {/* <div className="container-fluid mp-0" style={{borderTop: "3px solid #000"}}>
                <div className="card">
                        <div className="">
                                <img src="img/1-11.jpg" className="home-banner w-100" />
                        </div>
                       <div class="card-img-overlay bg-dark-pink mx-5 mt-0 p-4" style={{width: "30rem", height: "22rem", borderRadius: "0px 0px 20px 20px"}}>
                      <div className="">
                      <h2 className=" text-white pt-3 text-shadow">Pursuit Of Progress,<br />WRAPPED IN PERFECTION</h2>    
                        <p class="card-text text-white fs-6">
                            With Dinshaw’s ice-creams available all over India, our<br/>
                            dairy products are mainly distributed in Central India</p>
                        <p class="card-text text-white pb-3 fs-6">Our presence in Maharashtra, Madhya Pradesh,<br/>
                            Chhattisgarh, Orissa, Andhra Pradesh, Karnataka, Goa,<br/>
                            Uttar Pradesh, Jharkhand, Delhi, Haryana has been<br/>
                            adding wholesome goodness to the lives of thousands<br/>
                            since decades
                        </p>
                      </div>
                    </div>
                       </div>
                </div> */}
                <ContactModal />

        </>
    )
}
export default Home;