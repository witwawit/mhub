<template>
  <footer>
    <div class="logo">
      <a href=""><img src="~@/assets/img/fb.png" /></a>
      <a href=""><img src="~@/assets/img/ig.png" /></a>
      <a href=""><img src="~@/assets/img/tw.png" /></a>
      <a href=""><img src="~@/assets/img/yo.png" /></a>
      <!-- <i class='bx bxl-facebook'></i> -->
    </div>

    <div class="cr">
      <p>2021 - 2021 by Mhub.com, Inc.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 150px;
  background: #fec926;
  display: block;
}
footer .logo,
footer .cr {
  display: flex;
  justify-content: center;
}
footer .logo img {
  width: 40px;
  margin: 15px;
  padding-top: 25px;
  transition: 0.3s ease;
}
footer .logo img:hover {
  transform: scale(1.1);
}
@media (max-width: 550px) {
  footer {
    background: #363636;
  }
  footer p {
    color: #fec926;
  }
}

</style>