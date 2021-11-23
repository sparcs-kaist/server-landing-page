<template>
    <div class="banner-container">
        <div class="banner-left">
            <h1>{{content.name}}<br>Server</h1>
            <h4>{{content.desc}}</h4>
            <MyButton :name="content.link_name" :link="content.link" v-if="content.link"></MyButton>
        </div>
        <div class="banner-right">
            <img :src="parseAsset(content.logo_url)" :alt="content.name">
        </div>
    </div>  
</template>

<script>
import MyButton from './MyButton.vue';
export default {
    name: "Banner",
    props: {
      content: {}
    },
    methods: {
      parseAsset(url){
        if(url && url[0] === "/"){
          return require(`@/assets${url}`)
        }
        return url
      }
    },
    components: {
      MyButton,
    }
}
</script>

<style>
.banner-container{
  display: flex;
  flex-direction: row;
  padding: 30px;
}
.banner-left{
  padding: 30px 60px;
  flex-basis: 60%;
  text-align: left;
}
.banner-left > h1 {
  font-size: 3.5em;
  margin-bottom: 40px;
  position: relative;
}
.banner-right{
  flex-basis: 40%;
}
.banner-right > img {
  position: relative;
  top: 50%;
  width: 80%;
  height: 80%;
  object-fit: contain;
  transform: translateY(-50%);
}
@media (max-width: 768px) {
  .banner-left {
    padding: 30px 0;
    text-align: center;
  }
  .banner-right > img {
    padding: 30px 0;
    position: relative;
    width: 60%;
    height: 60%;
    max-width: 300px;
    object-fit: contain;
    transform: translateY(0%);
  }
  .banner-container{
      flex-direction: column;
  }
}
@media (max-width: 480px){
  .banner-left > h1 {
    font-size: 2.5em;
  }
}
</style>