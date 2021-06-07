<template>
  <div>
    <!-- navbar -->
    <nav-bar />

		<!-- footer -->
		<custom-foot />
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar";
import CustomFoot from "@/components/common/CustomFoot";

export default {
  components: { NavBar, CustomFoot },
  setup() {},
};
</script>

<style scoped>
</style>