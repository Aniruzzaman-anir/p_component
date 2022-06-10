
import { useState } from "react";
import Search from "../../assests/icon.png"
import Location from "../../assests/icon_location.png"
import "./SearchOption.scss"
const SearchOption = () => {

   const [searchText, setSearchText] = useState('');
   const [location, setlocation] = useState('');
   const [searchPerson, setsearchPerson] = useState('');



    return (
        <div className="search-section">

            <div className="input-fields">
                <span>
                    <img src={Search}/>
                    <input type="text" onChange={(e)=>setSearchText(e.target.value)} value={searchText} placeholder="Search destination"/>
                </span>
                <span>
                    <img src={Location}/>
                    <input type="text" onChange={(e)=>setlocation(e.target.value)} value={location} placeholder="Location"/>
                </span>
                <span>
                    
                    <input type="text" onChange={(e)=>setsearchPerson(e.target.value)} value={searchPerson} placeholder="Person"/>
                </span>
            </div>
            <div className="search-btn">
                Search
            </div>


        </div>
    )
}

export default  SearchOption