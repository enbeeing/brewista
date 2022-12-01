<template>
  <div class="new-brew add-brew">
    <div class="error" v-if="error">
      <p>{{ error }}</p>
    </div>

    <Header title="Post Brew" to="Home" />

    <form class="add-brew-form content-wrapper">
      <h4>Upload image</h4>
      <label class="sr-only" for="img">Image upload</label>
      <input type="file" @change="onFile" id="img" required />
      <label for="alt">Describe image: </label>
      <input type="text" id="alt" v-model="imgAlt" />
      <button class="add-brew" @click.prevent="addNewBrew">Add image</button>
    </form>

    <div>
      <h4>Chosen Method</h4>
      <SingleMethod :method="method" v-if="method" />
    </div>

    <div>
      <h4>Chosen Coffee</h4>
      <SingleCoffee :coffee="coffee" v-if="coffee" />
    </div>
  </div>
</template>

<script setup>
import Header from "../../components/newBrew/PickHeader.vue";
import SingleCoffee from "../../components/newBrew/SingleCoffee.vue";
import SingleMethod from "../../components/newBrew/SingleMethod.vue";
import addBrew from "../../composables/addBrew";
import uploadImg from "../../composables/fileUpload/uploadImg";
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  coffee: String,
  method: String,
});

// safe in local history/as cookies instead of passing back and forth
const coffee = props.coffee ? JSON.parse(props.coffee) : null;
const method = props.method ? JSON.parse(props.method) : null;

const router = useRouter();

const error = ref(null);
const imgSrc = ref("");
const imgAlt = ref("");
const imgFile = ref(null);

const onFile = (e) => {
  error.value = null;
  const files = e.target.files;
  if (!files.length) return;

  const fileType = files[0].type.toString().split("/");

  if (fileType[0] != "image") {
    error.value = "File must be an image";
  }

  imgSrc.value = files[0].name;

  imgFile.value = files[0];
};

const addNewBrew = () => {
  if (error.value) {
    return;
  }

  try {
    uploadImg(imgFile.value);

    addBrew({
      coffee: coffee,
      method: method,
      img: { src: imgSrc.value, alt: imgAlt.value },
      isFave: false,
    });

    router.push({ name: "Home" });
  } catch (err) {
    console.log(err);
  }
};
</script>

<style>
.add-brew .error {
  position: absolute;
  top: 2.5rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 200px;
  background: var(--brew-bg-color);
  padding: 1rem;
  border-radius: 10px;
  color: var(--error-color);
  font-weight: bold;
  text-align: center;
}

.add-brew > div > h4 {
  text-align: center;
  /* margin-bottom: -1rem; */
}

.add-brew-form {
  background: var(--brew-bg-color);
  border-radius: 25px;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, auto);
  gap: 10px;
}

.add-brew-form h4 {
  text-align: center;
  margin-bottom: 0.5rem;
}

.add-brew-form label {
  font-size: 0.9rem;
}

.add-brew-form input {
  border-radius: 5px;
  margin-bottom: 5px;
}

.add-brew-form input:last-of-type {
  padding: 3px 5px;
  border: 1px solid var(--light-medium-text-color);
}

.add-brew-form button {
  padding: 3px;
  background: var(--brew-bg-color);
  border: 1px solid var(--light-medium-text-color);
  border-radius: 5px;
}

.add-brew .coffee,
.add-brew .coffee:hover,
.add-brew .coffee:focus,
.add-brew .method,
.add-brew .method:hover,
.add-brew .method:focus {
  cursor: default;
  filter: none;
}
</style>