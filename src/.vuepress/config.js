import { defineUserConfig } from 'vuepress'

// Config default theme sidebar and navbar
import { defaultTheme } from 'vuepress'

// Register Components in the folders
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)


export default defineUserConfig({
    // base: '/ziyu_zhou_personal_website/',
    base: '/',
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
            { text: 'Article', link: '/article/' },
            { text: 'GitHub', link: 'https://github.com/zzyBen' },
        ],

        sidebar: {
            '/guide/': [
              {
                text: 'Guide',
                children: [
                  '/guide/README.md',
                  '/guide/advanced.md',
                  '/guide/customize.md',
                  '/guide/getting-started.md',
                  '/guide/test/test.md',
                ],
              },
            ],
        },
    }),
    plugins: [
      registerComponentsPlugin({
        // options
        componentsDir: path.resolve(__dirname, './components'),
      }),
    ],
})