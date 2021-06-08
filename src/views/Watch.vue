<template>
  <div>
    <!-- navbar -->
    <nav-bar />
    <!-- bigpic -->
    <watch-detail />
    <!-- footer -->
    <custom-foot />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import CustomFoot from "@/components/common/CustomFoot";
import WatchDetail from "@/components/common/WatchDetail";

export default {
  components: { NavBar, CustomFoot, WatchDetail },
  setup() {},
};
</script>

<style scoped>

</style>