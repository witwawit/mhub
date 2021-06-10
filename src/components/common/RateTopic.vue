<template>
  <div>
    <section>
      <div class="max-width">
        <div class="d-flex flex-wrap justify-content-center">
          <h1>{{ title }}</h1>
        </div>
        <div class="eiei d-flex flex-wrap justify-content-center">
          <div
            v-for="item in movieList"
            :key="`k-${item.id}`"
            class="col-12 col-md-6 col-lg-3"
          >
            <router-link
              :to="{ name: 'watch', params: { movieId: item.id } }"
              class="box2"
            >
              <img :src="displayImage(item.poster_path)" />
              <!-- image is in item.poster_path  -->
            </router-link>
            <p>{{ item.original_title }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import movieMock from "@/data/movie-mock";
import { displayImage } from "@/helper/image.helper.js";

export default {
  props: {
    title: {
      type: String,
      default: "Top Rates",
    },
    movieList: {
      type: Array,
      default: () => [], //type =arr เพราะรับค่าหนังมาหลายค่า
    },
  },
  data() {
    return {
      mocking: movieMock,

      list: [
        "Percy Jackson",
        "Pirates of the Carribbean",
        "Avatar",
        "KingsMan",
        "Harry Potter",
        "Star Wars",
        "Kimetsu No Yaiba",
        "Ready Player One",
      ],
    };
  },
  methods: {
    displayImage,
  },
  components: {},
  setup() {},
};
</script>

<style scoped>
section {
  background: #363636;
}
h1 {
  color: #fec926;
  font-weight: 500;
  padding-top: 40px;
}
.eiei {
  padding: 2rem;
}
.box2 {
  margin: 20px;
  background: cornsilk;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  opacity: 50%;
  transition: 0.3s ease;
}
.box2:hover {
  cursor: pointer;
  opacity: 100%;
}
p {
  margin: 20px;
  color: #fec926;
}
img {
  /* max-width: 100%;
  max-height: 100%; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 550px) {
  section {
    background: #fec926;
  }
  h1 {
    color: #363636;
    padding-top: 40px;
    font-weight: 400;
  }
  p {
    color: #363636;
  }
}
</style>