const tempBodensee = document.getElementById("tempBodensee")
const badi_romanshorn_id = 16;
const bodensee_id = 51;
const url = `https://www.wiewarm.ch/api/v1/temperature.json/${badi_romanshorn_id}`;

async function requestTemp() {
    fetchPromise = fetch(url);
    response = await fetchPromise;
    if(response.ok) {
        json = await response.json();
        tempBodensee.textContent = json[bodensee_id].temp + "°C";
    }
};

requestTemp();