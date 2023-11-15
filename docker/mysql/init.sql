-- mysqlのユーザー：userにtest_ToDoAppデータベースにアクセスできる権限を付与
-- dockerのボリュームを削除するたびに権限がなくなってしまうのを防ぐため
CREATE DATABASE IF NOT EXISTS test_ToDoApp;
GRANT ALL PRIVILEGES ON test_ToDoApp.* TO 'user'@'%';
FLUSH PRIVILEGES;
