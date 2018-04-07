<template>
  <div>
    <nav-header></nav-header>
    <!--影院热映-->
    <section class="movies">
      <div class="container">
        <div class="title">
          <h1>{{movieShow.subject_collection.name}}</h1>
          <router-link to="" class="more">多了</router-link>
        </div>
      </div>
      <ul class="items">
        <li class="item item-movie" v-for="item in movieShow.subject_collection_items">
          <a :href="'https://m.douban.com/movie/subject/'+item.id+'?refer=home'">
            <div class="movie-bg" :style="{backgroundImage:'url('+item.cover.url+')'}"></div>
            <p class="item-title">{{item.title}}</p>
            <div class="block" >
              <el-rate disabled show-text :texts="item.rating?[item.rating.value,item.rating.value,item.rating.value,item.rating.value,item.rating.value]:[]" :value="item.rating?item.rating.value/2:0">12</el-rate>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <!--影院热映-->

    <!--免费在线观影-->
    <section class="movies">
      <div class="container">
        <div class="title">
          <h1>{{movieFree.subject_collection.name}}</h1>
          <router-link to="" class="more">更多</router-link>
        </div>
      </div>
      <ul class="items">
        <li class="item item-movie" v-for="item in movieFree.subject_collection_items">
          <a :href="'https://m.douban.com/movie/subject/'+item.id+'?refer=home'">
            <div class="movie-bg" :style="{backgroundImage:'url('+item.cover.url+')'}"></div>
            <p class="item-title">{{item.title}}</p>
            <div class="block" >
              <el-rate disabled show-text :texts="item.rating?[item.rating.value,item.rating.value,item.rating.value,item.rating.value,item.rating.value]:[]" :value="item.rating?item.rating.value/2:0">12</el-rate>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <!--免费在线观影-->

    <!--新片速递-->
    <section class="movies">
      <div class="container">
        <div class="title">
          <h1>{{movieLast.subject_collection.name}}</h1>
          <router-link to="" class="more">更多</router-link>
        </div>
      </div>
      <ul class="items">
        <li class="item item-movie" v-for="item in movieLast.subject_collection_items">
          <a :href="'https://m.douban.com/movie/subject/'+item.id+'?refer=home'">
            <div class="movie-bg" :style="{backgroundImage:'url('+item.cover.url+')'}"></div>
            <p class="item-title">{{item.title}}</p>
            <div class="block" >
              <el-rate disabled show-text :texts="item.rating?[item.rating.value,item.rating.value,item.rating.value,item.rating.value,item.rating.value]:[]" :value="item.rating?item.rating.value/2:0">12</el-rate>
            </div>
          </a>
        </li>
      </ul>
    </section>
    <!--新片速递-->

    <!--发现好电影-->
    <section class="found">
      <div class="container">
        <h1>发现好电影</h1>
      </div>
      <div class="nav-link">
        <router-link class="red-bg" to="">同时入选IMDB250和豆瓣电影250的电影</router-link>
        <router-link class="green-bg" to="">带你进入不正常的世界</router-link>
        <router-link class="red-bg" to="">用电【影】来祭奠逝去的岁月</router-link>
        <router-link class="yellow-bg" to="">女孩们的故事【电影】</router-link>
        <span class="line"></span>
        <router-link to="" class="green-bg">使用 App 【找电影】功能</router-link>
        <router-link to="" class="blue-bg">科幻是未来的钥匙——科幻启示录【科幻题材】</router-link>
        <router-link to="" class="blue-bg">美国生活面面观</router-link>
        <router-link to="" class="yellow-bg">2015终极期待</router-link>
        <router-link to="" class="green-bg">经典韩国电影——收集100部</router-link>
      </div>
    </section>
    <!--发现好电影-->

    <!--分类浏览-->
    <section class="look-sort">
      <div class="container">
        <h1 class="sort-title">
          分类浏览
        </h1>
        <ul class="sort-ul">
          <li v-for="item in sorts">
            <router-link to="">{{item}}<span class="next-data" v-show="item!=''">	&gt;</span></router-link>
          </li>
        </ul>
      </div>
    </section>
    <!--分类浏览-->
    <div style="height: 100px"></div>
  </div>
