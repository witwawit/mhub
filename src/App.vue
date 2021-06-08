<template>
  <div>
    <nav-bar />
    <router-view />
    <custom-foot />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import CustomFoot from "@/components/common/CustomFoot";

export default {
  components: { NavBar, CustomFoot },
  name: "App",
};
</script>

<style lang="scss">
//
</style>
