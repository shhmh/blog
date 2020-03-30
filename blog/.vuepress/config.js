module.exports = {
  title: 'خاطرات شعبان محمد حسنی',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'بلاگ',
        link: '/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'instagram',
          link: 'https://www.instagram.com/shhhhhh.mh',
        },
      ],
    },
    globalPagination: {
      prevText:'قبلی', // Text for previous links.
      nextText:'بعدی', // Text for next links.
      lengthPerPage:'10', // Maximum number of posts per page.
      layout:'Pagination', // Layout for pagination page
    }
  },
}
