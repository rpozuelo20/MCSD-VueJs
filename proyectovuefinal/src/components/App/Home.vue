<template>
  <div>
    <h1>This is home.</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
      dignissimos corrupti quod iste? Eligendi culpa aspernatur nesciunt labore
      eos cum rem, et ducimus tenetur hic corporis quia, maxime id autem?
    </p>
    <div class="container">
      <div
        class="row row-cols-auto justify-content-center text-light fw-bold fs-3"
      >
        <div
          v-for="box in boxes"
          :key="box"
          class="
            border
            m-2
            bg-success
            d-flex
            align-items-center
            justify-content-center
            boxes
          "
        >
          {{ box }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      boxes: 100,
    };
  },
};
</script>

<style scoped>
.boxes {
  width: 100px;
  height: 100px;
}
</style>
