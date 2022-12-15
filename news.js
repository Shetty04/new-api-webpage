console.log('welcome to news api');
//21172dd86ed7464a9f8a0caa47f87f98

let country = 'ca';
let apiKey = '21172dd86ed7464a9f8a0caa47f87f98';

//grab the news container
let newsAccordion = document.getElementById("newsAccordion");

//creating an ajax get request
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey} `, true);

//what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHTML = "";
        articles.forEach(function (element, index) {
            let news = `
        <div class="accordion-item">
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                   <b>BREAKING NEW : ${index + 1}</b> ${element["title"]}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion">
                <div class="accordion-body">
                    <strong>${element["content"]}</strong>. <a href="${element['url']}" target="_blank">READ MORE HERE</a>
                </div>
            </div>
        </div>`;
            newsHTML += news;
        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("some error occured");
    }
}
xhr.send();

/*let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    //console.log('Input event is fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";

        }

        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})*/



