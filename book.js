{
    fetch('book.xml')
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            const books = data.querySelectorAll('book');
            const booksContainer = document.getElementById('books');
            books.forEach(book => {
                const title = book.querySelector('title').textContent;
                const author = book.querySelector('author').textContent;
                const price = book.querySelector('price').textContent;
                booksContainer.innerHTML += `<p>Title: ${title}, Author:${author}, Price: ${price}</p>`;
            });
        })
        .catch(error => console.error('Error:', error));
};