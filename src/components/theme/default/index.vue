<template>
  <div class="container">
    <div class="nav">
      <div class="left">
        <div class="logo">
          <img src="../../../assets/image/logo.png" />
          <span>花田婚车花艺</span>
        </div>
        <div class="nav-items">
          <ul>
            <li
              :class="index === itemSelectIndex ? 'nav-items-select' : ''"
              v-for="(item, index) in navItem"
              :key="index"
              @click="navClick(index)"
            >
              <a>{{ item.v }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <!-- <div class="search">
          <i class="fa fa-search"></i>
          <input placeholder="搜索" />
        </div>-->
      </div>
    </div>
    <div class="content">
      <section class="album" v-if="d">
        <div
          href="#"
          class="card"
          v-for="(item, index) in curData"
          :key="index"
        >
          <div class="top">
            <!-- 相册展示组件 -->
            <viewer class="viewer">
              <img
                v-for="(img, index) in item.list"
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
                图集
                <!-- <i class="fa fa-share-alt"></i>分享 -->
                <!-- <i class="fa fa-heart"></i> -->
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
        // 父子组建传值异步，默认渲染花草
        this.curData = this.d[this.navItem[this.itemSelectIndex].k];
      },
      deep: true
    }
  },
  data() {
    return {
      d: {},
      itemSelectIndex: 0,
      navItem: [
        {
          k: "flower",
          v: "花草"
        },
        {
          k: "car",
          v: "婚车"
        }
      ],
      curData: {}
    };
  },
  props: {
    renderData: {
      type: Object
    }
  },
  methods: {
    navClick(index) {
      this.itemSelectIndex = index;
      this.curData = this.d[this.navItem[index].k];
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  .nav {
    padding: 0 30px;
    @media screen and (max-width: 720px) {
      padding: 0 5px;
    }
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .logo {
        display: flex;
        align-items: center;
        span {
          padding-left: 5px;
          font-size: 1rem;
        }
        img {
          width: 48px;
          height: 48px;
        }
      }
      .nav-items {
        ul {
          list-style: none;
          display: flex;
          justify-content: flex-start;
          li {
            @media screen and (max-width: 720px) {
              padding: 0 5px;
            }
            padding-right: 30px;
            &:hover {
              opacity: 0.8;
              cursor: pointer;
            }
            a {
              color: #999;
              line-height: 60px;
              letter-spacing: 1px;
            }
          }
        }
      }
      .nav-items-select {
        color: rgb(74, 17, 180);
      }
    }
    .right {
      @media screen and (max-width: 720px) {
        display: none;
      }
      .search {
        margin-left: 50px;
        padding: 0 10px;
        height: 30px;
        background: #efefef;
        border-radius: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 14px;
        i {
          padding-right: 10px;
        }
        input {
          border: none;
          font-size: 14px;
          background: #efefef;
          outline: none;
        }
      }
    }
  }
  .content {
    padding-top: 20px;
    width: 1024px;
    margin: 0 auto;
    @media screen and (max-width: 720px) {
      width: auto;
    }
    .album {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      align-items: flex-start;
      .card {
        @media screen and (max-width: 720px) {
          max-width: calc(100% - 20px);
        }
        display: flex;
        flex-direction: column;
        max-width: calc(25% - 20px);
        max-height: calc(25% - 20px);
        margin: 0 10px 20px 10px;
        background: #fff;
        padding: 10px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
        .top {
          cursor: pointer;
          img {
            width: 100%;
            height: 100%;
            transform: scale(1);
          }
        }
        .bar {
          height: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .left {
            padding-top: 10px;
            max-width: 70%;
            h5 {
              color: #333;
            }
            h6 {
              color: #999;
            }
          }
          .right {
            .share {
              transition: all 0.5s;
              display: inline-block;
              border: 1px solid #efefef;
              border-radius: 5px;
              font-size: 14px;
              padding: 3px 5px;
              color: #999;
              i {
                padding-right: 5px;
              }
              &:hover {
                cursor: pointer;
                border: 1px solid #9c9c9c;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
}
</style>
