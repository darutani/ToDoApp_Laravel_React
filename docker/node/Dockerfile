# 使用するNode.jsのイメージを指定
FROM node:18-alpine

# 作業ディレクトリを設定
WORKDIR /var/www

# パッケージ定義ファイルをコンテナにコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコンテナにコピー
COPY . .
