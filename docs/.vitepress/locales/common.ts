//导入来自于node_modules目录中vitepress的默认主题类型
import type {DefaultTheme} from 'vitepress'

//配置common主题
export const themeConfig = {

  //显示在public目录下的openSUSE中文手册图标。
  logo: '/favicon.svg',

  //社交媒体图标和相关链接
  socialLinks: [
    {icon: 'github', link: 'https://github.com/openSUSE-zh'},
    {icon: 'facebook', link: 'https://www.facebook.com/opensuse.manual.cn'},
    {icon: 'discord', link: 'https://discord.gg/bgXGBngNCV'},
    {icon: 'mastodon',link: 'https://pkm.social/@openSUSE_CN_Manual'}
  ]

//为衔接common主题准备
} satisfies DefaultTheme.Config
