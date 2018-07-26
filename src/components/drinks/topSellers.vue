<template>
    <div>
        <app-drink :list="topSellers"></app-drink>
    </div>
</template>

<script>
import drink from './drink'
export default {
  name: 'topSellers',
  data () {
    return {
      topSellers: [
        {title: '4th Street', span: 'RED', imageUrl: 'topSellers/4th-Street-Red.jpeg'},
        {title: 'Baileys', span: 'IRISH CREAM', imageUrl: 'topSellers/baileys-irish-cream.jpeg'},
        {title: 'Black & White', span: 'WHISKY', imageUrl: 'topSellers/Black-&-white-whisky-.jpeg'},
        {title: 'Captain Morgan', span: 'SPICED', imageUrl: 'topSellers/captain-morgan-spiced.jpeg'},
        {title: 'Cellar Cask', span: 'RED SWEET', imageUrl: 'topSellerstopSellers/cellar-cask-red-sweet.jpeg'},
        {title: 'Chivas', span: '12 YEARS', imageUrl: 'topSellers/chivas-12-years-.jpeg'},
        {title: 'Ciroc', span: 'VODKA', imageUrl: 'topSellers/ciroc-vodka.jpeg'},
          {title: 'Courvoisier', span: 'VSOP', imageUrl: 'topSellers/courvoisier-vsop.jpeg'},
          {title: 'Double', span: 'BLACK', imageUrl: 'topSellers/Double-Black.jpeg'},
        {title: 'Famous', span: 'grouse', imageUrl: 'topSellers/famous-grouse.jpeg'},
        {title: 'glenfiddich', span: '12 years', imageUrl: 'topSellers/glenfiddich-12-years.jpeg'},
        {title: 'glenfiddich', span: '15 years', imageUrl: 'topSellers/Glenfiddich-15-years.jpeg'},
        {title: 'glenfiddich', span: '18 years', imageUrl: 'topSellers/glenfiddich-18-years.jpeg'},
        {title: 'glenmorangie', span: 'original', imageUrl: 'topSellers/glenmorangie-original.jpeg'},
        {title: '', span: 'guinness', imageUrl: 'topSellers/guinness.jpeg'},
        {title: 'jack daniels', span: 'sour mash', imageUrl: 'topSellers/jack-daniels-sour-mash.jpeg'},
        {title: 'jack daniels', span: 'honey', imageUrl: 'topSellers/jack-daniels-honey.jpeg'},
        {title: '', span: 'jameson', imageUrl: 'topSellers/jameson-.jpeg'},
        {title: 'Moet & Chandon', span: 'imperial brut', imageUrl: 'topSellers/moet-&-chandon-imperial-brut.jpeg'},
        {title: 'singleton', span: 'sunray', imageUrl: 'topSellers/singleton-sunray.jpeg'},
        {title: 'talisker', span: '10 years', imageUrl: 'topSellers/talisker-10-years.jpeg'},
        {title: 'woodford', span: 'reserve', imageUrl: 'topSellers/woodford-reserve.jpeg'}
      ]
    }
  },
  components: {
    appDrink: drink
  }
}
</script>

<style scoped>

</style>
