<template>
  <section class="bigpic">
    <div class="pic">
      <img src="~@/assets/img/2.jpeg" alt="" />
    </div>
    <div class="container">
      <h1>{{ movieInfo.title }}</h1>
      <p>{{ movieInfo.intro }}</p>

      <h1>Story</h1>
      <p>{{movieInfo.detail}}</p>

      <h1>Score</h1>
      <p>{{ movieInfo.score }}</p>

      <h1>Reviews</h1>
      <p>{{ movieInfo.review }}</p>

      <h1>Writer</h1>
      <p>{{ movieInfo.writer }}</p>

      <h1>Director</h1>
      <p>{{ movieInfo.director }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
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
  h1 {
    font-size: 25px;
  }
  p {
    font-size: 15px;
  }
}
</style>