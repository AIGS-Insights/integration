var tasks = [{
    title: "Simple Embedded Report",
    description: "Just a simple embed of a single report.",
    img_url:"https://smartlogic.io/images/brand-assets/smartlogic-seal-teal-vector.svg",
    page_url:"../report_embedding/content/simple_report_interactive_buttons.html",   
},
{
    title: "Simple Embedded Report",
    description: "Just a simple embed of a single report.",
    img_url:"",
    page_url:"",   
},
{
    title: "Advanced Embedded Report",
    description: "This uses the advanced method of embedding a single report.",
    img_url:"",
    page_url:"",   
},
{
    title: "Advanced Embedded Report",
    description: "This uses the advanced method of embedding a single report.",
    img_url:"",
    page_url:"",   
},
{
    title: "Advanced Embedded Report",
    description: "This uses the advanced method of embedding a single report.",
    img_url:"",
    page_url:"",   
},
{
    title: "Advanced Embedded Report",
    description: "This uses the advanced method of embedding a single report.",
    img_url:"",
    page_url:"",   
},
{
    title: "Advanced Embedded Report",
    description: "This uses the advanced method of embedding a single report.",
    img_url:"",
    page_url:"",   
},
{
    title: "Advanced Embedded Report",
    description: "This uses the advanced method of embedding a single report.",
    img_url:"",
    page_url:"",   
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