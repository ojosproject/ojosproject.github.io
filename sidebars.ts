// sidebars.ts
// Ojos Project
// 
// Defines the sidebars that the files in `/docs/` can use.
// Learn more here:
// https://docusaurus.io/docs/sidebar/

import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  policies: [
    {
      type: 'category',
      label: 'Policies',
      link: {
        type: 'generated-index',
        title: 'Ojos Project Policies',
        description: 'These are the policies we follow at the Ojos Project. Make sure you understand them. If you have any questions, please contact Carlos. Thanks!',
        slug: '/policies/',
        image: '@site/static/images/uci-pride-header.png',
      },
      items: ['policies/git', 'policies/image', 'policies/inf199-acknowledgement', 'policies/paperwork', 'policies/structure', 'policies/team-docs', 'policies/url-lab-attendance'],
    },
  ],

  softwareIris: [
    {
      type: 'category',
      link: {type: 'doc', id: 'iris/README'},
      label: 'Iris Docs',
      collapsible: false,
      items: ['url/developers/README', 'iris/README']
    }
  ],

  groupUrl: [
    {
      type: 'category',
      link: {type: 'doc', id: 'url/README'},
      label: 'URL Group',
      collapsible: false,
      items: [
        {
          // Developers Team
          type: 'category',
          link: {type: 'doc', id: 'url/developers/README'},
          label: 'Developers',
          collapsible: true,
          items: [
            {
              type: 'category',
              link: {
                type: 'generated-index',
                title: 'Software Design',
                description: 'These are designs made by the Developers team. They\'re often made with Figma.',
                slug: 'url/developers/design/',
                image: '@site/static/images/uci-pride-header.png'
              },
              label: 'Design',
              collapsible: true,
              items: ['url/developers/c4-model', 'url/developers/database-schema', 'url/developers/flowcharts']
            },
            {
              type: 'category',
              label: 'Guides',
              collapsible: true,
              items: ['url/developers/decrypt-interviews', 'url/developers/gitlab-ide', 'url/developers/gravatar', 'url/developers/installing-wsl', 'url/developers/linux-filesystem', 'url/developers/ssh-setup', 'url/developers/updating-news']
            },
            {
              type: 'category',
              label: 'WebDev',
              collapsible: true,
              items: ['url/developers/git-transition', 'url/developers/updating-docs']
            }
          ]
        },
        {
          // Engineering Team
          type: 'category',
          label: 'Engineering',
          collapsible: true,
          items: [{type: 'autogenerated', dirName: 'url/engineering'}]
        },
        'url/research/README'
      ]
    }
  ],
};

export default sidebars;