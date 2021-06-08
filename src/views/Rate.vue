<template>
  <div>
    <!-- <div>{{ topicTitle }}</div> -->
    <!-- Topic @ Box -->
    <rate-topic :title="topicTitle"/>
  </div>
</template>

<script>
import RateTopic from "@/components/common/RateTopic.vue";

export default {
  components: { RateTopic },
  data() {
    return {
      ratingList: [
        { key: "top", text: "Top Rates" },
        { key: "recent", text: "Most Recent" },
        { key: "view", text: "Most View" },
        { key: "like", text: "Most Like" },
      ]
    };
  },
  computed: {
    queryString() {
			if (this.$route.query.by) { // $route.query เป็นการฟิกค่าเพื่อนำไปไว้บนลิ้ง query ส่วน by เปลี่ยนได้ 
				return this.$route.query.by;
			}
      return this.ratingList[0].key; //กำหนดค่า default เริ่มต้น ในตำแหน่ง ratinglist ที่ 0 คือ Top Rate
    },
    topicTitle() {
			// const number = 3;
			// const test = [1,2,3,4,5].find(item => item === number);
      const value = this.ratingList.find((element) => { // find หาค่า element ใน Rating list 
        console.log("item", element.key, element.text);
        if (this.queryString === element.key) { 
          return element;
        }
      });
			// short hand
			// const value = this.ratingList.find((element) => this.queryString === element.key);
      return value?.text;
    },
  }
};
</script>

<style scoped>
</style>