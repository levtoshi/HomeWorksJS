const createElement = (element) =>
{
    const productContainer = document.createElement("div");
    productContainer.classList.add("product_container");


    const discountContainer = document.createElement("div");
    discountContainer.classList.add("discount_container");

    const discountText = document.createElement("p");
    discountText.classList.add("discount_text");
    discountText.textContent = element.discountPercentage;

    discountContainer.append(discountText);



    const imageContainer = document.createElement("div");
    imageContainer.classList.add("product_image_container");

    const image = document.createElement("img");
    image.classList.add("product_image");
    image.src = element.thumbnail;

    imageContainer.append(image);



    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category_container");

    const categoryText = document.createElement("p");
    categoryText.classList.add("category_text");
    categoryText.textContent = element.category;

    categoryContainer.append(categoryText);



    const title = document.createElement("p");
    title.classList.add("product_title");
    title.textContent = element.title;

    const description = document.createElement("p");
    description.classList.add("product_description");
    description.textContent = element.description;


    const priceFlex = document.createElement("div");
    priceFlex.classList.add("price-cart_flex");

    const productPrice = document.createElement("p");
    productPrice.classList.add("product-price_text");
    productPrice.textContent = element.price;

    const cartIcon = document.createElement("p");
    cartIcon.classList.add("fa", "fa-shopping-cart");
    cartIcon.addEventListener("click", () => addToCart(element.id));

    priceFlex.append(productPrice, cartIcon);

    productContainer.append(discountContainer, imageContainer, categoryContainer, title, description, priceFlex);

    return productContainer;
};

const renderElements = (arr) => {
    const productContainer = document.querySelector(".wrapper");
    
    arr.forEach((element) => {
        const card = createElement(element);
        productContainer.append(card);
    });
}

export function loadProducts(arr)
{
    renderElements(arr);
}

function addToCart(id) {
    console.log(`Product ${id} added to Cart`);
}