const fs = require('fs');
const data = require('./getAllChannel.json');

// 本地 rtp 服务的地址和端口
let localRTP = 'http://192.168.123.1:60000/rtp/'
fs.appendFileSync('IPTV.m3u', `#EXTM3U\n`)

// 遍历 json 文件
data.channels.forEach(channel => {
    const icon = channel.icon
    const title = channel.title;
    const hwurl = channel.params.hwurl;
    // 只保留 url 后面的 IP
    const IP = hwurl.substring(hwurl.indexOf('rtp://') + 6);
    fs.appendFileSync('IPTV.m3u', '#EXTINF:-1 tvg-name"' + title + '" tvg-logo="' + icon + '",' + `${title}\n` + localRTP + `${IP}\n`)
});
console.log('提取完成');
