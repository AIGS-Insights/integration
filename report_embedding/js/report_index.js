var tasks = [
{
    title: "Simple Embedded Report",
    description: "A report embedded using the 'simple' method.",
    img_url:"../assets/img/report_thumb/simple_report.PNG",
    page_url:"../report_embedding/content/simple_report.html",   
},
{
    title: "Advanced Embedded Report",
    description: "A report embedded using the 'advanced' method.",
    img_url:"../assets/img/report_thumb/advanced_method.PNG",
    page_url:"../report_embedding/content/advanced_report.html",   
},
{
    title: "Embedded report with buttons submitting the filters",
    description: "An embedded report with buttons in the parent site which submit the filter values on click.",
    img_url:"../assets/img/report_thumb/Interactive_filter.PNG",
    page_url:"../report_embedding/content/simple_report_interactive_buttons.html",   
},
{
    title: "Display Different Visualisations from the same report",
    description: "The Example JsAPI Report has 7 different charts on it, as well as a table and a canvas. The above loadReport call will load and display the canvas by default. In this case we just want to display the 2 charts and the table at the same time, but we don’t want to display the canvas",
    img_url:"../assets/img/report_thumb/different_visualisations.PNG",
    page_url:"../report_embedding/content/different_visualisations.html",   
},
{
    title: "Removing the Display Toggle from reports and charts",
    description: "See how to remove the display toggle from a report or chart do stop users from switching between chart visualisations and the data table.",
    img_url:"../assets/img/report_thumb/remove_toggle.PNG",
    page_url:"../report_embedding/content/remove_toggle.html",   
},
{
    title: "Removing the toolbar from reports and charts",
    description: "See how to remove the toolbar from any embedded report or chart.",
    img_url:"../assets/img/report_thumb/remove_toolbar.PNG",
    page_url:"../report_embedding/content/remove_toolbar.html",   
},
{
    title: "Creating a filter breadcrumb with the filterAPI",
    description: "Ths JsAPI Example report has two filters within it, we are going to use the “applied” filter events on these filters to create a series of elements which display which filter is currently applied to the report. From a user perspective what this means is that every time a filter value is applied to this report, the value will show up in the “breadcrumb” across the top, so we can easily display what is being applied.",
    img_url:"../assets/img/report_thumb/filter_breadcrumb.PNG",
    page_url:"../report_embedding/content/filter_breadcrumb.html",   
},
];
let cardContainer;

let createTaskCard = (task) => {

    let page_url = document.createElement('a');
    page_url.href = task.page_url;
    page_url.className = 'card-url-link';

    let card = document.createElement('div');
    card.className = 'card shadow cursor-pointer';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let title = document.createElement('h5');
    title.innerText = task.title;
    title.className = 'card-title';

    let img_url = document.createElement('img');
    img_url.src = task.img_url;
    img_url.className = 'thumb_image';


    let description = document.createElement('div');
    description.innerText = task.description;
    description.className = 'card-description';


    cardBody.appendChild(title);
    cardBody.appendChild(img_url);
    cardBody.appendChild(description);
    card.appendChild(cardBody);
    page_url.appendChild(card);
    cardContainer.appendChild(page_url);

}
let initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    tasks.forEach((task) => {
        createTaskCard(task);
    });
};

initListOfTasks();