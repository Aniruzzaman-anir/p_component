import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../../assests/icon.png"
import Location from "../../assests/icon_location.png"
import "./SearchOption.scss"
const SearchOption = () => {
    return (
        <div className="search-section">

            <div className="input-fields">
                <span>
                    <img src={Search}/>
                    <input type="text" value="" placeholder="Search destination"/>
                </span>
                <span>
                    <img src={Location}/>
                    <input type="text" value="" placeholder="Location"/>
                </span>
                <span>
                    
                    <input type="text" value="" placeholder="Person"/>
                </span>
            </div>
            <div className="search-btn">
                Search
            </div>


        </div>
    )
}

export default  SearchOption