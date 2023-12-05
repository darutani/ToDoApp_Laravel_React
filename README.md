# 環境構築方法
## dockerを立ち上げる
```
docker compose up -d --build
```

## composerのインスール
appコンテナに入る
```
docker compose exec app zsh
```

appコンテナ内でcomposer insatllを実行
```
composer install
```

## アプリケーションキーの生成
appコンテナ内で以下コマンドを実行
```
php artisan key:generate
```




# 備忘録
## 便利なコマンド

### キャッシュのクリア
```
php artisan config:clear
```
