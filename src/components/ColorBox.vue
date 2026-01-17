<template>
  <div class="picker-box" :style="{ width: `${size + 20}px` }">
    <div
      :style="{
        minWidth: `${size}px`,
        maxWidth: `${size}px`,
        height: `${size}px`,
        backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`,
      }"
    ></div>
  </div>
</template>

<script>
export default {
  props: ['redValue', 'greenValue', 'blueValue', 'size'],
}
</script>

<style scooped>
.picker-box {
  display: flex;
  justify-content: center;
  border: 1px gray solid;
  border-radius: 3px;
  padding: 10px;

  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
