import React from "react";;
import { Link } from "react-router-dom";

function DogList({ dogs }){
    return(
        <div>
            {dogs.map(d => {
                <div key={d.name}>
                    <Link to={`/dogs/${d.name.toLowerCase()}`}>Learn more about {d.name}</Link>
                </div>
            })}
        </div>
    );
}

export default DogList;