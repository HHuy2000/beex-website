import { useState } from "react";

const apiURL = "https://script.google.com/macros/s/AKfycbwmlEx8bOIK-EK9MuwacguMekZTwYOGmIgHfT9u9wCoYPCd3fl4-areEfOWFQcBPbksQQ/exec";

function useGoogleSheet() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [failed, setFailed] = useState(false);

    const pushToSheet = data => {
        setLoading(true);
        setSuccess(false);
        setFailed(false);
        fetch(apiURL, {
            body: data,
            method: 'post',
        }).then((res) => {
            if (res.status < 400) {
                setSuccess(true);
            } else {
                setFailed(true);
            }
        }).catch(err => {
            console.log(err);
            setFailed(true);
        }).finally(() => {
            setLoading(false);
        })
    }

    return { pushToSheet, loading, success, failed };
}

export default useGoogleSheet
