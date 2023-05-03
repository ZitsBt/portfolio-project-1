Vue.component('products', {
  props: ['products'],
  template: `
            <ul class="catalog-items">
              <product 
                v-for="item of products.slice(0, 6)" 
                :product="item" 
                :key="item.id_product"
                @add-product="$parent.$refs.shoppingCart.addProduct">
              </product>
            </ul>`
});

Vue.component('product', {
  props: ['product'],
  template: `
            <li class="catalog-item-box">
              <article class="catalog-item">
                <a class="catalog-item__link" href="#">
                  <div class="catalog-item__preview">
                    <img 
                      class="catalog-item__preview-img" 
                      :src="product.image" 
                      :alt="product.product_name" />
                  </div>
                  <div class="catalog-item__info txt-normal">
                    <h3 class="catalog-item__heading">
                      {{product.product_name}}
                    </h3>
                    <p class="catalog-item__text txt-light">
                      {{product.description}}
                    </p>
                    <p class="catalog-item__price">\${{ product.price }}</p>
                  </div>
                </a>
                <button class="catalog-item__btn txt-normal"
                  @click="$emit('add-product', product)">
                  <span class="catalog-item__btn-text">Add to cart</span>
                </button>
              </article>
            </li>`
});



