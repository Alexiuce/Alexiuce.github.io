<script setup lang="ts">


import HomeInfo from "@/components/HomeInfo.vue";
import Blog from "@/components/Blog.vue";
import {reactive, ref, shallowRef} from "vue";

const Titles = ['Home','Blog','History','About']


const clickedTitleIndex = (index:number) => {
  currentSelectedButtonIndex.value = index
  switch (index) {
    case 1: currentComponent.value = Blog;break;
    default: currentComponent.value = HomeInfo
  }

}
const currentComponent = shallowRef(HomeInfo)
const currentSelectedButtonIndex = ref(0)

</script>

<template>

  <div class="container-view" flex flex-col w-full h-full>
    <img src="@/assets/images/welcom-top.jpg" fixed  w-full h-full z--1 object-cover  alt="background"/>
    <!--    header -->
    <div h-80px w-full class="glass" justify-between>
      <div>
        <v-btn ml-40px  class="text-none" :variant="currentSelectedButtonIndex === index ? 'tonal':'text'" v-for="(item,index) in Titles" :key="index" @click="clickedTitleIndex(index)">
          {{ item }}
        </v-btn>
      </div>

      <div flex >
        <v-btn  ml-40px h-full class="text-none" variant="text"><v-icon icon="mdi-web"></v-icon>Language</v-btn>
        <v-divider vertical color="success" :thickness="2"  class="border-opacity-25"></v-divider>
        <v-btn   h-full class="text-none" variant="text">Theme</v-btn>
      </div>

    </div>


    <div flex-1>

      <component :is="currentComponent" />

    </div>



  </div>


</template>


<style scoped lang="scss">

.glass {
  background: rgba(255, 255, 255, 0.05); /* 半透明背景 */
  backdrop-filter: blur(10px); /* 毛玻璃模糊效果 */
  //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 阴影 */
  display: flex;
  align-items: center;

}

</style>
