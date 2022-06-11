
import "./BookaTripSection.scss";
import image1 from "../../../assests/img1.png"
import image2 from "../../../assests/image2.png"
import image3 from "../../../assests/image3.png"

const BookaTrip = () => {
    return (
       <div className="book-a-trip">
            <div className="trip-card">
                <div className="img-area">
                   <img src={image1} alt="" />
                </div>
                <div className="trip-text">
                    <span className="big-text">
                        Select Destination
                    </span>
                    <span className="small-text">
                      At first choose the place you wanted to go
                    </span>
                </div>
            </div>
            <div className="trip-card">
                <div className="img-area">
                  <img src={image2} alt="" />
                </div>
                <div className="trip-text">
                    <span className="big-text">
                       Book a Trip
                    </span>
                    <span className="small-text">
                       book your tip form our exclusive offers
                    </span>
                </div>
            </div>
            <div className="trip-card">
                <div className="img-area">
                   <img src={image3} alt="" />
                </div>
                <div className="trip-text">
                    <span className="big-text">
                      Take your flight
                    </span>
                    <span className="small-text">
                      Take your flight on selected date and joy
                    </span>
                </div>
            </div>
       </div>
    )
   }
   
   export default BookaTrip;