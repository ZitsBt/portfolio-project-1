const app = new Vue({
  el: "#app",
  data: {
    showSearch: false
  },

  methods: {
    focusSearchActive() {
      if (this.showSearch === false) {
        this.showSearch = !this.showSearch;

        //В данный момент метод пустышка, так как без него не работает из-за 
        //display: none; на форме
        setTimeout(() => {
          this.$refs.focinput.$refs.myInput.focus();
        }, 0);

        this.$refs.backdrop
          .classList.add('backdrop-show__active');

        this.$refs.pageHeader.classList.add('active');
        this.$refs.searchActive.classList.add('active')
      }
    },

    focusSearchClose() {
      if (this.showSearch !== false) {
        this.showSearch = !this.showSearch;

        //Здесь не нужно, так как у элементов стоит display: block;
        // setTimeout(() => {
        //   this.$refs.focinput.$refs.myInput.blur();
        //   this.$refs.focinput.$refs.myInput.value = "";
        // }, 0);

        this.$refs.focinput.$refs.myInput.blur();
        this.$refs.focinput.$refs.myInput.value = "";

        this.$refs.backdrop
          .classList.remove('backdrop-show__active');

        this.$refs.pageHeader.classList.remove('active');
        this.$refs.searchActive.classList.remove('active')
      }
    },

    navToggle() {
      this.$refs.navBtn.classList.toggle('active');
      this.$refs.navDropdown.classList.toggle('active');
      this.$refs.pageHeader.classList.toggle('active');
    },

    cartToggle() {
      this.$refs.cartBtn.classList.toggle('active');

    }
  }

})

