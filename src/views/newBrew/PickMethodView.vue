<template>
  <div class="new-brew">
    <PickHeader :title="'Combine with method'" to="Coffee" />
    <section>
      <div v-for="method in methods" :key="method.title">
        <SingleMethod :method="method" @picked="picked" />
      </div>
    </section>
  </div>
</template>

<script setup>
import PickHeader from "../../components/newBrew/PickHeader.vue";
import SingleMethod from "../../components/newBrew/SingleMethod.vue";
import getMethods from "../../composables/getMethods";
import { useRouter } from "vue-router";

const props = defineProps({
  coffee: String,
});

const { methods, error, load } = getMethods();

const router = useRouter();

const emit = defineEmits(["method"]);

load();

const picked = (method) => {
  router.push({
    name: "Guide1",
    params: { coffee: props.coffee, method: JSON.stringify(method) },
  });
};
</script>