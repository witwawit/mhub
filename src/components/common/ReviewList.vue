<template>
  <section class="review">
    <div class="max-width d-flex justify-content-center">
      <div class="left">
        <div class="imgc">
          <img :src="displayImage(pix)" alt="" />
        </div>
      </div>

      <div class="right">
        <!-- <h2>{{comments.author}}</h2> -->
        <h2>{{ username }}</h2>
        <p v-show="!isShowmore">{{ rev | shorttext(500) }}</p><!-- rev = value , 500 = limit -->
        <p v-show="isShowmore">{{ rev }}</p><!-- v-show คล้ายๆ display none -->
        <button v-if="rev.length > 500" @click="toggler">
					<!-- v-if = if else หากข้อความที่นำมาเกินค่าที่กำหนด ถึงจะแสดงปุ่มนี้ -->
          {{ buttonText }}
        </button>
        <p>{{ createAt }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { displayImage } from "@/helper/image.helper"; //s1

export default {
  data() {
    return {
      isShowmore: false,
    };
  },
  filters: { //only in vue2
    shorttext(value, limit) {
      if (value) {
        return value.substring(0, limit);
      }
    },
  },
  props: {
    comments: {
      type: Object,
      default: () => {},
    },
    username: {
      type: String,
      default: "",
    }, //comment กับ username เลือกได้ว่าจะเอาแบบไหน
    date: {
      type: String,
      default: "",
    }, //date จะได้เวลาที่เป็นตัวอ่านยากมาเราจึงต้องนำไป compute ในยรรืัดที่ 44 คือการ new Date()
    rev: {
      type: String,
      dafault: "",
    },
    pix: {
      type: String,
      default: "",
    },
  },
  computed: {
    createAt() {
      return new Date(this.date);
    },
    buttonText() {
      return this.isShowmore ? "Show Less" : "Read More";
    },// สลับปุ่ม  show less , read more
  },
  methods: {
    displayImage,

    toggler() {
      this.isShowmore = !this.isShowmore;
    },
  }, 
};
</script>

<style scoped>
.max-width {
  background: white;
  width: 80%;
  /* flex-wrap: wrap; */
}
.left {
  float: left;
}
.right {
  float: right;
}
.left .imgc {
  width: 200px;
  height: 200px;
  margin: 2em;
  border: solid 2px;
  border-radius: 50%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
h2,
p {
  color: black;
  margin: 50px;
}
button {
  border: none;
  background: none;
  font-size: 20px;
  font-family: "prompt";
  color: black;
  font-weight: 500;
  transition: 0.3s ease;
  margin-left: 50px;
}
button:hover {
  color: grey;
}
h2 {
  font-size: 20px;
  padding-top: 10px;
}
@media (max-width: 845px) {
  .max-width {
    flex-wrap: wrap;
  }
}
@media (max-width: 550px) {
  p {
    font-size: 12px;
  }
  .left .imgc {
    width: 150px;
    height: 150px;
  }
  h2,
  p {
    margin: 0 50px 50px 50px;
  }
}
</style>