const addBrew = async (brew) => {
    await fetch(`http://localhost:3000/brews`, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(brew)
    });
};

export default addBrew