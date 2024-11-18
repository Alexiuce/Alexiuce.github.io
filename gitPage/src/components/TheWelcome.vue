<script setup lang="ts">

const Titles = ['Home','Archives','History','Welcome']


const dateString = new Date().toLocaleDateString('zh-CN');


</script>

<template>

  <div class="container-view" w-full h-full>
    <img src="@/assets/images/welcom-top.jpg" fixed  w-full h-full z--1 object-cover  alt="background"/>

<!--    header -->
    <div h-80px w-full class="glass" justify-between>
      <div>
        <v-btn ml-40px h-full variant="text" v-for="(item,index) in Titles" :key="index">{{ item }}</v-btn>
      </div>

      <div flex >
        <v-btn  ml-40px h-full variant="text">Language </v-btn>
        <v-divider vertical color="success" :thickness="2"  class="border-opacity-25"></v-divider>
        <v-btn   h-full variant="text">Theme </v-btn>
      </div>



    </div>

  </div>


</template>

<style scoped lang="scss">

.glass {
  background: rgba(255, 255, 255, 0.05); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 毛玻璃模糊效果 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影 */
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
}


</style>
