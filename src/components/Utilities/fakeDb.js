const addItemToLocalStorage = (id) => {
    let appliedJobs = {};

    const storedJobs = localStorage.getItem('applied-jobs');
    if(storedJobs){
        appliedJobs = JSON.parse(storedJobs);
    }

    appliedJobs[id] = 1;

    localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
}

const getItemFromLocalStorage = () =>{
    const appliedJobs = localStorage.getItem('applied-jobs');
    if(appliedJobs){
        const storedJobs = JSON.parse(appliedJobs);
        return storedJobs;
    }
}

export {
    addItemToLocalStorage,
    getItemFromLocalStorage
}