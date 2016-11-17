import Vue from 'vue'

Vue.filter('wrap', function (value, begin, end) {
  return begin + value + end
})