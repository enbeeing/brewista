import { ref } from "vue";

const getBrews = () => {
    const brews = ref([]);
    const error = ref(null);
    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/brews");
            if(!data.ok) {
                throw Error("could not fetch brew data")
            }
            brews.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { brews, error, load }
}

export default getBrews