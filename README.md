# puppeteer_sandbox
## install
1. [nvm](https://qiita.com/sand/items/b01d7d8f3d9c1642298b)
1. [yarnのインストール](https://qiita.com/taosan/items/2f416b2a347db9091774)
  - 正しいコマンド：yarn.cmd init -y
1. [chrome](https://gomiba.co.in/blog/archives/1088)
  - 条件：CentOS7

## know how
1. [E2EテストをPhantomJSから、Puppeteer + Headless Chromeへ移行しました](http://techblog.lclco.com/entry/2018/06/28/080000)
1. [公式](https://pptr.dev/#?product=Puppeteer&version=v1.9.0&show=api-class-page)
1. [PuppeteerによるヘッドレスChromeの使い方 evaluate](https://iwb.jp/puppeteer-headless-chrome-evaluate/)
1. [Puppeteerを使ったスクレイピング](https://blog.engineer.adways.net/entry/2018/06/29/150000)
1. [ページオブジェクトパターン参考](https://honeybe.hatenablog.jp/entry/2018/02/22/192216)
1. [チートシート的](http://www.testautomationguru.com/puppeteer-getting-started/)

## メモ
1. louchに以下を渡さないとエラー
```js
{args: ['--no-sandbox', '--disable-setuid-sandbox']}
```
1. コマンドラインからnodeの引数
  - argv[2]
1. event設定してからpage.goto()じゃないと発火しない
