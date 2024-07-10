import React from "react";
import { useParams } from "react-router-dom";

function DogDetails({ dogs }){
    const doggo = useParams();
    const validDog = dogs.find(dog => dog.name.toLowerCase() === doggo.toLowerCase());
    if (!validDog) return <Navigate to="/dogs" />;
    return(
        <div>
            <img src={`/${doggo.src}.jpg`} alt={doggo.name} />
            <h2>{doggo.name}</h2>
            <h3>{doggo.age} years old</h3>
            <ul>
                {doggo.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    );
}
export default DogDetails;