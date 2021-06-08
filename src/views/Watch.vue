<template>
  <section class="bigpic">
    <div class="pic">
      <img src="~@/assets/img/2.jpeg" alt="" />
    </div>
    <div class="container">
      <h1>{{ mocking.original_title }}</h1>
      <p>{{ mocking.overview }}</p>

      <h1>Release Date</h1>
      <p>{{ mocking.release_date }}</p>

      <h1>Type</h1>
      <p>
        {{ mocking.genres[0].name }}, {{ mocking.genres[1].name }},
        {{ mocking.genres[2].name }}
      </p>

      <h1>Production Countries</h1>
      <p>{{ mocking.production_countries[0].name}}</p>

      <h1>Companies</h1>
      <p>
        {{ mocking.production_companies[0].name }},
        {{ mocking.production_companies[1].name }},
      </p>

      <h1>Score</h1>
      <p>{{ mocking.vote_average }} / 10</p>
    </div>
  </section>
</template>

<script>
import movieMock from "@/data/movie-mock";

export default {
  data() {
    return {
      mocking: movieMock,
      movieInfo: {
        title: "Percy Jackson",
        intro: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        consequatur nam vero quibusdam quos reprehenderit, maxime, hic delectus
        repudiandae nesciunt possimus vitae quam ducimus, similique eaque sed
        maiores blanditiis quidem atque natus porro aut. Distinctio quo veniam,
        repudiandae facilis laborum beatae est ut voluptate corrupti debitis
        unde, ducimus nemo quis similique. Ducimus adipisci perferendis
        aspernatur itaque unde nostrum explicabo magnam nihil exercitationem
        voluptatum repellat doloremque, magni eos eius, repudiandae quidem aut
        provident voluptates, debitis dolore soluta beatae. Sequi ipsum eaque
        quis rem hic voluptates iste laboriosam quibusdam, veniam consequatur
        praesentium, cumque doloribus minus magni amet aperiam cum dignissimos
        aspernatur? Atque.`,
        detail: "Detail",
        review: "Reviews",
        score: "Score",
        writer: "Writer",
        director: "Director",
      },
    };
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
p{
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
  p{
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