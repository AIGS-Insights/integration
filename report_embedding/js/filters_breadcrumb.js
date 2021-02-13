function createBreadcrumb(breadcrumbElement, report) {
    //Create a div that we will be cloning for each filter that is present within a list
    let example = document.createElement('div');
    example.className = 'breadcrumb';
    example.innerHTML = '<div class="filterName"></div>'+ '<div class="filterValues"></div>';
    /*+
        '<div class="filterClear">Clear</div>';
     */
    //We can retrieve the filters API from the report. 
    let filters = report.filters;
    
    //Use the filters forEach function to iterate 
    filters.forEach(filter => {
        //Clone the example node
        let element = example.cloneNode(true);
        
        //Add the filterName to the div with the class .filterName
        element.querySelector('.filterName').innerText = filter.name;
        
        //Add the applied values to the filterValues div
        element.querySelector('.filterValues').innerText = getDisplayValue(filter);
        
        
        //Finally append the filter element to the breadcrumb element
        breadcrumbElement.appendChild(element);
    });
    
}

function valuesApplied(filter) {
    let appliedValues = filter.appliedValues || {};
    if(filter.list) {
        //If the filter is a list filter, the list should no be null and should have a length of > 0 to be considered set
        return appliedValues.valueList && appliedValues.valueList.length > 0;
    } else {
        //Use the !! operation to convert valueOne into a boolean
        let set = !!appliedValues.valueOne;
        if(set && filter.between) {
            //If valueOne is set, then do the same to valueTwo
            set = !!appliedValues.valueTwo;
        }
        
        return set;
    }
}


function getDisplayValue(filter) {
    if(!valuesApplied(filter)) {
        return "No Values Set";
    }
    if(filter.list) {
        return filter.appliedValueList.join(', ');
    } else {
        let str = filter.appliedValueOne;
        if(filter.between) {
            str += " - " + filter.appliedValueTwo;
        }
        return str;
    }
}