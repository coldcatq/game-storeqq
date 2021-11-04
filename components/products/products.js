class Products{
    render(){
        let htmlCatalog = ''
        CATALOG.forEach(({ id, name, img , price}) => {
            htmlCatalog +=` 
            <li class="products__element">
                <img class="products__element--img" src = "${img} " />
                <h4 class="products__element--name">${name} </h4>
                <div class="products__element--footer">
                    <p class="products__element--price">${price.toLocaleString()} com. </p>
                    <button class="products__element--btn">В корзину </button>
                </div>
            </li>
        `
        })
        const html = `
        <ul class="products__container">
            ${htmlCatalog}
        </ul>

        `
        ROOT_PRODUCTS.innerHTML = html 
    }
}

const productsPage = new Products()
productsPage.render()