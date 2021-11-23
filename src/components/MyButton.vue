<!-- button from https://getcssscan.com/css-buttons-examples -->
<template>
    <button class="button-34" role="button" @click="openlink(link)">{{name}}</button>
</template>

<script>
export default {
    name: "MyButton",
    props: {
        name: {},
        link: {}
    },
    methods: {
        openlink(link){
            window.open(link, '_blank')
        }
    }

}
</script>

<style>

/* CSS */
.button-34 {
  background: #ff6f00;
  border-radius: 999px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1em;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
}
</style>