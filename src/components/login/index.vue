<template>
  <div class="q-pa-md q-gutter-sm">
    <q-dialog v-model="syncedOpenModal">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-secondary">
          <q-toolbar>
            <div class="text-white q-gutter-md" style="font-size: 2em">
              <q-icon name="font_download" />
            </div>
            <q-toolbar-title>Login</q-toolbar-title>
          </q-toolbar>
        </q-header>

        <q-footer class="bg-black text-white">
          <q-toolbar inset>
            <q-toolbar-title>Footer</q-toolbar-title>
            <q-toolbar-title>Footer</q-toolbar-title>
          </q-toolbar>
        </q-footer>

        <q-page-container>
          <q-page padding
            ><q-form @submit.prevent="onSubmit" class="q-gutter-md">
              <q-input
                filled
                type="email"
                v-model="email"
                label="Email"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <q-input
                filled
                type="password"
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Please type something',
                ]"
              />

              <div>
                <q-btn label="Submit" type="submit" color="primary" />
              </div>
            </q-form>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script>
import Login from './Login';
export default Login;
</script>
