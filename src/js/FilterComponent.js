Vue.component('filter-search', {
	props: ['visibility'],
	template: `
          <form class="page-header__search-form" action="#"
            v-show="visibility">
            <input
							class="page-header__search-field txt-normal" 
							type="text"
							placeholder="Find a product"
							ref="myInput">
          </form> 
  `});