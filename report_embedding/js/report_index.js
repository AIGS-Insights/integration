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
}
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