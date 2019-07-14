<template>
  <div class="container">
    <div class="nav">
      <div class="left">
        <div class="logo">
          <img src="../../../assets/image/logo.png" />
          <span>记录美好瞬间</span>
        </div>
      </div>
    </div>
    <div class="content">
      <section class="album" v-if="d">
        <div class="card" v-for="(item, index) in d.album" :key="index">
          <div class="top">
            <!-- 相册展示组件 -->
            <viewer class="viewer">
              <img
                v-for="(img, index) in item.images"
                :style="{ display: index === 0 ? 'block' : 'none' }"
                :src="img.link"
                :key="index"
                :alt="img.title"
              />
            </viewer>
          </div>
          <div class="bar">
            <div class="left">
              <h5 class="ellipsis">{{ item.title }}</h5>
              <h6 class="ellipsis">{{ item.des }}</h6>
            </div>
            <div class="right">
              <a class="share">
                {{
                item.images.length > 1 ? `${item.images.length}张` : `1张`
                }}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    renderData: {
      handler(n) {
        this.d = n;
      },
      deep: true
    }
  },
  data() {
    return {
      d: {}
    };
  },
  props: {
    renderData: {
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/assets/less/theme/default/index.less";
</style>
