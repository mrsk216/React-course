
function About(){
    return(
        <>
        <section className="about pb-5">
            <div className="container">
                <div className="row about-title align-items-center justify-content-center pt-5 pb-5">
                    <h3>About Mee</h3>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-6">
                        <div className="about-img py-5">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/044/277/175/small_2x/young-man-standing-holding-laptop-and-looking-at-camera-on-isolated-transparent-background-free-png.png" alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-6 d-flex align-items-center justify-content-start">
                        <div className="about-text">
                            <h4 className="fw-bold pb-3">Hello I'm Shekh Md Mohsin. I'm a full stack developer from Manikganj. </h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum eveniet vitae totam ducimus.</p>
                            <div className="d-flex gap-5">
                                <ul>
                                    <li>Name</li>
                                    <li>Email</li>
                                    <li>Phone</li>
                                    <li>Address</li>
                                </ul>
                                <ul>
                                    <li>Shekh Md Mohsin</li>
                                    <li>shekh24@gmail.com</li>
                                    <li>01900003332</li>
                                    <li>Manikgonj,Dhaka,Bangladesh</li>
                                </ul>
                            </div>
                            <div className="pt-3">
                                <a href="" type="button" className="btn download-cv btn-custom">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
};

export default About