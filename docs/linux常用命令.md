---
sidebar_position: 3
---

# 常用 Linux 命令及使用方式

## 文件操作

### `ls`

列出目录中的文件和文件夹。

```bash
ls [option] [directory]
```

- `-l`: 以列表形式显示文件详细信息。
- `-a`: 显示所有文件，包括隐藏文件。

### `cd`

切换当前目录。

```bash
cd [directory]
```

### `pwd`

显示当前目录的完整路径。

```bash
pwd
```

### `cp`

复制文件或目录。

```bash
cp [option] [source] [destination]
```

- `-r`: 递归复制目录及其内容。

### `mv`

移动或重命名文件和目录。

```bash
mv [source] [destination]
```

## 文本操作

### `cat`

合并并显示文件的内容。

```bash
cat [file1] [file2] [...]
```

### `grep`

在文本文件中查找特定模式。

```bash
grep [option] [pattern] [file]
```

- `-i`: 不区分大小写。
- `-r`: 递归搜索。

### `sed`

流编辑器，用于对输入流（文件或管道）执行基本文本转换。

```bash
sed [option] 'command' [file]
```

## 系统信息

### `uname`

显示系统信息。

```bash
uname [option]
```

- `-a`: 显示所有信息。

### `df`

显示磁盘使用情况。

```bash
df [option]
```

- `-h`: 以人类可读的格式显示。

### `top`

显示系统当前状态。

```bash
top
```

## 网络命令

### `ping`

发送 ICMP ECHO_REQUEST 到网络主机。

```bash
ping [host]
```

### `ifconfig`

显示或配置网络接口。

```bash
ifconfig [option] [interface]
```

## 其他命令

### `man`

查看命令的手册页。

```bash
man [command]
```

### `history`

显示命令历史。

```bash
history
```

这只是 Linux 命令的一个简短列表，更多命令和详细信息可以在相关手册页中找到。
