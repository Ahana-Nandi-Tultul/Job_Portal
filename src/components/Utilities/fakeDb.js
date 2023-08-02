const addItemToLocalStorage = (id) => {
    let appliedJobs = {};

    const storedJobs = localStorage.getItem('applied-jobs');
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs);
    }

    appliedJobs[id] = 1;

    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

export {
    addItemToLocalStorage
}