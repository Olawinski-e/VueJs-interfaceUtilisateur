<template>
  <div>
    <div class="home-container">
      <h1>Articles</h1>

      <!-- search display -->
      <input
        v-model="searchKey"
        type="search"
        id="search"
        placeholder="Search.."
        autocomplete="off"
      />
      <span v-if="searchKey && filteredList.length >= 1">
        {{ filteredList.length }} result<span v-if="filteredList.length >= 2"
          >s</span
        >
      </span>

      <div v-for="(product, inde) in liked" :key="inde">
        {{ product }}
      </div>

      <!-- cards display -->
      <div class="card-cart-container">
        <div class="card-container">
          <div
            v-for="(product, index) in filteredList"
            :key="index"
            class="card"
          >
            <div class="img-container">
              <img v-bind:src="require('./../assets/img/' + product.img)" />
            </div>

            <div class="card-text">
              <h3>{{ product.description }}</h3>
              <span>{{ moneyFormat(product.price) }}</span>
            </div>

            <div class="card-icons">
              <div class="like-container">
                <input
                  v-bind:id="product.id"
                  type="checkbox"
                  name="checkbox"
                  :value="product"
                  v-model="liked"
                  @click="setLikes(product)"
                />
                <label v-bind:for="product.id">
                  <i class="fas fa-heart"></i>
                </label>
              </div>

              <div class="add-to-cart">
                <button @click="addToCart(product)">
                  <i class="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- no result message -->
        <div v-if="filteredList.length == []" class="no-result">
          <h3>Sorry</h3>
          <p>no result found...</p>
        </div>

        <!-- cart display  -->
        <transition name="cart-anim">
          <div v-if="cart.length > 0" class="shopping-cart" id="shopping-cart">
            <h2>Cart</h2>

            <transition-group name="item-anim" tag="div" class="item-group">
              <div
                v-for="(product, index) in cart"
                :key="product.id"
                class="item"
              >
                <div class="img-container">
                  <img v-bind:src="require('./../assets/img/' + product.img)" />
                </div>

                <div class="item-description">
                  <h4>{{ product.description }}</h4>
                  <p>{{ moneyFormat(product.price) }}</p>
                </div>

                <div class="item-quantity">
                  <h6>quantity : {{ product.quantity }}</h6>

                  <div class="cart-icons">
                    <button @click="cartPlusOne(product)">
                      <i class="fa fa-plus"></i>
                    </button>
                    <button @click="cartMinusOne(product, index)">
                      <i class="fa fa-minus"></i>
                    </button>
                    <button @click="cartRemoveItem(index)">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="grand-total">
                <div class="total">
                  <h2>Total</h2>
                  <h2>{{ moneyFormat(cartTotalAmount) }}</h2>
                </div>
                <h6>Total articles: {{ itemTotalAmount }}</h6>
              </div>
            </transition-group>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      products: [
        {
          id: 1,
          description: "Quarz Luxe",
          price: 12,
          img: "quarz-luxe.jpg",
        },
        {
          id: 2,
          description: "Curren Business",
          price: 20,
          img: "curren-business.jpg",
        },
        {
          id: 3,
          description: "Curren Sport",
          price: 5,
          img: "curren-sport.jpg",
        },
        {
          id: 4,
          description: "Jaragar Racing",
          price: 8,
          img: "jaragar-racing.jpg",
        },
        {
          id: 5,
          description: "Liges Hommes",
          price: 3,
          img: "liges-hommes.jpg",
        },
        {
          id: 6,
          description: "Maserati Mechanical",
          price: 65,
          img: "maserati-mechanical.jpg",
        },
        {
          id: 7,
          description: "Montre Mecanique",
          price: 25,
          img: "montre-mecanique.jpg",
        },
        {
          id: 8,
          description: "Brand Designer",
          price: 28,
          img: "brand-designer.jpg",
        },
        {
          id: 9,
          description: "Relogio Masculino",
          price: 4,
          img: "relogio-masculino.jpg",
        },
        {
          id: 10,
          description: "Tissot Multifunction",
          price: 29,
          img: "tissot-multifunction.jpg",
        },
        {
          id: 11,
          description: "Hip Hop Gold",
          price: 87,
          img: "hiphop-gold.jpg",
        },
        {
          id: 12,
          description: "Mesh Genova",
          price: 6,
          img: "mesh-genova.jpg",
        },
      ],
      searchKey: "",
      liked: [],
      cart: [],
    };
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total += this.cart[item].quantity * this.cart[item].price;
      }
      return total;
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal += this.cart[item].quantity;
      }
      return itemTotal;
    },
  },
  methods: {
    moneyFormat(price) {
      return "$" + price;
    },
    setLikes(product) {
      for (let i = 0; i < this.liked.length; i++) {
        if (this.liked[i].id === product.id) {
          const index = this.liked.indexOf(product);
          return this.liked.splice(index, 1);
        }
      }
      this.liked.push(product);
    },
    addToCart(product) {
      // check if already in cart
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++;
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1,
      });
    },
    cartPlusOne(product) {
      product.quantity = product.quantity + 1;
    },
    cartMinusOne(product, index) {
      if (product.quantity == 1) {
        this.cartRemoveItem(index);
      } else {
        product.quantity = product.quantity - 1;
      }
    },
    cartRemoveItem(index) {
      this.$delete(this.cart, index);
    },
  },
};
</script>

<style lang="scss" scoped></style>
