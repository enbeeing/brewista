import { ref } from "vue";

const getCoffees = () => {
    const coffees = ref([]);
    const methods = ref([]);
    const brews = ref([]);
    const error = ref([]);
    const load = async () => {
        try {
            let data = await fetch("http://localhost:3000/coffees");
            if(!data.ok) {
                throw Error("could not fetch coffee data")
            }
            coffees.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { coffees, error, load }
}

export default getCoffees