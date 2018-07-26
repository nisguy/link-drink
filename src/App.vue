<template>
  <v-app>
    <v-navigation-drawer
      temporary
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      dark
    >
      <v-list dense>
          <img src="https://client.pona.app/img/logo.6c7979fd.svg" class="drawer-logo">
        <v-list-tile value="true" @click="">
          <v-list-tile-action>
            <v-icon>bubble_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Welcome</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile value="true" @click="">
          <v-list-tile-action>
            <v-icon>location_on</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Where we are located</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-container><v-divider></v-divider></v-container>
        <v-list-tile-action>
            <v-icon>business_center</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Job Openings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      <v-container><v-divider></v-divider></v-container>
        <!-- Home -->
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>business_center</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Job Openings</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <nav>
        <v-layout>
          <v-flex>
            <div class="logo" @click="goHome">
              <img src="./assets/logo.png">
            </div>

            <ul>
              <li><v-text-field
              style="max-width: 200px"
              class="search"
              placeholder="Search..."
              single-line
              append-icon="search"
              :append-icon-cb="() => {}"
              color="red"
              hide-details
              :dark="scrolled"
              ></v-text-field></li>
              <li class="topnav-centered-left"><v-tooltip bottom><v-btn slot="activator" fab @click.stop="drawer = !drawer"><v-icon>keyboard_arrow_left</v-icon></v-btn><span>Who we are</span></v-tooltip></li>
              <li class="topnav-centered-right"><v-tooltip bottom><v-btn slot="activator" fab @click.stop="rightDrawer = !rightDrawer"><v-icon>keyboard_arrow_right</v-icon></v-btn><span>Alcohol categories</span></v-tooltip></li>
              <li><a href="#" class="active">Call Us</a></li>
              <li><a href="#" class="listItem">Home</a></li>
              <li><v-badge right class="navButtons" style="cursor: pointer"><span slot="badge">6</span>
                <v-icon class="hoverRed" large color="grey lighten-1">shopping_cart</v-icon></v-badge>
              </li>
            </ul>
          </v-flex>
        </v-layout>

    </nav>
    <section class="sec1"></section>
    <section class="sec2">

    </section>
    <section class="sec3"></section>
    <section class="sec4"></section>
    <section class="sec5"></section>

    <v-content>
      <v-container>
        <div class="bb">
          <v-tabs
                  v-model="show"
                  class="mt-3 tabs"
                  color="transparent"
                  slider-color="white"
                  grow
          >
            <v-tab active-class="tabs__item--active active" @click="goToTopSellers">Top sellers</v-tab>
            <v-tab active-class="tabs__item--active active" @click="goAbout">Drinks on offer</v-tab>
            <v-tab active-class="tabs__item--active active">Popular Brands</v-tab>
            <v-tab active-class="tabs__item--active active">New drinks</v-tab>
          </v-tabs>
        </div>
        <v-tabs-items v-model="show">
          <v-tab-item
                  v-for="n in 4"
                  :key="n"
          >
              <h2 class="description" v-if="n==1">Hot on the shelves!</h2>
              <h2 class="description" v-if="n==2">Pick of the month!</h2>
              <h2 class="description" v-if="n==3">On everyone's lips!</h2>
              <h2 class="description" v-if="n==4">What's new you ask?!</h2>

          </v-tab-item>
        </v-tabs-items>

      </v-container>
      <transition name="slide" mode="out-in">
        <router-view/>
      </transition>
    </v-content>
    <v-navigation-drawer
      temporary
      :right = "rightSide"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>bubble_chart</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>LINK YOUR DRINKS</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          prepend-icon="add_circle_outline"
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Alcohol categories</v-list-tile-title>
          </v-list-tile>

              <v-list-group
                sub-group
                no-action>
                <v-list-tile slot="activator">
                  <v-btn icon>
                    <v-avatar size="32px">
                      <img src="./assets/drinks/whisky.jpg">
                    </v-avatar>
                  </v-btn>
                  <v-list-tile-title>Whisky</v-list-tile-title>
                </v-list-tile>

                  <v-list-group>
                    <v-list-tile slot="activator">
                      <v-list-tile-title>Types</v-list-tile-title>
                    </v-list-tile>
                  </v-list-group>
                  <v-list-group>
                    <v-list-tile slot="activator">
                      <v-list-tile-title>Popular</v-list-tile-title>
                    </v-list-tile>
                  </v-list-group>
                  <v-list-group>
                    <v-list-tile slot="activator">
                      <v-list-tile-title>Expensive</v-list-tile-title>
                    </v-list-tile>

                  </v-list-group>

              </v-list-group>

              <v-list-group
                  sub-group
                  no-action>
                  <v-list-tile slot="activator">
                    <v-btn icon>
                      <v-avatar size="32px">
                        <img src="./assets/drinks/wine.jpg">
                      </v-avatar>
                    </v-btn>
                    <v-list-tile-title>Wine</v-list-tile-title>
                  </v-list-tile>

                </v-list-group>

              <v-list-tile v-for="(drink) in categories"
                :key="drink.title" @click="">
                    <v-btn icon>
                      <v-avatar size="32px">
                        <img :src="pic(drink.imageUrl)">
                      </v-avatar>
                    </v-btn>
                    <v-list-tile-title>{{drink.title}}</v-list-tile-title>
              </v-list-tile>

              </v-list-group>

        <v-list-group
                prepend-icon="add_circle_outline"
                value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Others</v-list-tile-title>
          </v-list-tile>

          <v-list-tile v-for="item in others" key="item.title">
              <v-btn icon>
                <v-avatar size="32px">
                  <img :src="pic(item.imageUrl)">
                </v-avatar>
              </v-btn>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
          </v-list-tile>

        </v-list-group>

      </v-list>
    </v-navigation-drawer>
