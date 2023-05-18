import { useEffect, useState } from "react";
import { DadosDog } from "./DadosDog";

export function CardDog(){    
    const [fotos, setFoto] = useState("");
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {                    
                setFoto(data.message)
            })                
     }, []); 

    return (
        <div>
            <img src={fotos} alt="dog" width="20%" height="20%"/>
            < DadosDog fotinha={fotos} raca={fotos.split("/")[4]}/>
        </div>
    )
}
