---
pageClass: home-page
# some data for the components

name: Ziyu Zhou
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/zzyBen
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/ziyu-zhou-93787b179/
  # - title: instagram
  #   icon: "/icons/instagram-mono.svg"
  #   link: https://www.instagram.com

cv: https://en.wikipedia.org/wiki/Harry_Potter
bio: CS PhD Student at Tulane University
email: zzhou11@tulane.edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I attended [Tulane University](https://tulane.edu/) to study computer science, supervised by **Prof. Zhengming Ding** and **Prof. Yu-Ping Wang**.


## News

- [Jan 2022] Attended Tulane
- [Dec 2021] Moved from Boston to New Orleans
- [May 2021] Graduated from Tufts University


## Education & Experiences

- **Tulane University** PhD Student *Computer Science*<br/>
Jan 2022 - Now
- **Tufts University** Master's Degree *Computer Science*<br/>
Sep 2019 - May 2021
- **Beihang University** Bachelor's Degree *Computer Science*<br/>
Sep 2015 - May 2019


## Projects


[→ Full list](/projects/)

<ProjectCard image="/projects/1.png" hideBorder=true>

  **First Project**

  Description
  
  [[PDF](https://www.google.com)] [[arXiv](https://arxiv.org)]

</ProjectCard>


## Awards & Honors
TODO



<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
