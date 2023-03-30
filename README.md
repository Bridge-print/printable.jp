# Printable
## URL
[https://printable.jp](https://printable.jp)

## 運営
ブリッジ有限会社

## プラットフォーム
ECcube4.2

## 概要
ブリッジ（有）が運営する「[Printable](https://printable.jp)」のソースファイル。  
Printableは布製品へのプリントを請け負う通販サイト。

## 開発環境
### 構築手順
0. 下記手順の前提としてOSはWindows10以上であること、Docker Desktopがインストールされていること
1. 本リポジトリをClone
2. ルートディレクトリのdocker-compose.batを実行
3. [https://localhost:4300](https://localhost:4300)でprintable.jpが表示できれば開発環境構築完了
4. 商品画像等、ECcubeの機能で登録されたファイルは、本番サイトからFTPでwww/html/updateをダウンロード
5. www/app/config/eccube/packages/eccube.yamlの27行目の設定を変更 'HMAC' → 'PLAIN'  
	ログイン時の認証アーキテクチャの設定。PLAINは平文のまま検証。パスワードは平文で保存される。  
	【注意】
	* この変更はコミットしないこと

### ECcube管理画面
* URL  
	http://localhost:4300/administrator
* ユーザー名  
	admin
* パスワード  
	password