</template>
<style>
  .movies .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    margin: 0 .4rem;
  }
  .movies h1 {
    margin: 0.2rem 0;
    font-size: 0.34rem;
    font-weight: normal;
  }
  .movies .more {
    font-size: 0.28rem;
    color: #42bd56;
  }
  .movies .items {
    display: flex;
    overflow-x: auto;
    text-align: center;
  }
  .movies .item-movie {
    margin-left: 0.16rem;
  }
  .item:first-child {
    margin-left: 0.4rem;
  }
  .item:last-child {
    padding-right: 0.4rem;
  }
  .item-movie p {
    margin: 0.06rem 0px 0px;
    font-size: 0.28rem;
    width: 2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .movies .items::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
  }
  .movies .movie-bg {
    width: 2rem;
    height: 2.84rem;
    background-repeat: no-repeat;
    background-size: cover;
  }
  /*found*/
  .found .nav-link {
    display: block;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0px 0px 0px 0.4rem;
    font-size: 0.28rem;
  }
  .found h1 {
    margin: 0.4rem 0px 0.24rem;
    font-size: 0.32rem;
    font-weight: normal;
  }
  .found .nav-link::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
  }
  .red-bg {
    border:0.01rem solid #CC3344;color:#CC3344;
  }
  .green-bg{
    border:0.01rem solid #42BD56;color:#42BD56;
  }
  .blue-bg {
    border:0.01rem solid #2384E8;color:#2384E8;
  }
  .yellow-bg{
    border:0.01rem solid #FFC46C;color:#FFC46C;
  }
  .found a.router-link-exact-active.router-link-active {
    display: inline-block;
    padding: 0.12rem 0.4rem;
    white-space: nowrap;
    border-radius: 0.1rem;
  }
  .found .line {
    display: block;
    width: 100%;
    height: 0.01rem;
    border: 0;
    margin: 0.12rem 0;
  }
  /*look-sort*/
  .look-sort h1{
    margin: 0.4rem 0 0.2rem;
    padding: 0 0;
    font-size: 0.28rem;
    font-weight: normal;
  }
  .look-sort .sort-ul {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .look-sort li {
    width: 50%;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    padding: 12px 18px;
  }
  .look-sort li:nth-child(1){
    border-top: 1px solid #eee;
  }
  .look-sort li:nth-child(2){
    border-top: 1px solid #eee;
  }
  .look-sort li:nth-child(even){
    border-left: 1px solid #eee;
  }
  .look-sort a {
    color: #42bd56;
    font-size: 14px;
  }
  .look-sort .next-data {
    float: right;
  }
  i.el-rate__icon.el-icon-star-on {
    font-size: 0.24rem;
  }
  span.el-rate__item {
    width: 0.24rem;
  }
  span.el-rate__text {
    margin-left: 0.1rem;
    color: #aaa !important;
  }
</style>
<script>
    import NavHeader from '@/components/NavHeader.vue';

    export default {
        data() {
            return {
              url: {
                movieShow: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?os=windows&start=0&count=8&loc_id=108288&_=15097596',
                movieFree: 'https://m.douban.com/rexxar/api/v2/subject_collection/movie_free_stream/items?os=windows&start=0&count=8&loc_id=108288&_=1509759679402',
                movieLast:'https://m.douban.com/rexxar/api/v2/subject_collection/movie_latest/items?os=windows&start=0&count=8&loc_id=108288&_=1509759679402',
              },
              value: 3,
              movieShow:{subject_collection:'影院热映'},//影院热映
              movieFree:{subject_collection:'免费在线观影'},//在线免费
              movieLast:{subject_collection:'新片速递'},//最新上线
              sorts:[
                '经典','冷门佳片','豆瓣高分','动作','喜剧','爱情','悬疑','恐怖','科幻','治愈','文艺','成长',
                '动画','华语','欧美','韩国','日本',''
              ]
            }
        },
      components:{NavHeader},
      mounted:function () {
        this.getMoviesShow();//获取影院热映
        this.getMoviesFree();//获取在线免费
        this.getMoviesLast();//获取最新上线
      },
      methods: {
        getMoviesShow() {
          this.$http.jsonp(this.url.movieShow).then(function(res){
            console.log(res.data);
            this.movieShow = res.data;
            this.getImage(this.movieShow.subject_collection_items);
          }).catch((err)=>{
            console.log(err);
          });
        },
        getMoviesFree() {
          this.$http.jsonp(this.url.movieFree).then(function(res){
            console.log(res.data);
            this.movieFree = res.data;
            this.getImage(this.movieFree.subject_collection_items);
          }).catch((err)=>{
            console.log(err);
          });
        },
        getMoviesLast() {
          this.$http.jsonp(this.url.movieLast).then(function(res){
            console.log(res.data);
            this.movieLast = res.data;
            this.getImage(this.movieLast.subject_collection_items);
          }).catch((err)=>{
            console.log(err);
          });
        },
        getImage:function(movies){
          // 把现在的图片连接传进来，返回一个不受限制的路径
          for(let i of movies){
            if(i.cover.url !== undefined){
              i.cover.url = i.cover.url.replace(/http\w{0,1}:\/\//g,'https://images.weserv.nl/?url=');
            }
          }
        },
        change(value){
          console.log('3');
        }
      }
    }
</script>
