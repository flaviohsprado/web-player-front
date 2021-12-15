<template>
  <div class="bg-black text-white full-height">
    <div class="q-gutter-y-md q-px-sm">
      <q-list class="text-grey">
        <q-item
          class="text-white"
          clickable
          v-ripple
          :active="active"
          active-class="bg-grey-9"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Home </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="search" />
          </q-item-section>
          <q-item-section> Search </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="horizontal_distribute" />
          </q-item-section>
          <q-item-section> Your Library </q-item-section>
        </q-item>
      </q-list>

      <q-list class="text-grey">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon class="bg-grey text-black" name="add" />
          </q-item-section>
          <q-item-section> Create Playlist </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>
          <q-item-section> Liked Songs </q-item-section>
        </q-item>
      </q-list>
      <q-list class="text-grey">
        <q-item clickable v-ripple>
          <q-item-section> R&B Gospel </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Liked from Radio </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section> Discover Weekly </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script>
import LeftSideBar from './LeftSideBar';
export default LeftSideBar;
</script>
