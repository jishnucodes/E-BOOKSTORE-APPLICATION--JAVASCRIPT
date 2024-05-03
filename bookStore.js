fetch('https://www.googleapis.com/books/v1/volumes?q=commonBooks&key=AIzaSyBFnV26Rzfqpgom5Dy0TIq7Zbce00odg8A')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < data.items.length; i++) {
        
        const genericBooks = data.items[i];
        
        
        const articleTag = document.createElement('article');
        articleTag.classList.add('products');
        articleTag.classList.add('ms-2');

        const imgTag = document.createElement('img');
        imgTag.src = genericBooks.volumeInfo.imageLinks.thumbnail;
        imgTag.classList.add('img-fluid');
        imgTag.alt = "book-image";
        articleTag.appendChild(imgTag);

        const textStartDiv = document.createElement('div');
        textStartDiv.classList.add('text-start');
        articleTag.appendChild(textStartDiv);

        const productHeaderDiv = document.createElement('div');
        productHeaderDiv.classList.add('product-header');
        textStartDiv.appendChild(productHeaderDiv);

        const priceHeaderTag = document.createElement('h4');
        priceHeaderTag.classList.add('h6');
        priceHeaderTag.classList.add('mt-3');
        priceHeaderTag.classList.add('text-wrap')
        priceHeaderTag.innerHTML = genericBooks.volumeInfo.title;
        productHeaderDiv.appendChild(priceHeaderTag);


        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('starRating');
        starRatingDiv.classList.add('mt-2');
        textStartDiv.appendChild(starRatingDiv);

        const spanStarTag1 = document.createElement('span');
        spanStarTag1.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag1);
        const spanStarTag2 = document.createElement('span');
        spanStarTag2.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag2);
        const spanStarTag3 = document.createElement('span');
        spanStarTag3.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag3);
        const spanStarTag4 = document.createElement('span');
        spanStarTag4.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag4);
        const spanStarTag5 = document.createElement('span');
        spanStarTag5.innerHTML = '&#9734;'
        starRatingDiv.appendChild(spanStarTag5);
        
        const priceAndCartDiv = document.createElement('div');
        priceAndCartDiv.classList.add('d-flex');
        priceAndCartDiv.classList.add('justify-content-between');
        priceAndCartDiv.classList.add('align-items-center');
        priceAndCartDiv.classList.add('mt-2');
        priceAndCartDiv.classList.add('gap-3');
        textStartDiv.appendChild(priceAndCartDiv);
        
        const priceSpan = document.createElement('span');
        priceSpan.innerHTML = '299';
        priceAndCartDiv.appendChild(priceSpan)

        const cartButton = document.createElement('button');
        cartButton.innerHTML = 'Add To Cart';
        priceAndCartDiv.appendChild(cartButton);
        
        const genericBooksList1 = document.getElementById('genericBooksList1');
        genericBooksList1.appendChild(articleTag);



    }
})

fetch('https://www.googleapis.com/books/v1/volumes?q=actionBookes&key=AIzaSyBFnV26Rzfqpgom5Dy0TIq7Zbce00odg8A')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < data.items.length; i++) {
        
        const genericBooks = data.items[i];
        
        
        const articleTag = document.createElement('article');
        articleTag.classList.add('products');
        articleTag.classList.add('ms-2');

        const imgTag = document.createElement('img');
        imgTag.src = genericBooks.volumeInfo.imageLinks.thumbnail;
        imgTag.classList.add('img-fluid');
        imgTag.alt = "book-image";
        articleTag.appendChild(imgTag);

        const textStartDiv = document.createElement('div');
        textStartDiv.classList.add('text-start');
        articleTag.appendChild(textStartDiv);

        const productHeaderDiv = document.createElement('div');
        productHeaderDiv.classList.add('product-header');
        textStartDiv.appendChild(productHeaderDiv);

        const priceHeaderTag = document.createElement('h4');
        priceHeaderTag.classList.add('h6');
        priceHeaderTag.classList.add('mt-3');
        priceHeaderTag.classList.add('text-wrap')
        priceHeaderTag.innerHTML = genericBooks.volumeInfo.title;
        productHeaderDiv.appendChild(priceHeaderTag);


        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('starRating');
        starRatingDiv.classList.add('mt-2');
        textStartDiv.appendChild(starRatingDiv);

        const spanStarTag1 = document.createElement('span');
        spanStarTag1.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag1);
        const spanStarTag2 = document.createElement('span');
        spanStarTag2.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag2);
        const spanStarTag3 = document.createElement('span');
        spanStarTag3.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag3);
        const spanStarTag4 = document.createElement('span');
        spanStarTag4.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag4);
        const spanStarTag5 = document.createElement('span');
        spanStarTag5.innerHTML = '&#9734;'
        starRatingDiv.appendChild(spanStarTag5);
        
        const priceAndCartDiv = document.createElement('div');
        priceAndCartDiv.classList.add('d-flex');
        priceAndCartDiv.classList.add('justify-content-between');
        priceAndCartDiv.classList.add('align-items-center');
        priceAndCartDiv.classList.add('mt-2');
        priceAndCartDiv.classList.add('gap-3');
        textStartDiv.appendChild(priceAndCartDiv);
        
        const priceSpan = document.createElement('span');
        priceSpan.innerHTML = '299';
        priceAndCartDiv.appendChild(priceSpan)

        const cartButton = document.createElement('button');
        cartButton.innerHTML = 'Add To Cart';
        priceAndCartDiv.appendChild(cartButton);
        
        const genericBooksList2 = document.getElementById('genericBooksList2');
        genericBooksList2.appendChild(articleTag);



    }
})

