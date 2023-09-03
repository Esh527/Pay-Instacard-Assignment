import './Testimonials.css'

function Testimonials(){
    return(
        <div className="testimonials-container">
            <h1 className="testimonials-head">Testimonials</h1>
            <div className="testimonials-content">
                <div>
                <img className="testimonials-content1-img" src="https://res.cloudinary.com/draisdub8/image/upload/v1693666268/Payinstacardassignment/Ellipse_1_rzgnxf.jpg"/>
                <h1 className="testimonials-content1-head">Corey Korsgaard</h1>
                <p className="testimonials-content1-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

                <div>
                <img className="testimonials-content2-img" src="https://res.cloudinary.com/draisdub8/image/upload/v1693666371/Payinstacardassignment/Avatar_x0jcnp.jpg"/>
                <h1 className="testimonials-content2-head">Jakob Aminoff</h1>
                <p className="testimonials-content2-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>

                <div>
                <img className="testimonials-content3-img" src="https://res.cloudinary.com/draisdub8/image/upload/v1693666489/Payinstacardassignment/Ellipse_1_1_l2qqiq.jpg" />
                <h1 className="testimonials-content3-head">Carla Press</h1>
                <p className="testimonials-content3-para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonials