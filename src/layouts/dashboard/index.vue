<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="skip_previous" aria-label="previous" />
        <q-btn flat dense round icon="skip_next" aria-label="next" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Dashboard from './Dashboard';
export default Dashboard;
</script>
