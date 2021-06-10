<template>
  <div>
    <!-- corousel test -->
    <new-corou />
    <!-- foryou -->
    <section class="foryou">
      <div class="max-width">
        <div class="title">
          <h3>FOR YOU</h3>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
          <div
            v-for="item in posterList"
            :key="`l-${item.id}`"
            class="col-12 col-sm-6 col-lg-3"
          >
            <movie-box :poster="item.poster_path" :movieId="item.id"></movie-box>
            <!-- <movie-box poster="/M7SUK85sKjaStg4TKhlAVyGlz3.jpg"></movie-box> -->
          </div>
        </div>

        <div class="d-grid gap-2"></div>
      </div>
    </section>

    <!-- rating -->
    <rate-list></rate-list>
  </div>
</template>

<script>
import MovieBox from "@/components/common/MovieBox";
import RateList from "@/components/common/RateList";
import NewCorou from "@/components/common/NewCorou.vue";

import { displayImage } from "@/helper/image.helper.js";
import trendList from "@/data/trend-list.json";

export default {
  components: { MovieBox, RateList, NewCorou },

  data() {
    return {
      trends: trendList,
    };
  },
  computed: {
    posterList() {
      const filter = this.trends.results.filter((element, index) => index < 8);
      // const mapping = filter.map((element) => {
      //   // console.log(element.poster_path, index);
      //   return element.poster_path;
      // });

      // const mapping2 = filter.map((element) => {
      //   return displayImage(element.poster_path);
      // });
      // console.log(mapping,mapping2);
      return filter;
    },
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
.title {
  padding: 30px;
}
h3 {
  font-size: 30px;
  color: #fec926;
  font-weight: 400;
}

/* responsive */
/* @media (max-width: 919px) {
  .list a {
    width: 250px;
    height: 200px;
  }
} */
@media (max-width: 550px) {
  .bigpic {
    width: 100%;
    height: 400px;
    margin-bottom: 50px;
  }
}
</style>