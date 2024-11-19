<script setup lang="ts">
const today = new Date().toDateString().slice(4);



</script>

<template>

  <div flex flex-col h-full>

    <div flex-1></div>
    <div h-300px flex justify-between>
      <div pl-40px>
        <div text="white 26px ">
          <v-chip variant="flat"> Brevity is the soul of write </v-chip>
        </div>
        <div fw-700 text="white 35px">
          Exploring The Wonders of Coding
        </div>
        <span inline-block w-500px text="white 18px">
          If you know what you’re worth, then go out and get what you’re worth.
          But you gotta be willing to take the hit, and not pointing fingers saying you ain’t where you are because of him, or her, or anybody.
        </span>

      </div>
      <div flex flex-col items-end mr-40px>
        <div mt-75px flex items-center>
          <div  w-40px h-40px rounded-full bg="[rgba(900,900,900,0.5)]" items-center flex justify-center >
            <v-icon icon="mdi-github" size="x-large" color="black"></v-icon>
          </div>
          <span ml-8px text="white 18px">Alexiuce's GitPage</span>
        </div>
        <div text="white 16px">
          <span>{{ today }}</span>
          <span > • </span>
          <span> 32 Repositories</span>
        </div>
      </div>

    </div>




  </div>


</template>

<style scoped>

</style>
