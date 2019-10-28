export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db6c7c4c1f935ebe32d19bf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2xixdhck',
                  apiId: 'd3bb8221-abed-4d5d-9734-69180c91ad1d'
                },
                {
                  buildHookId: '5db6c7c5e5617b1355ee10d7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-tasjpi74',
                  apiId: 'ebc28030-0053-4b44-bfc1-f503e738706e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/daveKoala/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-tasjpi74.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
