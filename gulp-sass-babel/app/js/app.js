let mymap = L.map('mapid').setView([51.505, -0.09], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZnJlc2Nod2FtbSIsImEiOiJja3N1NnJvcW0wMG1rMnhtanJrM3hrZTl6In0.sqScbFRkOGbzGKOaPRDj7w'
}).addTo(mymap);

document.querySelector('button').addEventListener('click', (e) => {

        let ipInput = document.querySelector('.ipSearch').value
        let ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (ipInput.match(ipformat)) {
            fetch('https://geo.ipify.org/api/v1?apiKey=at_zDED4T1siN02XXzyDJcKePaXQ127v&ipAddress=' + ipInput)
                .then(data => {
                    return data.json()
                }).then((data) => {
                if (mymap !== undefined) { mymap.remove();}
                let latitude = data.location.lat;
                let longitude = data.location.lng;
                mymap = L.map('mapid').setView([latitude, longitude], 12);
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: 'pk.eyJ1IjoiZnJlc2Nod2FtbSIsImEiOiJja3N1NnJvcW0wMG1rMnhtanJrM3hrZTl6In0.sqScbFRkOGbzGKOaPRDj7w'
                }).addTo(mymap);
            })
        } else {
            document.getElementById('alertMessage').textContent += 'Please input correct IP address'
        }
})




