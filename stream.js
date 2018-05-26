var stream = require('stream')
  , util = require('util')
  , log = console.log.bind(console)
  ;

// 本来は 'drain','error','close','pipe' イベントが必要
function MyStream() {
  this.writable = true;
  this.buf = [];
}

// 継承、詳細は util.inherits を参照
util.inherits(MyStream, stream.Stream);

MyStream.prototype.write = function(data) {
  var data = data.toString().trim();
  log('write:', data);
  this.buf.push(data);
  return true;
};

MyStream.prototype.end = function(data) {
  log('end:', data);
  if (data) this.write(data);
  this.writable = false;
  log('\nresult:', this.buf.join(''));
};

MyStream.prototype.destroy = function() {};
MyStream.prototype.destroySoon = function() {};

module.exports = MyStream;

if (require.main === module) {
  var mystream = new MyStream();

  // 標準入力をパイプする
  process.stdin.pipe(mystream);
  // 読み込み開始
  process.stdin.resume();
}
