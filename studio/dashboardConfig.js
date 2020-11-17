export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5fb4494f8ab59001157ce6d2',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-gdzsnji5',
                  apiId: 'd045d0d9-eac5-4e25-8b73-0a55852b5e1a'
                },
                {
                  buildHookId: '5fb4494f6f043901287eb1ed',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ny91j2zx',
                  apiId: '573c643e-2cae-4c2d-8e78-aad9adccd27c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beepbleep/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ny91j2zx.netlify.app', category: 'apps'}
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
