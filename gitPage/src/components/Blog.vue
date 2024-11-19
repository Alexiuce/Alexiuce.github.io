<script setup lang="ts">


import { ref} from "vue";

const model = ref()

</script>

<template>

  <div h-full flex flex-col bg-white>
    <div ml-10px flex flex-col>
      <span text="black 32px" fw-900 >Blog</span>
      <span text="#605D5D 24px">Here, we shared some coding tips, or highly recommend titles those inspired your next adventure.</span>
    </div>


    <div>
      <v-sheet class="mx-auto">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
            <v-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200" width="100" @click="toggle">
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
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
