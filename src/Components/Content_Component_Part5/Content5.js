import './content5.css'

function Content5(){
    return(
        <div className="content5-container">
            
            <div className="cricle11">
                <div style={{ pointerEvents: 'none'}} className="cricle-img-con">
                    <img className="cricle-in-img" src="https://res.cloudinary.com/draisdub8/image/upload/v1693733782/Payinstacardassignment/image1_hdvp1u.jpg"/></div>
            </div>

            <div className="book-now-container">
                <h1 className="book-now-head">Book now</h1>
                <p className="book-now-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                <div className="book-now-label-con">
                <div className="book-now-label">
                <label className="city-label">City </label>
                <input className="book-now-input1" placeholder='Enter your city name'></input>
                </div>
                
                <div className="date-label-con">
                <label className="arrival-label">Arrival</label>
                <input className="book-now-input2" placeholder='10 October' ></input> 
                <label className="departure-now-input2">Departure </label>
                <input className="book-now-input3" placeholder='11 October'></input>
                </div>
                <div className="star-container">
                <label className="star-now-input2">Star</label>
                
                
                <div className="star-btn-container">
                <button className="star-btn">-</button>
            <span className="star-btn-text">4</span>
            <button className="star-btn2">+</button>
                </div>
                

            <label className="room-now-input2">Room</label>
            
            <div className="room-btn-container">
                
                <button className="room-btn3">-</button>
            <span>1</span>
            <button className="room-btn3">+</button></div>
            
                </div></div>
                <button  value="Button" name="Button" className="book-now-btn">Book Now</button></div>

            </div>

            
        
    )
}

export default Content5