// ---New collections---
 fetch('https://www.googleapis.com/books/v1/volumes?q=literature&key=AIzaSyBFnV26Rzfqpgom5Dy0TIq7Zbce00odg8A')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < 8; i++) {
        const bookList = data.items[i];
        
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('col-sm-6');
        columnDiv.classList.add('col-lg-4');
        columnDiv.classList.add('col-xl-3');
        columnDiv.classList.add('gy-4');
        
        const articleTag = document.createElement('article');
        articleTag.classList.add('products');
        columnDiv.appendChild(articleTag);
        
        const imgTag = document.createElement('img');
        imgTag.src = bookList.volumeInfo.imageLinks.thumbnail;
        imgTag.classList.add('img-fluid');
        imgTag.alt = 'book-img';
        articleTag.appendChild(imgTag);

        const productHeaderDiv = document.createElement('div');
        productHeaderDiv.classList.add('product-header');
        articleTag.appendChild(productHeaderDiv);

        

        const priceHeaderTag = document.createElement('h6');
        priceHeaderTag.classList.add('h6');
        priceHeaderTag.classList.add('mt-2')
        priceHeaderTag.innerHTML = bookList.volumeInfo.title
        productHeaderDiv.appendChild(priceHeaderTag)
        

        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('starRating');
        starRatingDiv.classList.add('mt-2');
        articleTag.appendChild(starRatingDiv);

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
        articleTag.appendChild(priceAndCartDiv);

        const priceSpan = document.createElement('span');
        priceSpan.innerHTML = '299';
        priceAndCartDiv.appendChild(priceSpan)
        
        const cartButton = document.createElement('button');
        cartButton.innerHTML = 'Add To Cart';
        priceAndCartDiv.appendChild(cartButton);
        console.log(columnDiv)
      

        const bookCollection = document.getElementById('bookCollection');
        bookCollection.appendChild(columnDiv);      
    }
})
.catch( (error) => console.error("Invalid API" +error));



//---Best sellers---
fetch('https://www.googleapis.com/books/v1/volumes?q=bestsellerstories&key=AIzaSyBFnV26Rzfqpgom5Dy0TIq7Zbce00odg8A')
.then ((response) => response.json())
.then((data) => {
    for (let i = 0; i < 8; i++) {
        const bookList = data.items[i];
        
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('col-sm-6');
        columnDiv.classList.add('col-lg-4');
        columnDiv.classList.add('col-xl-3');
        columnDiv.classList.add('gy-4');
        
        const articleTag = document.createElement('article');
        articleTag.classList.add('products');
        columnDiv.appendChild(articleTag);
        
        const imgTag = document.createElement('img');
        imgTag.src = bookList.volumeInfo.imageLinks.thumbnail;
        imgTag.classList.add('img-fluid');
        imgTag.alt = 'book-img';
        articleTag.appendChild(imgTag);

        const productHeaderDiv = document.createElement('div');
        productHeaderDiv.classList.add('product-header');
        articleTag.appendChild(productHeaderDiv);

        const priceHeaderTag = document.createElement('h6');
        priceHeaderTag.classList.add('h6');
        priceHeaderTag.classList.add('mt-2')
        priceHeaderTag.innerHTML = bookList.volumeInfo.title
        productHeaderDiv.appendChild(priceHeaderTag)
        
        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('starRating');
        starRatingDiv.classList.add('mt-2');
        articleTag.appendChild(starRatingDiv);

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
        articleTag.appendChild(priceAndCartDiv);

        const priceSpan = document.createElement('span');
        priceSpan.innerHTML = '299';
        priceAndCartDiv.appendChild(priceSpan)
        
        const cartButton = document.createElement('button');
        cartButton.innerHTML = 'Add To Cart';
        priceAndCartDiv.appendChild(cartButton);

        const bestSellerCollections = document.getElementById('bestSellerCollections');
        bestSellerCollections.appendChild(columnDiv);
        
    }

});

//---Popular Books---
fetch('https://www.googleapis.com/books/v1/volumes?q=popularStories&key=AIzaSyBFnV26Rzfqpgom5Dy0TIq7Zbce00odg8A')
.then((response) => response.json())
.then((data) => {
    for (let i = 0; i < 8; i++) {
        const bookList = data.items[i];
        
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('col-sm-6');
        columnDiv.classList.add('col-lg-4');
        columnDiv.classList.add('col-xl-3');
        columnDiv.classList.add('gy-4');
        
        const articleTag = document.createElement('article');
        articleTag.classList.add('products');
        columnDiv.appendChild(articleTag);
        
        const imgTag = document.createElement('img');
        imgTag.src = bookList.volumeInfo.imageLinks.thumbnail;
        imgTag.classList.add('img-fluid');
        imgTag.alt = 'book-img';
        articleTag.appendChild(imgTag);

        const productHeaderDiv = document.createElement('div');
        productHeaderDiv.classList.add('product-header');
        articleTag.appendChild(productHeaderDiv);

        const priceHeaderTag = document.createElement('h6');
        priceHeaderTag.classList.add('h6');
        priceHeaderTag.classList.add('mt-2')
        priceHeaderTag.innerHTML = bookList.volumeInfo.title
        productHeaderDiv.appendChild(priceHeaderTag)
        
        const starRatingDiv = document.createElement('div');
        starRatingDiv.classList.add('starRating');
        starRatingDiv.classList.add('mt-2');
        articleTag.appendChild(starRatingDiv);

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
        articleTag.appendChild(priceAndCartDiv);

        const priceSpan = document.createElement('span');
        priceSpan.innerHTML = '299';
        priceAndCartDiv.appendChild(priceSpan)
        
        const cartButton = document.createElement('button');
        cartButton.innerHTML = 'Add To Cart';
        priceAndCartDiv.appendChild(cartButton);

        const bookPopular = document.getElementById('popularCollection');
        bookPopular.appendChild(columnDiv);
        
    }
})

