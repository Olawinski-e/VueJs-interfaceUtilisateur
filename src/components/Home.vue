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
              <img v-bind:src="product.img" />
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
          img: "/img/quarz-luxe.abb2923e.jpg",
        },
        {
          id: 2,
          description: "Curren Business",
          price: 20,
          img: "/img/curren-business.aa8f2165.jpg",
        },
        {
          id: 3,
          description: "Curren Sport",
          price: 5,
          img: "/img/curren-sport.7a0c9f6d.jpg",
        },
        {
          id: 4,
          description: "Jaragar Racing",
          price: 8,
          img: "/img/jaragar-racing.c6677fe1.jpg",
        },
        {
          id: 5,
          description: "Liges Hommes",
          price: 3,
          img: "/img/liges-hommes.2cc68015.jpg",
        },
        {
          id: 6,
          description: "Maserati Mechanical",
          price: 65,
          img: "/img/maserati-mechanical.6e0c208c.jpg",
        },
        {
          id: 7,
          description: "Montre Mecanique",
          price: 25,
          img: "/img/montre-mecanique.479c1093.jpg",
        },
        {
          id: 8,
          description: "Brand Designer",
          price: 28,
          img: "/img/brand-designer.fd8ee953.jpg",
        },
        {
          id: 9,
          description: "Relogio Masculino",
          price: 4,
          img: "/img/relogio-masculino.f593914c.jpg",
        },
        {
          id: 10,
          description: "Tissot Multifunction",
          price: 29,
          img: "/img/tissot-multifunction.59f8fae8.jpg",
        },
        {
          id: 11,
          description: "Hip Hop Gold",
          price: 87,
          img: "/img/hiphop-gold.9f366bdf.jpg",
        },
        {
          id: 12,
          description: "Mesh Genova",
          price: 6,
          img: "/img/mesh-genova.36039d46.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
