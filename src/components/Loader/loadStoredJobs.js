import { getItemFromLocalStorage } from "../Utilities/fakeDb";

const loadStoredJobs = async(jobId = null) => {
    const loadedJobsJson = await fetch('../data.json');
    const loadedJobsList = await loadedJobsJson.json();
    const loadedJobs = loadedJobsList.jobListings;
    // console.log(loadedJobs);

    const storedJobs = getItemFromLocalStorage();
    let storedAppliedJobs = [];
    for(const id in storedJobs){
        const addedJobs = loadedJobs.find(pd => pd.id == id);
        if(addedJobs){
            storedAppliedJobs.push(addedJobs);
        }
    }
    // console.log(storedAppliedJobs);
    return {storedAppliedJobs , jobId, loadedJobs};
}

export default loadStoredJobs;