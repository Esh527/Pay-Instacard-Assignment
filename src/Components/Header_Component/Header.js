import "./Header.css"

function Header() {

    return(
      

        <div className="header">
            <div className="header-link1">
            <a className="header-legal" href="#home">Home</a>
            <a className="header-legal" href="#About">About</a>
            <a className="header-legal" href="#Schedules">Schedules</a>
            <a className="header-legal" href="#Membership">Membership</a>
            <a className="header-legal" href="#Pricing">Pricing</a>
           
            
            <div className="header-link2">
            <a className="header-Offers" href="#Offers">Offers</a>
            <a className="header-Courses">Courses</a>
            </div>
            </div>
            
            
            
       
        </div>
    )
}

export default Header