let statsRequest = new XMLHttpRequest();
statsRequest.open('GET','https://ow-api.com/v1/stats/pc/us/STRIKER-31870/profile');
statsRequest.onload = function(){
    let statsData = JSON.parse(statsRequest.responseText);
    console.log(statsRequest.responseText)
};
statsRequest.send();