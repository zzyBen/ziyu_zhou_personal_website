---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Ziyu Zhou'
info: 'PhD student at Tulane University'
interests: 'Interests: Quidditch and Wizard chess.'
socials:
- title: github
  link: https://github.com/zzyBen
- title: linkedin
  link: https://www.linkedin.com/in/ziyu-zhou-93787b179/
# - title: instagram
#   link: https://www.instagram.com
- title: email
  link: 'mailto:zzhou11@tulane.edu'
actions:
- text: Projects
  link: /projects/
- text: Blog
  link: https://zzyben.github.io/
- text: CV
  link: /article/
footer: Made with ♥ by Ziyu. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >

I attended [Tulane University](https://tulane.edu/) to study computer science, supervised by **Prof. Zhengming Ding** and **Prof. Yu-Ping Wang**.

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>