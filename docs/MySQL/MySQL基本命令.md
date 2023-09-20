---
sidebar_position: 2

---

# MySQL基本命令

:::caution

本篇适用于MySQL 8.0.X 版本

使用前请使用命令`mysql --version`确认是MySQL版本是否正确

::: 

##  登录mysql数据库

使用命令`mysql -h localhost -u root -p`

其中：

- `-u` 后面跟的是你的 MySQL 用户名。
- `-p` 表示你打算输入密码。注意 `-p` 后面没有空格。如果没有输入密码则回车时系统提示你输入密码。
- `-h` 参数来指定我们想要连接的MySQL服务器位于 `localhost`。如果MySQL服务器位于不同的主机或远程服务器，可以将 `localhost` 替换为那台服务器的主机名或IP地址。

## MySQL 备份和恢复数据库

### 备份数据库

使用 `mysqldump` 工具来备份数据库。基本语法如下

```bash
mysqldump -u [username] -p[password] [database_name] > [backup_file.sql]
```

- `[username]`：你的MySQL用户名。
- `[password]`：你的MySQL密码。注意，这里的 `-p` 和密码之间没有空格。
- `[database_name]`：你想要备份的数据库名。
- `[backup_file.sql]`：备份文件的名称。

例如：

```bash
mysqldump -u root -p123456 mydatabase > mydatabase_backup.sql
```

以上命令将会把 `mydatabase` 数据库备份到 `mydatabase_backup.sql` 文件中。

### 恢复数据库

使用 `mysql` 命令行工具来恢复数据库。基本语法如下：

```bash
mysql -u [username] -p[password] [database_name] < [backup_file.sql]
```

- `[username]`：你的MySQL用户名。
- `[password]`：你的MySQL密码。注意，这里的 `-p` 和密码之间没有空格。
- `[database_name]`：你想要恢复的数据库名。
- `[backup_file.sql]`：备份文件的名称。

例如：

```bash
mysql -u root -p123456 mydatabase < mydatabase_backup.sql
```

以上命令将会把 `mydatabase_backup.sql` 文件中的数据恢复到 `mydatabase` 数据库中。

请注意，恢复数据库时，数据库应该已经存在。如果还未创建，需要先创建数据库。