export default {
  widgets: [
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
                  buildHookId: '631eff2e9e1ad272f0a7b1f4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-eypgdaay',
                  apiId: 'd6ca3138-f2e4-41be-ba6f-f0d7f9af845b'
                },
                {
                  buildHookId: '631eff2e775c346b3a95ca1a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dqvh8fi8',
                  apiId: '1158a931-1b59-408c-a07b-6e3c44eac93a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kalo69/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dqvh8fi8.netlify.app', category: 'apps'}
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
