<template>
  <div>
    
    <nav class="navbar navbar-inverse" role="navigation">
      <div class="container">
    
        <ul class="nav navbar-nav navbar-right">
            <router-link v-for="(item, index) in menuList"
                        :key="index"
                        :to="item.url"
                        tag="li"
                        >
              <a>{{ item.text }}</a>
            </router-link>
            <li>
              <router-link to="/cart" class="btn btn-success navbar-btn" tag="button">
                Cart <span class="badge">{{ LengthInCart }} </span>
              </router-link>
            </li>
        </ul>
   
      </div>
    </nav>

    <section class="router">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </section>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters('menu', {
        menuList: 'items'
      }),
      ...mapGetters('cart', {
        LengthInCart: 'cnt'
      })
    }
  }
</script>

<style>
.navbar-btn a {
  color: white;
}

.li-pointer {
  cursor: pointer;
}

.li-pointer:hover {
  cursor: pointer;
}

.router {
  margin-top: 60px;
  margin: auto;
}

/*.......................slide........................... */
.slide-enter{

}
.slide-enter-active{
  animation: slideIn 0.6s;
}
.slide-enter-to{

}
.slide-leave{

}
.slide-leave-active{
  animation: slideOut 0.6s;
}
.slide-leave-to{

}
@keyframes slideIn{
  from{transform: rotateY(90deg);}
  to{transform: rotateY(0deg);}
}
@keyframes slideIn{
  from{transform: rotateY(0deg);}
  to{transform: rotateY(90deg);}
}

  
</style>
