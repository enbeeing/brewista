import axios from "axios";

const uploadImg = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    axios
        .post("http://localhost:4500/upload", formData)
        .then( res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
};

export default uploadImg