
function setSettings(id) {
    if (id === 'url') {
        let url = document.getElementById(id);
        chrome.storage.local.set({"url": url.value}, () => {
            console.log('Set ' + url.value);
            url.value = "";
        });
        return;
    }
    if (id === 'isUpdate') {
        let isUpdate = document.getElementById(id);
        chrome.storage.local.set({"isUpdate": isUpdate.checked}, () => {
            console.log('Set ' + isUpdate.checked);
        });
        return;
    }
}

function getSettingsUrl(id) {
    chrome.storage.local.get(["url", "isUpdate"], (result) => {
        let preference = ''
        preference = result.url;
        preference = preference == null ? "" : preference;
        preference = preference === '' ? 'main.html' : preference;
        if (preference == "chrome://newtab/" || preference == "chrome://newtab") {
            preference = "https://www.google.ru/_/chrome/newtab?ie=UTF-8";
        }
        if (id === 'url') {
            if (preference != "") {
                let isUpdate = result.isUpdate;
                if (isUpdate == null) {
                    isUpdate = false;
                }
                
                if (!isUpdate){
                    chrome.tabs.query({active: true}, (tab) => {
                        chrome.tabs.create({"url": preference}, (_tab) => {
                            chrome.tabs.remove(tab.id);
                        });
                    });
                } else {
                    chrome.tabs.getCurrent((tab) => {
                        let selected = false;
                        chrome.tabs.update(tab.id, {
                            "url": preference,
                            selected: true
                        }, () => {
                            chrome.tabs.executeScript(tab.id, {code:"window.focus()"})
                            window.focus()
                        });
                    });
                }
                //window.location.replace(preference);
            }
        }
    });
}

function getSettingsIsUpdete(id) {
    chrome.storage.local.get("isUpdate", (result) => {
        let preference = ''
        preference = result.isUpdate;
        preference = preference == null ? false : preference;
        if (id === 'isUpdate') {
            let cb = document.getElementById("isUpdate")
            if (cb != null) {
                cb.checked = preference;
            }
        }
    });
}