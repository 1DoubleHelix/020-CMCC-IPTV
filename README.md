# 020-CMCC-IPTV

- 确保已开通广州移动 IPTV 服务，本脚本可以将广州移动 IPTV 的 json 转换为 m3u 供本地使用
- 需要将 IPTV 组播到本地网络，可以参考[我的教程](https://1doublehelix.github.io/padavan-cmcc-iptv)
- 项目中的 `getAllChannel.json` 是示例文件

## 获取广州移动 IPTV 的 json

1. 将电脑连接到光猫的 IPTV 端口
2. 打开浏览器，访问 <http://183.235.16.92:8082/epg/api/custom/getAllChannel.json>
3. 保存 json 为 `getAllChannel.json`

## 修改参数

修改 `localRTP` 为你的地址和端口

```javascript
// 本地 rtp 服务的地址和端口
let localRTP = 'http://192.168.123.1:60000/rtp/'
```

## 将 json 转换为 m3u

1. 将 `getAllChannel.json` 放到 `020-CMCC-IPTV` 目录下
2. 直接运行 `iptv2m3u.js` 即可生成 `IPTV.m3u`
