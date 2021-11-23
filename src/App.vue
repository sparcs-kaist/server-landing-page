<template>
  <div id="app">
    <div class="top-banner">
      <div class="container">
        <Navbar :name="content.name"></Navbar>
        <Banner :content="content"></Banner>
      </div>
      <WaveBackground></WaveBackground>
    </div>
    <div class="container">
      <DetailsWrapper title="Services" :subtitle="`현재 SPARCS ${content.name} 서버에서 운영중인 서비스들입니다.`">
        <ServiceInfo v-for="item in content.services" :key="item.name" :serviceInfo=item> </ServiceInfo>
      </DetailsWrapper>
      <DetailsWrapper title="Specs" :subtitle="`${content.name} 서버의 상세 스펙입니다.`">
        <SpecInfo :spec="content.spec"></SpecInfo>
      </DetailsWrapper>
    </div>
    <Footer></Footer>
<!--     <img alt="Vue logo" :src="content.logo_url"> -->
  </div>
</template>

<script>
import contents from './assets/contents'
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
import WaveBackground from './components/WaveBackground.vue'
import DetailsWrapper from './components/DetailsWrapper.vue'
import ServiceInfo from './components/ServiceInfo.vue'
import SpecInfo from './components/SpecInfo.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data(){
    return ({
      content: contents[location.host.split(":")[0].split(".")[0]] ?? contents['localhost']
    })
  },
  components:{
    Navbar,
    Banner,
    WaveBackground,
    DetailsWrapper,
    ServiceInfo,
    SpecInfo,
    Footer
  },
  mounted(){
    document.title = this.content.name
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Raleway:wght@700&display=swap');

.container{
  max-width: 1400px;
  margin: 0 auto;
}
.top-banner{
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
  color:white;
}
#app {
  font-family: 'Raleway', 'Nanum Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