fetch('https://www.googleapis.com/books/v1/volumes?q=adventure&key=AIzaSyBFnV26Rzfqpgom5Dy0TIq7Zbce00odg8A')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < data.items.length; i++) {
        
        const genericBooks = data.items[i];
        
        
        const articleTag = document.createElement('article');
        articleTag.classList.add('products');
        articleTag.classList.add('ms-2');

        const imgTag = document.createElement('img');
        imgTag.src = genericBooks.volumeInfo.imageLinks.thumbnail;
        imgTag.classList.add('img-fluid');
        imgTag.alt = "book-image";
        articleTag.appendChild(imgTag);

        const textStartDiv = document.createElement('div');
        textStartDiv.classList.add('text-start');
        articleTag.appendChild(textStartDiv);

        const productHeaderDiv = document.createElement('div');
        productHeaderDiv.classList.add('product-header');
        textStartDiv.appendChild(productHeaderDiv);

        const priceHeaderTag = document.createElement('h4');
        priceHeaderTag.classList.add('h6');
        priceHeaderTag.classList.add('mt-3');
        priceHeaderTag.classList.add('text-wrap')
        priceHeaderTag.innerHTML = genericBooks.volumeInfo.title;
        productHeaderDiv.appendChild(priceHeaderTag);


        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('starRating');
        starRatingDiv.classList.add('mt-2');
        textStartDiv.appendChild(starRatingDiv);

        const spanStarTag1 = document.createElement('span');
        spanStarTag1.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag1);
        const spanStarTag2 = document.createElement('span');
        spanStarTag2.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag2);
        const spanStarTag3 = document.createElement('span');
        spanStarTag3.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag3);
        const spanStarTag4 = document.createElement('span');
        spanStarTag4.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag4);
        const spanStarTag5 = document.createElement('span');
        spanStarTag5.innerHTML = '&#9734;'
        starRatingDiv.appendChild(spanStarTag5);
        
        const priceAndCartDiv = document.createElement('div');
        priceAndCartDiv.classList.add('d-flex');
        priceAndCartDiv.classList.add('justify-content-between');
        priceAndCartDiv.classList.add('align-items-center');
        priceAndCartDiv.classList.add('mt-2');
        priceAndCartDiv.classList.add('gap-3');
        textStartDiv.appendChild(priceAndCartDiv);
        
        const priceSpan = document.createElement('span');
        priceSpan.innerHTML = '299';
        priceAndCartDiv.appendChild(priceSpan)

        const cartButton = document.createElement('button');
        cartButton.innerHTML = 'Add To Cart';
        priceAndCartDiv.appendChild(cartButton);
        
        const genericBooksList3 = document.getElementById('genericBooksList3');
        genericBooksList3.appendChild(articleTag);



    }
})

