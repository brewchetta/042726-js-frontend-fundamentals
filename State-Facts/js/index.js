// this function will get called every time the <select> changes
function handleChangeState() {
    // find the select tag (#state-list)
    const stateList = document.querySelector("#state-list")
    
    // get the "value" out of it a.k.a. the current option chosen
    const currentState = stateList.value
    
    // use the current value to retrieve information from stateData
    const currentStateData = stateData[currentState]
    
    // change the abbreviation textContent
    const abbr = document.querySelector("#info-abbr")
    abbr.textContent = currentStateData.abbr

    // change the capitol textContent
    const capitol = document.querySelector("#info-capitol")
    capitol.textContent = currentStateData.capitol

    // ... and all the other fields
}


// reset the value to usa when the page first loads
const stateList = document.querySelector("#state-list")

stateList.value = "usa"