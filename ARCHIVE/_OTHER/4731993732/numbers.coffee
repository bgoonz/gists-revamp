Number::number_with_delimiter = (delimiter = ',') ->
  number = this + ""
  delimiter = delimiter or ","
  split = number.split(".")
  split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter)
  split.join "."

Number::number_to_percentage = (precision = 2) ->
  number = this.toFixed(precision) + "%"

Number::number_to_currency = (unit = '£', precision = 2) ->
  unit + this.toFixed(precision)

Number::number_with_precision = (precision = 2) ->
  m = 1/Math.pow(10, precision)
  Math.round(this * m)/m