const apiRoot = "https://ai-voice.sniper7kills.com";

export const postAudio = (audio, prompt, uuid) => {
    return fetch(apiRoot + `api/audio/?uuid=${uuid}&prompt=${prompt}`, {
        method: "POST",
        body: audio,
        headers: {
            "Content-Type": "audio/wav"
        }
    })
};

export const getPrompt = uuid => {
    return fetch(apiRoot + `api/prompt/?uuid=${uuid}`, {
        method: "GET"
    });
};

export const getUser = uuid => {
    return fetch(apiRoot + `api/user/?uuid=${uuid}`, {
        method: 'GET'
    })
}

export const getAudioLen = (uuid, audio) => {
    return fetch(apiRoot + `api/audio/?uuid=${uuid}&get_len=True`, {
        method: "POST",
        body: audio,
        headers: {
            "Content-Type": "audio/wav"
        }
    })
}

export const createUser = (uuid, name) => {
    const data = {
        uuid: uuid,
        user_name: name
    }
    return fetch(apiRoot + `api/user/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
}

export const startConversion = (uuid) => {
    const data = {
        uuid: uuid,
    }
    return fetch(apiRoot + `api/ljspeech/?uuid=${uuid}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    });
};

var saveData = (function () {
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    return function (data, fileName) {
        var json = JSON.stringify(data),
            blob = new Blob([json], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
}());

export const downloadPackage = (uuid) => {
    return fetch(apiRoot + `api/ljspeech/?uuid=${uuid}`, {
        method: 'GET'
    }).then(res => res.arrayBuffer())
    .then(buffer => {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var fileName="LJSpeech.tar.gz"
        var blob = new Blob([buffer], {type: "octet/stream"}),
        url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
     })
     .catch(err => console.error(err)); // Never forget the final catch!

}