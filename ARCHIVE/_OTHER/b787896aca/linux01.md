## Linux 日常 (第一期, 20140531)

### 新坑

首先猫会介绍一下最近都有神马激动人心的新坑出现了~

#### Firefox drm

Firefox 要增加针对数字内容版权的 drm 支持啦...

这种事情 RMS 肯定不会很高兴啦, 于是照例我们有了一个新的 GNU 版本的 Firefox -> Icecat

![Icecat](http://www.gnu.org/software/gnuzilla/icecat.png)

啊, 值得一提的是, 虽然名字里面有猫

但是它的 JS 实在是... 太... 泪流满面啦

嗯, 这种伤心的事情就不提了

#### - Google Chrome 35

最大的变化是干掉了 NPAPI 插件, 比如 Linux 里那个已经半死不活的 flash, 或者各种奇怪的 java applet (icedtea 等) 之类的支持啦

当然, 根据发行版的不同, 似乎这件事情已经被 Ubuntu 用户提前享受了

(Ubuntu 在 Chrome 34 里就已经干掉了)

另一个上游变化是 Aura

这个的确就是几家欢喜几家仇了...

(嗯, 我没打错字, 是仇不是愁)

Q:（我的B站会全灰了…）

A: 啊, 全灰的一定是吃了金坷垃(

#### systemd 213

啊, 猫要特别提醒一下, 千万不要和猫一样读作 2B 了(

如果是 Fedora 或者 Arch 的用户, 应该已经对 systemd 已经比较熟悉了

(Debian/Ubuntu 用户别高兴得太早, 乃们也快啦)

嗯, 简单来说呢, systemd 是一个启动/服务管理工具

虽然功能上已经越来越多了

新的 213 版本增加了 timesyncd 和 hostnamed

(天国的 ntp)

此外呢, 网络连接管理组件 systemd-networkd 增加了对 sit 和 ipip 隧道的支持

isatap 等 ipv6 隧道的用户可以上啦(

Q: 有什么工具可以方便生成systemctl的启动脚本？

A: service 文件么

工具的话.... 嗯好像没有

不过只是 INI 文件的话, 写起来负担也不是很大吧

PS: 这里有许多例子可以参考~ <https://wiki.archlinux.org/index.php/Systemd/Services>

一般来说呢, 如果要自己写 service 文件, 还是要先了解一下里面几个比较重要的选项的

比如 Type=simple/forking/oneshot/...

如果你已经习惯写传统的 initscript, 可能已经习惯于加入 --daemon 这样的 fork 选项. 这种情况下需要选择 forking

(另外, 其实不用担心 PID 的问题, systemd 会自己用 cgroups 来收集 fork 出去的进程的)

另外, 有一个很有用的 trick

如果你的发行版已经提供了某个服务的 systemd service, (比如上面提到的 deluged)

而你只需要进行一点修改的话

其实并不需要整个复制或者写个新的

```
$ cat /etc/systemd/system/freenet.service.d/felix_is_here.conf
[Service]
User=felix
```

比如这样~

(啊, 千万不要吐槽那个文件名)

Q: 话说systemd的debug信息在哪可以看到..? 如果是以前的syslog-ng这样的话一般就收集在/usr/log里面了, systemd呢..?

A: 在一个被称为 journal 的二进制日志系统里

可以使用 journalctl 来查看

### 推荐玩具

#### tldr

<https://github.com/tldr-pages/tldr>

相信大家都有过想用一个命令干点普通的事情, 但是打开 man 一看满满一屏没处下嘴的情况

比如... 压缩文件

man tar 出来的第一个选项是

```
-b blocksize Specify the block size, in 512-byte records, for tape drive I/O. As a rule, this argument is only needed when reading from or writing to tape drives, and usually not even then as the default block size of 20 records (10240 bytes) is very common.
```

然后... 嗯, 你也不想知道它是干啥的, 其实

所以呢, 我们有了一个社区维护的新项目, 叫 tldr

把每个命令的常用例子列出来

```
$ tldr tar

 Archiving utility
 Optional compression with gzip / bzip

 - create an archive from files

   tar cf target.tar file1 file2 file3

 - create a gzipped archive

   tar czf target.tar.gz file1 file2 file3

 - extract an archive in a target folder

   tar xf source.tar -C folder

 - extract a gzipped archive in the current directory

   tar xzf source.tar.gz

 - extract a bzipped archive in the current directory

   tar xjf source.tar.bz2
```

上面是 tldr tar 的结果

于是你知道普通的怎么创建压缩文件, 和解压了~

<https://github.com/tldr-pages>

不喜欢 nodejs 客户端的话, 也有其他客户端可以选择~

#### psd (profile-sync-daemon)

<https://github.com/graysky2/profile-sync-daemon>

现在自己用的 PC 上浏览器是最重要的成员之一了, 可是浏览器 profile 文件(包括历史记录呀, 各种奇怪的 storage 呀, ...) 更新非常频繁

一来呢, 磁盘速度有限, 所以这个问题经常拖慢浏览器

二来呢, SSD 用户可能会很担心自己硬盘的寿命...

psd 做的事情是, 在开机的时候把浏览器的 profile 复制到内存中, 并且软链回去. 再在关机的时候把它同步回来.

和你自己写个小脚本不同的地方在于, 它还会在开机的过程中定时地同步

备份到硬盘

默认的间隔是1个小时

这样即使掉电也不会有太大的损失呢~

不过需要注意的是, 如果你的 profile 已经很大了 (比如, 接近甚至超过 /tmp 的总容量了)

这个就还是不要考虑了.....

(猫的 chrome profile 有 2.7G, 应该会有人比我的还大吧)

就之前的一些用户反馈的结果来看, 如果是 HDD 用户, 能明显感觉到浏览器的流畅度上升(尤其是 Firefox).

嗯, 文件同步都是用的 rsync

所以如果你开机后根本没有用过浏览器就关机了, 是不会产生额外的写操作的

Q: profile是哪些文件

CA: 浏览器历史记录，扩展，书签，缓存等等吧

A: 不同浏览器的 profile 不一样

chromium 的话, 在 ~/.config/chromium

google-chrome 等也在类似的地方

Firefox 则在 ~/.mozilla/firefox/一个奇怪的乱码.default

Q: 为什么不同步到在线帐户。。

A: 这些文件很大的啦...

咱们的目的首先是要加速他们的访问, 因为这个直接影响到浏览器的各方面速度

包括页面打开速度, 地址栏补全速度, 等等

#### systemd-swap

不知道大家有没有用过 zram?

如果你电脑的内存并不是很富裕 (对于这个年代, 4G 也已经不是很富裕了)

而且也不太担心耗电问题的话, zram 能为你提供更多内存

提供更多内存的好处是, 交互式程序的响应速度会有显著改善, 以及如果你本来使用了交换区的话, 能节省磁盘操作

用过 zram 的同学可能会注意到, 一直没有比较科学的脚本来管理 zram

比如曾经那个为 systemd 准备的 zramswap, 是一个硬写了各种参数的 awk 脚本

另一方面呢, 需要使用 swap 的同学可能会比较纠结

比如如果分了 swap 分区, 那那部分磁盘空间你就再也用不了了...

如果用 swap 文件呢, 没有用到的时候也不想要它占用磁盘空间

于是我们有了 systemd-swap

它有三个主要的功能

1. 启用 zram, 并且可以自定义设备数量和总容量

(zramswap 里那个默认等于内存大小的配置简直是丧心病狂, 如果你真的把 zram 用到了那个地步, 机器完全卡的不能动啦...)

2. 自动启用所有本地的 swap 分区(当然如果你没有, 也不会有问题啦)

3. 自动创建一个自增长的 swap 文件

也就是说, 如果你没用到它, 它就等于不存在啦~

如果有关注过 zswap 的同学也可以放心, 如果 zswap 被启用了的话, zram 会被自动禁用的

### 其他交流

Q: 话说, 如果swap的fstab项存在的话systemd.swap是会fail的吗..? 本人今天刚用上systemd至少是这么感觉的..

A: 嗯... 你用的是 GPT 吗?

(分区表的话)

GPT 是的确有这个问题的...

不过这个是 systemd 的错啦...

原理上呢, 就是 systemd 的 fstab 生成器和 gpt 的生成器各生成了一个 swap 出来(当然其实是同一个)

然后当然一个成功了另一个就失败了...

参考: <https://wiki.archlinux.org/index.php/swap#Activation_by_systemd>

Q: systemd是干什么的？有相似的功能的软件叫什么？

CA: initscript

还有ububtu的upstart？

现在主要arch和fedora用户在用

A: systemd 是一个启动管理器/服务管理器

前期主要的feature 有基于依赖的启动关系管理，基于socket的服务激活，以及基于cgroups的进程组管理，等等

upstart 相对于initscripts的改进主要在第一项

但是其他的大量systemd的新特性它是没有的

debian已经讨论决定用systemd了，所以ubuntu的话。。。嗯。。。。

（啊，这部分如果没听懂的话没关系的，真的没关系的