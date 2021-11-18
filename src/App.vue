<template>
  <div id="app">
    <van-notice-bar>请 fork 此示例，并重现你的问题</van-notice-bar>
    <van-button class="my-button" type="primary">{{ getState }}</van-button>
  </div>
</template>

<script>
export default {
  name: "App",
  asyncComputed: {
    getState() {
      return this.test();
    },
  },
  methods: {
    async test() {
      const $loading = this.$toast.loading({
        duration: 0,
        message: "加载中",
      });
      await this.test1();
      $loading.clear();
      return [];
    },
    async test1() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("-----");
          resolve();
        }, 2000);
      });
    },
  },
};
</script>

<style>
.my-button {
  margin: 15px;
}
</style>
