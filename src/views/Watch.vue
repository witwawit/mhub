<template>
  <section class="bigpic">
    <div class="pic">
      <img :src="displayImage(mocking.backdrop_path)" alt="" />
    </div>
    <p>{{ movieId }}</p>
    <div class="container">
      <h1>{{ mocking.original_title }}</h1>
      <p>{{ mocking.overview }}</p>

      <h1>Release Date</h1>
      <p>{{ mocking.release_date }}</p>

      <h1>Type</h1>
      <p>
        {{ genres }}
        <!-- {{ mocking.genres[0].name }}, {{ mocking.genres[1].name }},
        {{ mocking.genres[2].name }} -->
      </p>

      <h1>Production Countries</h1>
      <p>{{ mocking.production_countries[0].name }}</p>

      <h1>Companies</h1>
      <p>
        {{ companies }}
      </p>

      <h1>Score</h1>
      <p>{{ mocking.vote_average }} / 10</p>
    </div>
  </section>
</template>

<script>
import movieMock from "@/data/movie-mock";
import { displayImage } from "@/helper/image.helper.js";
import axios from "axios";
export default {
  data() {
    return {
      mocking: movieMock,
    };
  },
  computed: {
    movieId() {
      return this.$route.params.movieId;
    },
    genres() {
      return this.mocking.genres
        .map((obj) => {
          return obj.name;
        })
        .join(", "); //เป็นการเอาไปคั่นเพื่อเอาelementอื่นไปค่อ
    },
    companies() {
      return this.mocking.production_companies
        .map((obj) => obj.name) //short hand
        .join(", ");
    },
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/337404?api_key=4c352710aeaea02fee5902eb8141ee71&language=en-US"
      )
      .then((response) => {
        console.log(response);
      });
  },
  methods: {
    displayImage,
  },
};
</script>

<style scoped>
section {
  background: #363636;
  padding-bottom: 40px;
}
h1,
p {
  color: #fec926;
  padding: 20px;
  font-weight: 400;
}
p {
  font-size: 20px;
}
img {
  margin-bottom: 20px;
  width: 100%;
}
@media (max-width: 550px) {
  section {
    background: #fec926;
  }
  h1,
  p {
    color: #363636;
    padding: 10px;
  }
  p {
    font-weight: 15px;
  }
  h1 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
  }
}
</style>