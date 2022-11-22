const updateBrew = async (brew) => {
    await fetch(`http://localhost:3000/brews/${brew.id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(brew)
    });
};

export default updateBrew