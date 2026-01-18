<template>
  <div class="card window">
    <div class="card-img-top d-flex justify-content-center mt-1">
      <color-box
        :redValue="this.r"
        :greenValue="this.g"
        :blueValue="this.b"
        :size="100"
      ></color-box>
    </div>
    <div class="card-body">
      <div class="card">
        <ul class="list-group">
          <li class="list-group-item">R:{{ r }} G:{{ g }} B:{{ b }}</li>
          <li class="list-group-item">{{ hex }}</li>
          <li class="list-group-item">{{ name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['r', 'g', 'b', 'name', 'hex'],
}
</script>

<style scooped>
.window {
  width: 200px;
}
</style>
