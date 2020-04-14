var VueXlsxFormatFilters = {
  install: function(Vue, options) {
    console.log('Installing VueXlsxFormatFilters')
    console.log(options)

    Vue.filter('try', function(number) {
      console.log('hi')
      return number * 2.00
    })

    console.log(Vue.filter('try')(30))
  }
}

export default VueXlsxFormatFilters