fetch('https://www.googleapis.com/books/v1/volumes?q=fictionBookes&key=AIzaSyBFnV26Rzfqpgom5Dy0TIq7Zbce00odg8A')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < data.items.length; i++) {
        
        const genericBooks = data.items[i];
        
        
        const articleTag = document.createElement('article');
        articleTag.classList.add('products');
        articleTag.classList.add('ms-2');

        const imgTag = document.createElement('img');
        imgTag.src = genericBooks.volumeInfo.imageLinks.thumbnail;
        imgTag.classList.add('img-fluid');
        imgTag.alt = "book-image";
        articleTag.appendChild(imgTag);

        const textStartDiv = document.createElement('div');
        textStartDiv.classList.add('text-start');
        articleTag.appendChild(textStartDiv);

        const productHeaderDiv = document.createElement('div');
        productHeaderDiv.classList.add('product-header');
        textStartDiv.appendChild(productHeaderDiv);

        const priceHeaderTag = document.createElement('h4');
        priceHeaderTag.classList.add('h6');
        priceHeaderTag.classList.add('mt-3');
        priceHeaderTag.classList.add('text-wrap')
        priceHeaderTag.innerHTML = genericBooks.volumeInfo.title;
        productHeaderDiv.appendChild(priceHeaderTag);


        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('starRating');
        starRatingDiv.classList.add('mt-2');
        textStartDiv.appendChild(starRatingDiv);

        const spanStarTag1 = document.createElement('span');
        spanStarTag1.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag1);
        const spanStarTag2 = document.createElement('span');
        spanStarTag2.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag2);
        const spanStarTag3 = document.createElement('span');
        spanStarTag3.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag3);
        const spanStarTag4 = document.createElement('span');
        spanStarTag4.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag4);
        const spanStarTag5 = document.createElement('span');
        spanStarTag5.innerHTML = '&#9734;'
        starRatingDiv.appendChild(spanStarTag5);
        
        const priceAndCartDiv = document.createElement('div');
        priceAndCartDiv.classList.add('d-flex');
        priceAndCartDiv.classList.add('justify-content-between');
        priceAndCartDiv.classList.add('align-items-center');
        priceAndCartDiv.classList.add('mt-2');
        priceAndCartDiv.classList.add('gap-3');
        textStartDiv.appendChild(priceAndCartDiv);
        
        const priceSpan = document.createElement('span');
        priceSpan.innerHTML = '299';
        priceAndCartDiv.appendChild(priceSpan)

        const cartButton = document.createElement('button');
        cartButton.innerHTML = 'Add To Cart';
        priceAndCartDiv.appendChild(cartButton);
        
        const genericBooksList4 = document.getElementById('genericBooksList4');
        genericBooksList4.appendChild(articleTag);



    }
})

fetch('https://www.googleapis.com/books/v1/volumes?q=travelling&key=AIzaSyBFnV26Rzfqpgom5Dy0TIq7Zbce00odg8A')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < data.items.length; i++) {
        
        const genericBooks = data.items[i];
        
        
        const articleTag = document.createElement('article');
        articleTag.classList.add('products');
        articleTag.classList.add('ms-2');

        const imgTag = document.createElement('img');
        imgTag.src = genericBooks.volumeInfo.imageLinks.thumbnail;
        imgTag.classList.add('img-fluid');
        imgTag.alt = "book-image";
        articleTag.appendChild(imgTag);

        const textStartDiv = document.createElement('div');
        textStartDiv.classList.add('text-start');
        articleTag.appendChild(textStartDiv);

        const productHeaderDiv = document.createElement('div');
        productHeaderDiv.classList.add('product-header');
        textStartDiv.appendChild(productHeaderDiv);

        const priceHeaderTag = document.createElement('h4');
        priceHeaderTag.classList.add('h6');
        priceHeaderTag.classList.add('mt-3');
        priceHeaderTag.classList.add('text-wrap')
        priceHeaderTag.innerHTML = genericBooks.volumeInfo.title;
        productHeaderDiv.appendChild(priceHeaderTag);


        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('starRating');
        starRatingDiv.classList.add('mt-2');
        textStartDiv.appendChild(starRatingDiv);

        const spanStarTag1 = document.createElement('span');
        spanStarTag1.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag1);
        const spanStarTag2 = document.createElement('span');
        spanStarTag2.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag2);
        const spanStarTag3 = document.createElement('span');
        spanStarTag3.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag3);
        const spanStarTag4 = document.createElement('span');
        spanStarTag4.innerHTML = '&#9733;'
        starRatingDiv.appendChild(spanStarTag4);
        const spanStarTag5 = document.createElement('span');
        spanStarTag5.innerHTML = '&#9734;'
        starRatingDiv.appendChild(spanStarTag5);
        
        const priceAndCartDiv = document.createElement('div');
        priceAndCartDiv.classList.add('d-flex');
        priceAndCartDiv.classList.add('justify-content-between');
        priceAndCartDiv.classList.add('align-items-center');
        priceAndCartDiv.classList.add('mt-2');
        priceAndCartDiv.classList.add('gap-3');
        textStartDiv.appendChild(priceAndCartDiv);
        
        const priceSpan = document.createElement('span');
        priceSpan.innerHTML = '299';
        priceAndCartDiv.appendChild(priceSpan)

        const cartButton = document.createElement('button');
        cartButton.innerHTML = 'Add To Cart';
        priceAndCartDiv.appendChild(cartButton);
        
        const genericBooksList5 = document.getElementById('genericBooksList5');
        genericBooksList5.appendChild(articleTag);



    }
})