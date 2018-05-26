var TimerStream = require('./timer')
  , MyStream = require('./stream')
  , ts = new TimerStream()
  , ms = new MyStream()
  ;

// パイプで繋ぐ
ts.pipe(ms);
// 読み込みを開始
ts.resume();
