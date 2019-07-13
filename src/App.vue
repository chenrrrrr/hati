<template>
  <div id="app">
    <theme :renderData="renderData"></theme>
  </div>
</template>

<script>
import theme from "./components/theme/default/index";
export default {
  name: "app",
  data() {
    return {
      renderData: {}
    };
  },
  components: {
    theme
  },
  methods: {
    async getConfData() {
      let [src, res] = [{}, ""];
      src = await this.$http.get("./conf.yml");
      try {
        res = this.$Y.safeLoad(src.data);
      } catch (e) {
        console.log(e);
      }
      return res;
    }
  },
  async mounted() {
    this.renderData = await this.getConfData();
  }
};
</script>
