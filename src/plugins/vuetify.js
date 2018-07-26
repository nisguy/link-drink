import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VTextField,
  VTabs,
  VFooter,
  VAvatar,
  VList,
  VBtn,
  VCard,
  VIcon,
  VBadge,
  VTooltip,
  VDivider,
  VDialog,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VTabs,
    VTooltip,
    VAvatar,
    VTextField,
    VFooter,
    VList,
    VBadge,
    VDivider,
    VDialog,
    VBtn,
    VCard,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  }
})
