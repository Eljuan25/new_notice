const apiKey = "eef80b71f114404082d7c1b7e2b17f51";

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;


const newsContainer = document.getElementById('news-container');


async function obtenerNoticias() {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    
    newsContainer.innerHTML = '';

    
    datos.articles.forEach(article => {
        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');

        newsArticle.innerHTML = `
            <img src="${article.urlToImage}" alt="Imagen de noticia">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Leer más</a>
        `;

        newsContainer.appendChild(newsArticle);
    });
}

obtenerNoticias();