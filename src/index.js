import Vue from 'Vue';
import add from './utils/add';
import App from './app';

var a = 1;
console.log(a);
var b = a;
console.log(b);

console.log(add(a,b));

var vm = new Vue({
  el: '#app',
  render: h=>h(App),
})