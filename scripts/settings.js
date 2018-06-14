document.addEventListener('DOMContentLoaded', () => {
	getSettingsIsUpdete("isUpdate");
	let cb = document.getElementById('isUpdate');
    cb.addEventListener('change', () => {
        setSettings('isUpdate');
	});
	
	let btnApps = document.getElementById('btnApps');
    btnApps.addEventListener('click', () => {
        let url = document.getElementById("url");
        if (url == null) {
            return;
        }
        url.value = "chrome://apps/"
        setSettings('url');
    });

    let btnBookmarks = document.getElementById('btnBookmarks');
    btnBookmarks.addEventListener('click', () => {
        let url = document.getElementById("url");
        if (url == null) {
            return;
        }
        url.value = "chrome://bookmarks/"
        setSettings('url');
    });

    let btnHistory = document.getElementById('btnHistory');
    btnHistory.addEventListener('click', () => {
        let url = document.getElementById("url");
        if (url == null) {
            return;
        }
        url.value = "chrome://history/"
        setSettings('url');
    });

    let btnSettings = document.getElementById('btnSettings');
    btnSettings.addEventListener('click', () => {
        let url = document.getElementById("url");
        if (url == null) {
            return;
        }
        url.value = "chrome://settings/"
        setSettings('url');
    });

    let btnDownloads = document.getElementById('btnDownloads');
    btnDownloads.addEventListener('click', () => {
        let url = document.getElementById("url");
        if (url == null) {
            return;
        }
        url.value = "chrome://downloads/"
        setSettings('url');
    });

    let btnExtensions = document.getElementById('btnExtensions');
    btnExtensions.addEventListener('click', () => {
        let url = document.getElementById("url");
        if (url == null) {
            return;
        }
        url.value = "chrome://extensions/"
        setSettings('url');
    });

    let btnNewtab = document.getElementById('btnNewtab');
    btnNewtab.addEventListener('click', () => {
        let url = document.getElementById("url");
        if (url == null) {
            return;
        }
        url.value = "https://www.google.ru/_/chrome/newtab?ie=UTF-8"
        setSettings('url');
    });
});