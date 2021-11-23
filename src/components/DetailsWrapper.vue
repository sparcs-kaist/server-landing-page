<template>
  <div class="detail-wrapper">
      <h1> {{title}} </h1>
      <h3> {{subtitle}}</h3>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'DetailsWrapper',
    props: {
        title: {},
        subtitle: {},
    }
}
</script>

<style>
.detail-wrapper{
    padding: 20px 60px;
}
@media (max-width: 768px){
    .detail-wrapper{
        padding: 12px 40px;
    }
}
</style>