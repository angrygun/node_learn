var bin = new Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);

console.log('bin[0]=====>', bin[0]);

var str = bin.toString('utf-8');

console.log('str=====>', str);

console.log('bin=====>', bin);

// Buffer与字符串有一个重要区别。字符串是只读的
// 并且对字符串的任何修改得到的都是一个新字符串，原字符串保持不变。
// 至于Buffer，更像是可以做指针操作的C语言数组。例如，可以用[index]方式直接修改某个位置的字节。
var sub = bin.slice(2);
console.log('sub=====>', sub);

sub[0] = 0x65;

console.log('bin=====>', bin);

// 如果想要拷贝一份Buffer，得首先创建一个新的Buffer
// 并通过.copy方法把原Buffer中的数据复制过去。
// 这个类似于申请一块新的内存，并把已有内存中的数据复制过去
var dup = new Buffer.alloc(bin.length);

bin.copy(dup);
dup[0] = 0x48;
console.log('bin=====>', bin);
console.log('dup=====>', dup);


