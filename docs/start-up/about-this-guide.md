# 关于本手册

[[toc]]

本手册将带您了解您与 openSUSE® Leap 的初次接触。了解如何安装、使用和享受您的系统。

##### 安装

指导您完成安装过程和系统的基本配置。快速入门部分显示了使用默认值的安装演示。本章的第二部分提供了每个安装步骤的详细信息。

##### 管理

介绍 YaST，这是安装和配置系统的核心工具。了解如何初始设置您的系统以及如何修改系统的关键组件。

##### 管理和更新软件

了解如何使用 YaST 或使用命令行安装或删除软件、如何使用一键安装功能以及如何使系统保持最新。

##### Bash shell

了解如何使用 bash shell，它是 openSUSE Leap 上的默认命令行解释器。了解最常用的 Linux 命令，了解 Linux 系统的基本概念。

##### 帮助和故障排除

概述在何处可以找到帮助和其他文档，以备您需要更多信息或想要使用您的系统执行特定任务时使用。还可以找到最常见问题和烦恼的汇编，并学习如何自行解决这些问题。

## 可用文档

##### 在线文档

我们的文档可在 https://doc.opensuse.org 在线获取。浏览或下载各种格式的电子文档。

::: details 最新更新
本文档的英文版本通常提供最新更新。
:::

###### 在你的系统中

For offline use, find documentation in your installed system under /usr/share/doc. Many commands are also described in detail in their _manual pages_. To view them, run **man**, followed by a specific command name. If the **man** command is not installed on your system, install it with **sudo zypper install man**.  

对于脱机使用，请在 /usr/share/doc 目录下的已安装系统中查找文档。许多命令在其手册页中也有详细描述。要查看它们，请运行 **man**，然后是特定的命令名称。如果您的系统上没有安装 **man** 命令，请使用 **sudo zypper install man** 安装它。

## 改进文档

欢迎您对本文档提供反馈和贡献。提供以下反馈渠道：

##### 错误报告

在 https://bugzilla.opensuse.org/ 报告文档问题。
要简化此过程，请单击本文档 HTML 版本中标题旁边的报告问题图标。这会在 Bugzilla 中预选正确的产品和类别，并添加指向当前部分的链接。您可以立即开始输入错误报告。
需要 Bugzilla 帐户。

##### 投稿

要为本文档做出贡献，请单击本文档 HTML 版本中标题旁边的编辑源文档图标。这会将您带到 GitHub 上的源代码，您可以在其中打开拉取请求。
需要一个 GitHub 帐户。

::: tip 编辑源文档仅适用于英语
编辑源文档图标仅适用于每个文档的英文版本。对于所有其他语言，请改用报告问题图标。
:::

有关用于此文档的文档环境的更多信息，请参阅存储库的自述文件，网址为 https://github.com/SUSE/doc-sle 。

##### 邮件

您还可以报告错误并将有关文档的反馈发送至 <doc-team@suse.com> 。包括文档标题、产品版本和文档的发布日期。此外，包括相关的章节编号和标题（或提供 URL）并提供问题的简明描述。

##### 帮助

如果您需要有关 openSUSE Leap 的更多帮助，请参阅 https://en.opensuse.org/Portal:Support 。

## 文档规定

本手册中使用了以下注意事项和排版规定：

- /etc/passwd ：目录名和文件名
- PLACEHOLDER ：将 *PLACEHOLDER* 替换为实际值
- PATH ：一个环境变量
- **ls**， --help ：命令、选项和参数
- user ：用户名或组名
- package_name：软件包名称
- `Alt`、`Alt–F1`：要按的键或组合键。按键在键盘上以大写形式显示。
- File, File › Save As: 菜单项、按钮
- *第 1 章*， *“示例章节”*：对本手册中另一章的交叉引用。
- 必须以 `root` 权限运行的命令。通常，您还可以在这些命令前加上 **sudo** 命令，以便以非特权用户身份运行它们。
```
# command
> sudo
```

- 非特权用户可以运行的命令。
```
> command
```

- 注意事项

::: danger 警告通知
在继续之前您必须了解的重要信息。就安全问题、潜在的数据丢失、硬件损坏或物理危险向您发出警告。
:::

::: warning 重要的提醒
在继续之前您应该了解的重要信息。
:::

::: details 注意事项
附加信息，例如有关软件版本差异的信息。
:::

::: tip 提示通知
有用的信息，例如手册或实用建议。
:::

- 紧凑的通知

**笔记**  附加信息，例如有关软件版本差异的信息。
<br>
**提示**  有用的信息，例如手册或实用建议。

## 源代码

openSUSE Leap 的源代码是公开的。有关下载链接和更多信息，请参阅 https://en.opensuse.org/Source_code 。

## 致谢

Linux 的开发者在全球范围内通过自愿的合作，以促进 Linux 的发展。我们感谢他们的努力——没有他们就没有这个发行版。当然，要特别感谢 Linus Torvalds。