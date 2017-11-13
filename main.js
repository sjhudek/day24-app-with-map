 

var map = new Vue({
  el: '#map',
  data: {
      markers: []
  },
  methods: {
    addMarker: function(event){
      map.markers.push({
        lat: event.pageX + "px",
        lng: event.pageY + "px"
      })
      //place marker onto map at location
    },
    removeMarker: function(i){
      map.markers.splice(i,1)
      console.log(i)
    }
  }
})  