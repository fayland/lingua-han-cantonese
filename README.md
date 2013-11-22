lingua-han-cantonese
====================

Retrieve the Cantonese(GuangDongHua) of Chinese character(HanZi).

## Usage

```javascript
var cantonese = require('lingua-han-cantonese');

cantonese.get('我'); // ngo5, tone is default on
cantonese.setToneOff();
cantonese.get('我'); // ngo
cantonese.setToneOn();
cantonese.get('我'); // ngo5

```
