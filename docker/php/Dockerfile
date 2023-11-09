# 使用するPHPのバージョンを指定
FROM php:8-fpm-bullseye

# 作業ディレクトリを指定
WORKDIR /var/www

# Composerをインストール
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 必要なパッケージとPHPの拡張機能をインストール
RUN apt-get update && apt-get install -y \
        default-mysql-client \
        default-libmysqlclient-dev \
        git \
        zsh \
    && docker-php-ext-install pdo_mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# ポートを開放
EXPOSE 9000

# PHP-FPMを起動
CMD ["php-fpm"]
