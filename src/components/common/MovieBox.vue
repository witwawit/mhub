<template>
  <div class="movie-box"><a href="#"></a></div>
</template>

<style scoped>
.movie-box {
  height: 360px;
  background: #eed589;
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
  .movie-box{
    width: 350px;
    margin: auto;
    margin-bottom: 30px;
  }
}
</style>