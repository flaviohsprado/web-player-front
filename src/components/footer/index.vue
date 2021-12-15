<template>
  <div class="bg-grey-10">
    <div class="row justify-between">
      <!-- Left piece -->
      <q-item>
        <q-item-section avatar>
          <q-avatar square>
            <img src="~assets/spotify/album-thumbnail.png" />
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <div>The Light Shines in the Darkness</div>
          <div class="text-grey text-caption">The Servants of the Word</div>
        </q-item-section>
        <q-item-section side>
          <q-btn flat round size="sm" icon="favorite_border" />
        </q-item-section>
      </q-item>

      <!-- Center piece -->
      <div class="text-center q-py-sm" style="min-width: 700px">
        <div class="q-my-sm q-gutter-x-sm">
          <q-btn flat round color="grey-8" size="sm" icon="shuffle" />
          <q-btn flat round color="grey-6" size="sm" icon="skip_previous" />
          <q-btn flat round color="grey-3" size="md" icon="play_circle" />
          <q-btn flat round color="grey-6" size="sm" icon="skip_next" />
          <q-btn flat round color="grey-8" size="sm" icon="repeat" />
        </div>

        <div class="row items-center justify-between">
          <a class="col-1">
            <span class="text-caption text-grey">0:15</span>
          </a>
          <div class="col-10">
            <q-linear-progress :value="0.6" color="grey" track-color="grey-8" />
          </div>
          <a class="col-1">
            <span class="text-caption text-grey">3:00</span>
          </a>
        </div>
      </div>

      <!-- Right piece -->
      <div class="row items-center q-gutter-xs" style="min-width: 300px">
        <q-btn flat round color="grey-8" size="sm" icon="queue_music" />
        <q-btn flat round color="grey-8" size="sm" icon="devices" />
        <q-btn flat round color="grey-8" size="sm" icon="volume_up" />
        <div class="col-6">
          <q-linear-progress :value="0.6" color="grey-7" track-color="grey-8" />
        </div>
      </div>
    </div>
  </div>
</template>
