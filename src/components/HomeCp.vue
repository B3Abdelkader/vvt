<template>
      <h1>Home Page</h1>
      <p>
        Name in store is:
        <a class="underline decoration-indigo-500">
          {{name}}
          </a> 
      </p>

      <input
        v-model="newName"
        id="default"
        type="text"
        name="default"
        class="px-1 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      <div>
      <button @click="saveName" class="ring-2 ring-purple-500 ring-offset-4 ring-offset-purple-100 ...">Submit</button>
      </div>

</template>

<script setup>
import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import {useRouter} from 'vue-router'

const store = new useStore()
const router = useRouter()

const name = computed(() => {
  return store.state.user.name
})

const newName = ref('')

function saveName(){
  store.dispatch('saveName', newName.value)
  newName.value =''
  router.push('/about')
}
</script>