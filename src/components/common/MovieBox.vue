<template>
  <div class="movie-box">
    <router-link :to="{
      name: 'watch',
      params: {
        movieId: movieId
      }
    }"
      ><img :src="displayImage(poster)" alt=""
    /></router-link>
  </div>
</template>

<script>
import { displayImage } from "@/helper/image.helper";

export default {
  props: {
    poster: { type: String, default: "" },
    movieId: { type: Number, required: true },
  },
  methods: {
    displayImage,
  },
};
</script>

<style scoped>
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.movie-box {
  background: coral;
  height: 360px;
  margin: 15px;
  transition: 0.3s ease;
  /* scss */
  /* &:hover {
    cursor: pointer;
    transform: scale(1.1);
  } */
}
.movie-box:hover {
  cursor: pointer;
  transform: scale(1.1);
}
@media (max-width: 550px) {
  .movie-box {
    width: 350px;
    height: 250px;
    margin: auto;
    margin-bottom: 30px;
  }
}
</style>