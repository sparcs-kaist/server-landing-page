<template>
    <div class="navbar">
        <img src="https://sparcs-public.s3.ap-northeast-2.amazonaws.com/SPARCS_Branding/1_SPARCS/SPARCS.png" @click="openlink('https://sparcs.org')">
        <span>{{name}}</span>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  props:{
      name: {}
  },
  methods: {
    openlink(link){
      window.open(link, '_blank')
    }
  }
}
</script>

<style>
.navbar > img{
  margin: 0 20px;
}
.navbar > span {
  font-size: 1.5em;
  margin: auto 0;
  font-weight: bold;
  color: #ffb300;
}
.navbar{
  width: 100%;
  height: 40px;
  padding: 10px 0;
  display: flex;
  flex-direction: row;
}
@media (max-width: 480px){
    .navbar > span {
      font-size: 1em;
    }
}
</style>