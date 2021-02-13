function createBreadcrumb(breadcrumbElement, report) {
    //Create a div that we will be cloning for each filter that is present within a list
    let example = document.createElement('div');
    example.className = 'breadcrumb';
    example.innerHTML = '<div class="filterName"></div>' ;

    //We can retrieve the filters API from the report. 
    let filters = report.filters;
    
    //Use the filters forEach function to iterate 
    filters.forEach(filter => {
        //Clone the example node
        let element = example.cloneNode(true);
        
        //Add the filterName to the div with the class .filterName
        element.querySelector('.filterName').innerText = filter.name;
        
        //Finally append the filter element to the breadcrumb element
        breadcrumbElement.appendChild(element);
    });
    
