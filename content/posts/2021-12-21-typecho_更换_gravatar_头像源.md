---
title: typecho 更换 gravatar 头像源
date: 2021/12/21 10:11:00
updated: 2021/12/21 10:14:21
categories: 
  - 技术
tags: 
  - typecho
  - gravatar
---


找到根目录下 `config.inc.php` 文件，在最前面加入下面的代码。

<!-- more -->

![](https://cdn.jsdelivr.net/gh/Nov8nana/pic-cdn@c549d6cfb8b83d2410899cf619a663d8cebbffe1/2022/01/05/3e5e307b9fb3ba048fdc9f7b5351d7b9.png)

```php
define('__TYPECHO_GRAVATAR_PREFIX__', 'https://sdn.geekzu.org/avatar/');
```

其中 `https://sdn.geekzu.org/avatar/` 是一个国内源链接，这个是我目前找到的最稳定的源。

如果这个源不能用了，可以更换其他的源，直接搜其他的相关国内源就可以了。