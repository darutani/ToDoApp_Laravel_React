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

appコンテナ内でcomposer installを実行
```
composer install
```

## アプリケーションキーの生成
appコンテナ内で以下コマンドを実行
```
php artisan key:generate
```

## Sassをインストール
```
npm install -D sass
```


# 技術構成
- Laravel 10
- MySQL 8.0
- Vue 3.2
- TypeScript
- vue-query 1.26
- vue-router 4.2.5
- vuetify 3.4.4




# 備忘録
## 便利なコマンド

### キャッシュのクリア
```
php artisan config:clear
```
