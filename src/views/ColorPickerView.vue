<template>
  <div class="d-flex justify-content-center">
    <color-box
      :redValue="this.redValue"
      :greenValue="this.greenValue"
      :blueValue="this.blueValue"
      :size="300"
    ></color-box>
  </div>
  <div>
    <p>#{{ hexColor }}</p>
  </div>
  <div class="pt-3 d-flex justify-content-center">
    <form>
      <div class="form-group row">
        <span class="input-group col">
          <span class="input-group-text bg-danger text-white">Red</span>
          <input
            type="number"
            class="form-control"
            :placeholder="this.redValue"
            v-model.number="redValue"
            min="0"
            max="255"
          />
        </span>
        <span class="input-group col">
          <span class="input-group-text bg-success text-white">Green</span>
          <input
            type="number"
            class="form-control"
            :placeholder="this.greenValue"
            v-model.number="greenValue"
            min="5"
            max="255"
          />
        </span>
        <span class="input-group col">
          <span class="input-group-text bg-primary text-white">Blue</span>
          <input
            type="number"
            class="form-control"
            :placeholder="this.blueValue"
            v-model.number="blueValue"
            min="0"
            max="255"
          />
        </span>
      </div>
    </form>
  </div>
  <div>
    <h2 v-if="presets.length > 0" class="mt-2 mb-2">Presets</h2>
    <div class="d-flex flex-wrap">
      <color-card
        v-for="color in presets"
        :key="color.hex"
        v-bind="color"
        @click="setColor(color.r, color.g, color.b)"
        class="ms-1 me-1 mt-1 clickable"
      ></color-card>
    </div>
  </div>
</template>

<script>
function decToHex(number) {
  if (number > 255) return 'ff'
  if (number < 0) return '00'
  let hexString = number.toString(16)
  if (hexString.length < 2) hexString = '0' + hexString
  return hexString
}
export default {
  data() {
    return {
      redValue: 200,
      greenValue: 0,
      blueValue: 0,
      presets: [],
    }
  },
  computed: {
    hexColor() {
      return decToHex(this.redValue) + decToHex(this.greenValue) + decToHex(this.blueValue)
    },
  },
  methods: {
    setColor(r, g, b) {
      this.redValue = r
      this.greenValue = g
      this.blueValue = b
    },
  },
  async mounted() {
    fetch('https://mocki.io/v1/1f7cabaf-f411-4133-996c-06ced0416149')
      .then((response) => {
        if (response.ok) {
          response.json().then((colors) => (this.presets = colors))
        }
      })
      .catch((err) => console.error(err))
  },
}
</script>

<style scooped>
input {
  max-width: 300px;
}
p {
  margin: 5px;
  text-align: center;
  font-size: 20px;
}
.clickable {
  cursor: pointer;
}
</style>
