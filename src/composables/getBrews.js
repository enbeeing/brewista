import { ref } from "vue";

const getBrews = (filter = null) => {
    const brews = ref([]);
    const error = ref(null);
    const load = async () => {
        try {
            await fetch("http://localhost:3000/brews")
            .then(res => res.json())
            .then(data => {
                if(!filter) {
                    brews.value = data;
                }
                else if (filter == "fave"){
                    brews.value = data.filter(d => d.isFave);
                }
            });
        } 
        catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { brews, error, load }
}

export default getBrews