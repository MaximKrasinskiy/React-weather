import React from 'react';
import './City.css'


function City(){
    return(

    <div>
          <select className="city">
            <option value="625144">Minsk</option>
            <option value="524894">Moscow</option>
            <option value="703448">Kyiv</option>
            <option value="2950158">Berlin</option>
            <option value="2968815">Paris</option>
            <option value="3117735">Madrid</option>
        </select>
    </div>
    )
}
export default City;