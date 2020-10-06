<template>
  <div>
    <div class="home-container">
      <h1>Articles</h1>

      <!-- search display -->

      <!-- cards display -->
      <div class="card-cart-container">
        <div class="card-container">
          <div v-for="(product, index) in products" :key="index" class="card">
            <div class="img-container">
              <img v-bind:src="require('./../assets/img/' + product.img)" />
            </div>

            <div class="card-text">
              <h3>{{ product.description }}</h3>
              <span>{{ product.price }}</span>
            </div>
          </div>
        </div>
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
    };
  },
};
</script>

<style lang="scss" scoped></style>
