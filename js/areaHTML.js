"use strict";

let populateAreaDIV = (color, name, description) => {
    return `<div id='areaDIV' style='background-color: #${color}'>
                <h2 id='areaH2'>
                ${name}
                </h2>
                <p id='areaP'>
                ${description}
                </p>
                <div id='put-attractions-here'>

                </div>
            </div>`
}



module.exports = populateAreaDIV;
