<template>
  <div>
    <!-- <div>{{ topicTitle }}</div> -->
    <!-- Topic @ Box -->
    <rate-topic :title="topicTitle" :movieList="listMovie" />
    <button class="btn btn-primary" @click="changePage">Change Page</button>
    <button class="btn btn-primary" @click="changeWatchPage">
      Change WatchPage
    </button>
    <!-- call movieList from RateTopic -->
  </div>
</template>

<script>
import RateTopic from "@/components/common/RateTopic.vue";
import axios from "axios";

export default {
  components: { RateTopic },
  data() {
    //เก็บตัวแปร
    return {
      ratingList: [
        { key: "top_rated", text: "Top Rated" },
        { key: "now_playing", text: "Now Playing" },
        { key: "upcoming", text: "UpComing" },
        { key: "popular", text: "Popular" }
      ],
      listMovie: [], //for movieList in RateTopic
    };
  },
  computed: {
    queryString() {
      const isMatched = this.ratingList.some(
        (a) => a.key == this.$route.query.by
      );
      console.log(isMatched);
      if (this.$route.query.by && isMatched) {
        // $route.query เป็นการฟิกค่าเพื่อนำไปไว้บนลิ้ง query ส่วน by เปลี่ยนได้
        return this.$route.query.by;
      }
      return this.ratingList[0].key; //กำหนดค่า default เริ่มต้น ในตำแหน่ง ratinglist ที่ 0 คือ Top Rate
    },
    topicTitle() {
      // const number = 3;
      // const test = [1,2,3,4,5].find(item => item === number);
      const value = this.ratingList.find((element) => {
        // find หาค่า element ใน Rating list
        console.log("item", element.key, element.text);
        if (this.queryString === element.key) {
          return element;
        }
      });
      // short hand
      // const value = this.ratingList.find((element) => this.queryString === element.key);
      return value?.text;
    },
  },
  mounted() {
    this.getMovieList();
  },
  methods: {
    async getMovieList() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${this.queryString}?api_key=4c352710aeaea02fee5902eb8141ee71&language=en-US`
      );
      this.listMovie = response.data.results;
      console.log(response.data.results, this.listMovie);
    },
    changePage() {
      // this.$router.push({name: "watch", params: });
      this.$router.push({ name: "home" }); //
    },
    changeWatchPage() {
      // this.$router.push({ name: "watch", params: { movieId: 123 } });
      this.$router.push({ name: "watch", params: { movieId: 123 } });
    },
  },
};
</script>

<style scoped>
</style>