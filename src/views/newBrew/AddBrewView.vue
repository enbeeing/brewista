<template>
  <div class="new-brew">
    <span class="error" v-if="error">{{ error }}</span>
    <h3>Chosen Coffee:</h3>
    <p>{{ coffee.title }}</p>
    <h3>Chosen Method:</h3>
    <p>{{ method.title }}</p>
    <h4>Upload image:</h4>
    <form>
      <label class="sr-only" for="img">Image upload</label>
      <input type="file" @change="onFile" id="img" />
      <label for="alt">Describe image: </label>
      <input type="text" id="alt" v-model="imgAlt" />
    </form>

    <button class="add-brew" @click="addNewBrew">Add</button>
  </div>
</template>

<script setup>
import addBrew from "../../composables/addBrew";
import uploadImg from "../../composables/fileUpload/uploadImg";
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  coffee: String,
  method: String,
});

const router = useRouter();
const error = ref("");
const coffee = JSON.parse(props.coffee);
const method = JSON.parse(props.method);
const imgSrc = ref("");
const imgAlt = ref("");
const imgFile = ref(null);

const onFile = (e) => {
  error.value = "";
  const files = e.target.files;
  if (!files.length) return;

  const fileType = files[0].type.toString().split("/");

  if (fileType[0] != "image") {
    error.value = "File must be an image";
  }

  imgSrc.value = files[0].name;

  // how to save into folder?
  imgFile.value = files[0];
};

const addNewBrew = () => {
  if (error.value != "") {
    return;
  }
  if (imgSrc.value == "") {
    error.value = "File is required";
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
</style>