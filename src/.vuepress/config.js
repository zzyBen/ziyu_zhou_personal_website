import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'

export default defineUserConfig({
    base: '/ziyu_zhou_personal_website/',
    dest: './docs',
    lang: 'en-US',
    title: "Ziyu Zhou's personal website",
    description: 'Just playing around',
    theme: defaultTheme({
        // default theme config
        navbar: [
            { text: 'Home', link: '/', },
            { text: 'About', link: '/about/' },
            { text: 'Projects', link: '/projects/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/zzyBen' },
        ],

        sidebar: {
            '/guide/': [
              {
                text: 'Guide',
                children: ['/guide/README.md', '/guide/getting-started.md'],
              },
            ],
        },
    }),
})