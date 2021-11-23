<template>
  <div class="spec-container">
      <p>CPU: {{spec.cpu}}</p>
      <p v-if="spec.gpu">GPU: {{spec.gpu}}</p>
      <p>RAM: {{spec.ram}}</p>
      <p v-if="spec.hdd">HDD: {{spec.hdd}}</p>
      <p v-if="spec.ssd">SSD: {{spec.ssd}}</p>
      <p>OS: {{spec.os}}</p>
  </div>
</template>

<script>
export default {
    name: "SpecInfo",
    props:{
        spec: {},
        name: {}
    }
}
</script>

<style>
.spec-container {
    padding-left: 20px;
}
</style>>