var tasks = [
{
    title: "D3 - Lollipop Chart",
    description: "",
    img_url:"../assets/img/js_charts/GlobexCorp.PNG",
    page_url:"../js_charts/content/d3_lollipop.html",   
},
{
    title: "Holding",
    description: "",
    img_url:"../assets/img/js_charts/liquorio.PNG",
    page_url:"../projects/content/liquorio.html",   
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