Fancy your alcohol home-delivered? We got you! Anywhere, anytime.
    </div>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      show: '1',
      rightSide: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      rightDrawer: false,
      categories: [
        {title: 'Beer', imageUrl: 'beer.jpg'},
        {title: 'Brandy', imageUrl: 'brandy.jpg'},
        {title: 'Champagne', imageUrl: 'champagne.jpg'},
        {title: 'Cognac', imageUrl: 'cognac.png'},
        {title: 'Gin', imageUrl: 'gin.jpg'},
        {title: 'Liqueur', imageUrl: 'liqueur.jpg'},
        {title: 'Rum', imageUrl: 'rum.jpg'},
        {title: 'Tequila', imageUrl: 'tequila.jpg'},
        {title: 'Vodka', imageUrl: 'vodka.jpg'}
      ],
        others: [
            {imageUrl: 'whisky.jpg', title: 'Vermouth, Aperitif'}
        ],
        scrolled: false
    }
  },
  methods: {
    goToTopSellers () {
      this.$router.push('/topSellers')
    },
    goHome () {
      this.$router.push('/topSellers')
    },
    goAbout () {
      this.$router.push('/about')
    },
      pic(picture) {
          return require('@/assets/drinks/' + picture)
      },
      handleScroll () {
          this.scrolled = window.scrollY > 0;
      }
  },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Righteous');
  body
  {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
  .description
  {
    font-family: 'Gloria Hallelujah', cursive;
    color: purple;
    /*font-family: 'Permanent Marker', cursive;*/
  }
  nav
  {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    padding: 10px 100px;
    box-sizing: border-box;
    transition: .5s;
    z-index: 1;
  }
  .topnav-centered-right
  {
    float: none;
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
  }
  .topnav-centered-left
  {
    float: none;
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
  }
  .search
  {
    float: none;
    position: absolute;
    top: 30%;
    left: 68%;
    transform: translate(-50%, -50%);
  }
  nav.black
  {
    background: rgba(0,0,0,.5);
    height: 80px;
    padding: 10x 50px;
  }
  nav .logo
  {
    float: left;
    cursor: pointer;
  }
  nav .logo img
  {
    height: 80px;
    transition: .5s;
  }
  nav.black .logo img
  {
    height: 60px;
  }
  nav ul
  {
    float: right;
    margin: 0;
    padding: 25px;
    display: flex;
  }
  nav.black ul{
    padding: 0;
    transition: .5s;
  }
  nav ul li
  {
    list-style: none;
    display: inline-block;
  }
  nav ul li a
  {
    list-height: 80px;
    color: #262626;
    padding: 5px 20px;
    font-family: 'Righteous', cursive;
    text-decoration: none;
    text-transform: uppercase;
    transition: .5s;
  }
  .navButtons
  {
    float: none;
    position: absolute;
    top: 50%;
    left: 94%;
    transform: translate(-50%, -50%);
    transition: .5s;
    cursor: pointer;
  }
  .hoverRed:hover
  {
    color: red !important;
  }
  nav.black ul li a
  {
    color: #fff;
    line-height: 60px;
  }
  nav ul li a.active,
  nav ul li a:hover
  {
    color: #fff;
    background: #f00;
  }
  section.sec1
  {
    width: 100%;
    height: 100vh;
    background: url('./assets/heineken.jpg');
    background-size: cover;
  }
  .active {
    border: 2px solid red;
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
    background-color: #fff;
    color: blue;
  }

  .bb {
    border-bottom: 2px solid red;
  }

  .tabs {
    position: relative;
    top: 2px;
  }
  .slide-enter-active
  {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active
  {
    animation: slide-out 200ms ease-out forwards;
  }
  @keyframes slide-in {
    from{
      opacity: 0;
      transform: translateY(-20px);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes slide-out {
    from{
      transform: translateY(0);
    }
    to{
      opacity: 0;
      transform: translateY(-5px);
    }
  }
</style>
