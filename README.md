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
0. 下記手順の前提
	* OSはWindows10以上であること
	* Docker Desktopがインストールされていること
	* gitの改行コード自動変換機能を無効とすること
		(docker関連のファイルがCR+LFだと、エラーが発生する)

1. 本リポジトリをClone
2. docker-compose.batの改行コードをCR+LFに変換（バッチファイルのため、CR+LFでないと動作しない）
2. ルートディレクトリのdocker-compose.batを実行
3. [https://localhost:4300](https://localhost:4300)でプログラム処理の結果が表示できれば開発環境構築完了  
	（Symfonyのエラー画面が表示される場合は、var/cache配下を削除し、再度アクセスしてみてください。）
4. 商品画像等、ECcubeの機能で登録されたファイルは、本番サイトからFTPで/html/updateをダウンロード
【注意】 デプロイ時は/app/config/eccube/packages/eccube.yamlの37行目の設定を削除、38行目のコメントアウトを外すこと
 eccube_auth_type: 'HMAC' → 'PLAIN'（ログイン時の認証アーキテクチャの設定。PLAINは平文のまま検証。パスワードは平文で保存される。  

### ECcube管理画面
* URL  
	http://localhost:4300/administrator
* ユーザー名  
	admin
* パスワード  
	password