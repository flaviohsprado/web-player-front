import api from 'src/api';
import { Vue, Component, PropSync } from 'vue-property-decorator';
import { LocalStorage } from 'quasar';

@Component({
  name: 'Login',
})
export default class Login extends Vue {
  public layout = false;
  public moreContent = true;

  public email = '';
  public password = '';

  @PropSync('openModal', { type: Boolean }) syncedOpenModal!: boolean;

  get contentSize() {
    return this.moreContent ? 150 : 5;
  }

  async onSubmit() {
    const credentials = {
      email: this.email,
      password: this.password,
    };

    const response = await api.post('/public/auth/login', credentials);

    LocalStorage.set('token', response.data.accessToken);

    this.$q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    });

    this.$router.push({
      name: 'Home',
    });
  }
}
