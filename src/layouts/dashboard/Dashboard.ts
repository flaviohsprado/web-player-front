import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Dashboard',
})
export default class MainLayout extends Vue {
  private linksData = [
    {
      title: 'Docs',
      caption: 'quasar.dev',
      icon: 'school',
      link: 'https://quasar.dev',
    },
    {
      title: 'Github',
      caption: 'github.com/quasarframework',
      icon: 'code',
      link: 'https://github.com/quasarframework',
    },
    {
      title: 'Discord Chat Channel',
      caption: 'chat.quasar.dev',
      icon: 'chat',
      link: 'https://chat.quasar.dev',
    },
    {
      title: 'Forum',
      caption: 'forum.quasar.dev',
      icon: 'record_voice_over',
      link: 'https://forum.quasar.dev',
    },
    {
      title: 'Twitter',
      caption: '@quasarframework',
      icon: 'rss_feed',
      link: 'https://twitter.quasar.dev',
    },
    {
      title: 'Facebook',
      caption: '@QuasarFramework',
      icon: 'public',
      link: 'https://facebook.quasar.dev',
    },
    {
      title: 'Quasar Awesome',
      caption: 'Community Quasar projects',
      icon: 'favorite',
      link: 'https://awesome.quasar.dev',
    },
  ];

  public leftDrawerOpen = false;
  public essentialLinks = this.linksData;

  public openModal = false;
}
