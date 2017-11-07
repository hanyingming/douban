<template>
    <div>
      <nav-header></nav-header>
      <!--导航选择部分-->
      <section id="nav-btn">
        <div class="container">
          <ul>
            <li>
              <a href="https://m.douban.com/movie/nowintheater?loc_id=108288">影院热映</a>
            </li>
            <li>
              <a href="https://m.douban.com/tv/chinese/">近期值得看的国产剧</a>
            </li>
            <li>
              <a id="hot-topics" href="https://m.douban.com/time/?dt_time_source=douban-msite_shortcut">豆瓣时间</a>
            </li>
            <li>
              <a href="https://www.douban.com/doubanapp/app?channel=card_home&amp;direct_dl=1">使用豆瓣App</a>
            </li>
          </ul>
        </div>
      </section>
      <!--导航选择部分-->

      <!--推荐信息部分-->
      <section id="recommend-list">
        <div class="container">
          <ul>
            <li v-for="item in recommends.recommend_feeds">
              <a href="#">
                <div class="item">
                  <div class="item-left">
                    <h1>{{item.title}}</h1>
                    <p class="detail">{{item.target.desc}}</p>
                  </div>
                  <div class="item-right">
                    <img :src="item.target.cover_url" alt="">
                  </div>
                </div>
                <div class="info-bar">
                  <div class="author">
                    by&nbsp;<span>{{item.target.author.name}}</span>
                  </div>
                  <span class="feed-label" v-if="item.theme != null">{{item.source_cn}}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <!--推荐信息部分-->
    </div>
</template>
<style>
  .container {
    margin: 0 0.4rem;
  }
  #nav-btn ul {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  #nav-btn li {
    height:0.88rem;
    line-height: 0.88rem;
    width: 48%;
    background: #F6F6F6;
    text-align: center;
    margin-top: 0.2rem;
  }
  #nav-btn a {
    font-size: 0.30rem;
    color: #494949;
  }
  #recommend-list ul {
    margin-top: 0.50rem;
  }
  #recommend-list li {
    padding: 0.2rem;
    border-bottom: 1px solid #eee;
    margin-top: 0.2rem;
  }
  #recommend-list .item {
    display: flex;
    justify-content: space-between;
  }
  #recommend-list .item-left {
    padding-right: 0.2rem;
  }
  #recommend-list .item-right {
    width: 46%;
  }
  #recommend-list h1 {
    margin: 0 0;
    padding: 0 0;
    font-size: 0.32rem;
    font-weight: normal;
    color: #1c1c1c;
  }
  #recommend-list .detail {
    font-size: 0.24rem;
  }
  #recommend-list img {
    width: 1.64rem;
    height: 1.64rem;
  }
  #recommend-list .info-bar {
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
  }
</style>
<script>
  import NavHeader from '@/components/NavHeader.vue';
  export default {
    data() {
      return {
        url: {
          recommend: 'https://m.douban.com/rexxar/api/v2/recommend_feed?alt=json&next_date=&loc_id=108288&gender=&birthday=&udid=9fcefbf2acf1dfc991054ac40ca5114be7cd092f&for_mobile=1',

        },
        recommends: [],

      }
    },
    mounted: function () {
      this.getRecommend();
    },
    components: {
      NavHeader
    },
    methods: {
      getRecommend() {
        this.$http.jsonp(this.url.recommend).then(function(res){
          console.log(res.data);
          this.recommends = res.data;
          this.getImage(this.recommends.recommend_feeds);
        }).catch((err)=>{
          console.log(err);
        });
      },
      getImage:function(datas){
        // 把现在的图片连接传进来，返回一个不受限制的路径
        for(let i of datas){
          if(i.target.cover_url !== undefined){
            i.target.cover_url = i.target.cover_url.replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=');
          }
        }
      },
    }
  }
</script>
