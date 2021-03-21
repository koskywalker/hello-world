<template>
  <div>
    <p>width: clamp(500px, 50%, 800px);</p>
    <div ref="box" class="box">width: <span>{{targetWidth}}px</span></div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      targetWidth: 0
    }
  },
  mounted () {
    this.getTargetWidth()
    window.addEventListener('resize', this.getTargetWidth)
  },
  methods: {
    getTargetWidth () {
      const target = this.$refs.box
      this.targetWidth = target.clientWidth
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  align-items: center;
  background-color: gray;
  color: white;
  display: flex;
  font-size: 2rem;
  font-weight: 700;
  height: 200px;
  justify-content: center;
  margin: 0 auto;
  width: clamp(500px, 50%, 800px);
}

.box span {
  color: yellow;
}
</style>
