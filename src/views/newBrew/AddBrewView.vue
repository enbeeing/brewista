<template>
  <div class="new-brew add-brew">
    <Header
      class="add-brew-header"
      title="Post Brew"
      to="Home"
      @click="error = null"
    />

    <form class="add-brew-form content-wrapper">
      <h4>Upload image</h4>
      <label class="sr-only" for="img">Image upload</label>
      <input type="file" @change="onFile" id="img" required />
      <label for="alt">Describe image: </label>
      <input type="text" id="alt" v-model="img.alt" />
      <button @click.prevent="addNewBrew">Add image</button>
    </form>

    <div>
      <h4>Chosen Method</h4>
      <SingleMethod :method="method" v-if="method" />
    </div>

    <div>
      <h4>Chosen Coffee</h4>
      <SingleCoffee :coffee="coffee" v-if="coffee" />
    </div>

    <div class="error" v-if="error">
      <p>{{ error }}</p>
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

const coffee = JSON.parse(localStorage.getItem("coffee"));
const method = JSON.parse(localStorage.getItem("method"));

const router = useRouter();

const error = ref(null);
const imgFile = ref(null);
const img = ref({
  src: null,
  alt: "",
});

const onFile = (e) => {
  error.value = null;
  const files = e.target.files;
  if (!files.length) return;

  const fileType = files[0].type.toString().split("/");

  if (fileType[0] != "image") {
    error.value = "File must be an image";
    return;
  }

  // imgSrc.value = files[0].name;
  img.value.src = files[0].name;

  imgFile.value = files[0];
};

const addNewBrew = () => {
  if (!imgFile.value) {
    error.value = "File is required";
    return;
  }
  if (error.value) {
    return;
  }

  try {
    uploadImg(imgFile.value);

    if (!img.value.alt) {
      img.value.alt = "Coffee image named: " + imgFile.value.name.split(".")[0];
    }

    addBrew({
      coffee: coffee,
      method: method,
      img: img.value,
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
  position: fixed;
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
  padding: 1.8rem 0 1rem 0;
}

.add-brew-form {
  background: var(--brew-bg-color);
  border-radius: 25px;
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