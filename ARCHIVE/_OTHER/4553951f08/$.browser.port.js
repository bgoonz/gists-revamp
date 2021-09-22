browser: {
  mozilla: /firefox/.test(navigator.userAgent.toLowerCase()),
  webkit: /webkit/.test(navigator.userAgent.toLowerCase()),
  chrome: /chrome/.test(navigator.userAgent.toLowerCase()),
  safari: /safari/.test(navigator.userAgent.toLowerCase()) && !/chrome/.test(navigator.userAgent.toLowerCase()),
  opera: /opera/.test(navigator.userAgent.toLowerCase()),
  msie: /msie/.test(navigator.userAgent.toLowerCase())
}
