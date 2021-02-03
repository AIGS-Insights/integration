var tasks = [{
    title: "Simple Embedded Dashboard",
    description: "Just a simple embed of a single dashboard.",
    img_url:"../assets/img/dashboard_thumb/simple_dashboard.PNG",
    page_url:"../dashboard_embedding/simple_dashboard.html",   
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