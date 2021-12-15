import { Vue, Component, PropSync } from 'vue-property-decorator';

@Component({
  name: 'LeftSideBar',
})
export default class LeftSideBar extends Vue {
  public active = true;
}
