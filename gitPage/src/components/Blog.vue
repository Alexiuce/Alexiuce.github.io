<script setup lang="ts">


import { ref} from "vue";
import {useBlogData} from "@/stores/blog";

const blogList = useBlogData()

const clickedCard = (cardIndex:number, fn:()=>void) => {
  fn()
  console.log('card clicked');
}

</script>

<template>

  <div h-full flex flex-col bg-white>
    <div ml-10px flex flex-col>
      <span text="black 32px" fw-900 >Blog</span>
      <span text="#3a3a3a 20px">Here, we shared some coding tips, or highly recommend titles those inspired your next adventure.</span>
    </div>

    <div>
      <v-banner class="my-4" color="deep-purple-accent-4" icon="mdi-atom-variant" lines="one">
        <v-banner-text fw-700>Develop and Code Tips</v-banner-text>
        <template v-slot:actions><v-btn class="text-none">More</v-btn></template>
      </v-banner>
      <v-sheet class="mx-auto">
        <v-slide-group  class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="(blog,index) in blogList" :key="index" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card  :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200" width="200" @click="clickedCard(index,toggle)">
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <div relative w-full h-full>
                    <v-chip mt-8px ml-8px variant="flat" :color="blog.color" >{{ blog.title }}</v-chip>
                    <v-img absolute :width="200" aspect-ratio="1" cover :src="blog.image"></v-img>
<!--                    <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>-->

                  </div>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>

    <div>
      <v-banner class="my-4" color="deep-purple-accent-4" icon="mdi-paw" lines="one">
        <v-banner-text fw-700>Develop and Code Tips</v-banner-text>
        <template v-slot:actions><v-btn class="text-none">More</v-btn></template>
      </v-banner>
      <v-sheet class="mx-auto">
        <v-slide-group  class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="(blog,index) in blogList" :key="index" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card  :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200" width="200" @click="clickedCard(index,toggle)">
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <div relative w-full h-full>
                    <v-chip mt-8px ml-8px variant="flat" :color="blog.color" >{{ blog.title }}</v-chip>
                    <v-img absolute :width="200" aspect-ratio="1" cover :src="blog.image"></v-img>
                    <!--                    <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>-->

                  </div>
                </v-scale-transition>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </div>

  </div>


</template>

<style scoped lang="scss">


</style>
