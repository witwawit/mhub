<template>
  <section v-if="!loading" class="bigpic">
    <div v-if="movieInfo.backdrop_path" class="pic">
      <img :src="displayImage(movieInfo.backdrop_path)" alt="" />
    </div>
    <div class="container">
      <h1>{{ movieInfo.original_title }}</h1>
      <p>{{ movieInfo.overview }}</p>

      <h1>Release Date</h1>
      <p>{{ movieInfo.release_date }}</p>

      <h1>Type</h1>
      <p>
        {{ genres }}
        <!-- {{ movieInfo.genres[0].name }}, {{ movieInfo.genres[1].name }},
        {{ movieInfo.genres[2].name }} -->
      </p>

      <h1>Production Countries</h1>
      <p>{{ productionCountries }}</p>

      <h1>Companies</h1>
      <p>
        {{ companies }}
      </p>

      <h1>Score</h1>
      <p>{{ movieInfo.vote_average }} / 10</p>

      <h1>Reviews</h1>
    </div>

    <div
      v-for="review in movieReview"
      :key="`m-${review.id}`"
      class="col-12 col-sm-12 col-lg-12"
    >
      <!-- s5 -->
      <review-list
        :comments="review"
        :username="review.author"
        :date="review.created_at"
        :rev="review.content"
        :pix="review.author_details.avatar_path"
      ></review-list
      ><!-- s6 -->
      <!-- ส่งค่า review ที่เป็น Object ไปให้ค่า comments -->
    </div>
  </section>
</template>

<script>
// import movieMock from "@/data/movie-mock";
import ReviewList from "@/components/common/ReviewList.vue";
import { displayImage } from "@/helper/image.helper.js";
import reviewMock from "@/data/review-mock.json"; //s3
import axios from "axios";

export default {
  components: { ReviewList },

  data() {
    return {
      movieInfo: {},
      movieReview: {}, //step1
      loading: false,

      reviews: reviewMock.results, //s4 .result because object ประกาศเพื่อให้นำไปใช้ใน template ได้

    };
  },

  computed: {
    productionCountries() {
      return this.movieInfo.production_countries
        ? this.movieInfo.production_countries.map((nob) => nob.name).join(", ")
        : "";
    },
    movieId() {
      return this.$route.params.movieId;
    },
    genres() {
      return this.movieInfo.genres
        ? this.movieInfo.genres
            .map((obj) => {
              return obj.name;
            })
            .join(", ") //เป็นการเอาไปคั่นเพื่อเอาelementอื่นไปค่อ เอ
        : "";
    },
    companies() {
      return this.movieInfo.production_companies
        ? this.movieInfo.production_companies
            .map((obj) => obj.name) //short hand
            .join(", ")
        : "";
    },
  },
  mounted() {
    this.getResource();
    this.getCommentList();//ต้องเรียกใช้
    console.log("this.$route", this.$route);
    console.log("this.$router", this.$router);
  },
  methods: {
    displayImage,
    async getResource() {
      console.log("getResource");
      this.loading = true;
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.movieId}?api_key=4c352710aeaea02fee5902eb8141ee71&language=en-US`
      );
      this.loading = false;
      console.log(response.data);
      this.movieInfo = response.data;
    },

    async getCommentList() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.movieId}/reviews?api_key=4c352710aeaea02fee5902eb8141ee71&language=en-US&page=1`
      );
      this.movieReview = response.data.results;//sstep3
      console.log(response)
    },
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