export async function get() {
    const response = await fetch('http://localhost:8099/questions',
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )

    try {
        const rep = await response.json()
        if (!response.ok) {
            return Promise.reject("Response not ok. ")
        }
        else {
            return rep;
        }

    }
    catch (error) {
        return "Error: " + error
    }
}

export async function getQuestion(id) {
    const response = await fetch('http://localhost:8099/questions/' + id,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )

    try {
        const rep = await response.json()
        if (!response.ok) {
            return Promise.reject("Response not ok. ")
        }
        else {
            return rep;
        }

    }
    catch (error) {
        return "Error: " + error
    }
}

export async function post(id, answerId) {
    const response = await fetch('http://localhost:8099/questions/' + id + '/answer',
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                id: answerId,
            })
        }
    )
    if (response.statusText != "No Content") {
        console.log(response);
        return await response.json();
    }
    else {
        return null;
    }
}
