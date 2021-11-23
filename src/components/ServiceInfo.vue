<template>
  <div class="si-container">
      <div class="img-wrapper">
          <img src="https://sparcs-public.s3.ap-northeast-2.amazonaws.com/SPARCS_Branding/0_Symbol/Symbol.svg" alt="">
          <span>{{serviceInfo.name}}</span>
      </div>
      <div class="desc-wrapper">
          <div>{{serviceInfo.desc}}</div>
          <a v-for="link in serviceInfo.links" :href="link" target="_blank" :key="link">{{link}}</a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ServiceInfo',
    props: {
        serviceInfo: {}
    }
}
</script>

<style>
.si-container{
    display: flex;
    margin: 60px 10px;
}

.img-wrapper{
    flex-basis: 30%;
    display: flex;
    gap: 10px;
    justify-content: center;
}
.img-wrapper > img {
    width: 25px;
}
.img-wrapper > span {
    font-size: 2em;
    margin: auto 0;
    color: #ffa000;
    font-weight: bold;
}
.desc-wrapper{
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
}
.desc-wrapper > div {
    margin: auto 0;
    font-weight: bold;
}
a {
    margin-left: 6px;
    text-decoration:none !important;
    color: #03a9f4;
    word-break: break-all;
}

@media (max-width: 768px){
    .si-container {
        flex-direction: column;
    }
    .img-wrapper {
        padding: 16px;
    }
}
</style>