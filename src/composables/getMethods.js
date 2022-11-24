import { ref } from "vue";

const getMethods = () => {
    const methods = ref([]);
    const error = ref(null);
    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/methods");
            if(!data.ok) {
                throw Error("could not fetch method data")
            }
            methods.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { methods, error, load }
}

export default getMethods