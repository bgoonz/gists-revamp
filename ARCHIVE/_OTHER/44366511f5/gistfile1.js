var a = [];
var b = 3;

a[b++] = b--;
a; // undefined,undefined,undefined,4

a = [];
b = 3;

a[b++] = --b;
a; // undefined,undefined,undefined,3

a = [];
b = 3;

a[++b] = b--;
a; // undefined,undefined,undefined,undefined,4

a = [];
b = 3;

a[b--] = b++;
a; // undefined,undefined,undefined,2

a = [];
b = 3;

a[++b] = --b;
a; // undefined,undefined,undefined,undefined,3

a = [];
b = 3;

a[--b] = ++b;
a; // undefined,undefined,3

a = [];
b = 3;

a[(b = b * 2)] = b = b * 2;
a; // undefined,undefined,undefined,undefined,undefined,undefined,12

a = [];
b = 3;
var c = 5;

a[(b = b + 1)] = (b = b + c) - (c = c - 3);
a; // undefined,undefined,undefined,undefined,7
