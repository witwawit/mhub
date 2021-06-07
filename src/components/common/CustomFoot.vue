<template>
  <footer>
    <div class="logo">
      <a href=""><i class='bx bxl-facebook'></i></a>
      <a href=""><i class='bx bxl-instagram' ></i></a>
      <a href=""><i class='bx bxl-twitter' ></i></a>
      <a href=""><i class='bx bxl-youtube' ></i></a>
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
footer .logo i{
  font-size: 40px;
  margin: 15px;
  padding-top: 25px;
  transition: 0.3s ease;
  color: #363636;
}
footer .logo i:hover {
  transform: scale(1.1);
}
@media (max-width: 550px) {
  footer {
    background: #363636;
  }
  footer p {
    color: #fec926;
  }
  footer .logo i{
    color: #fec926;
    font-size: 30px;
  }
}

</style>