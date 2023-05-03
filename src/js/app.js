const app = new Vue({
  el: "#app",
  data: {
    showSearch: false,
    products: [],
    filtered: [],
    error: true
  },

  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          // console.log(error)
          this.$refs.error.text = error;
        })
    },

    postJson(url, data) {
      return fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          // console.log(error)
          this.$refs.error.text = error;
        })
    },

    putJson(url, data) {
      return fetch(url, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(result => result.json())
        .catch(error => {
          // console.log(error)
          this.$refs.error.text = error;
        })
    },

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
        document.body.classList.add('scroll-lock');

        this.$refs.pageHeader.classList.add('active');
        this.$refs.searchActive.classList.add('active');
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
        document.body.classList.remove('scroll-lock');

        this.$refs.pageHeader.classList.remove('active');
        this.$refs.searchActive.classList.remove('active')
      }
    },

    navToggle() {
      this.$refs.navBtn.classList.toggle('active');
      this.$refs.navDropdown.classList.toggle('active');
      this.$refs.pageHeader.classList.toggle('active');
      this.$refs.backdrop
        .classList.toggle('backdrop-show__active');
      document.body.classList.toggle('scroll-lock');
    },
  },
  mounted() {
    this.getJson(`/api/products`)
      .then(data => {
        for (let item of data) {
          this.products.push(item);
          this.filtered.push(item);
        }
      });
  }
})

