async function getData() {
  const response = await fetch('ldr-data.json');
  const data = await response.json();
  console.log(data);

  document.querySelector("#songcontainer").innerHTML=outputHTML(data);
  /* passing data into function */
}

getData();

function outputHTML(data){
    let html = '';

    for( let key in data){
        console.log(key);
        html +=    `<div class="topsongs">
        <a href="${data[key].musicvideo}">
            <img src="${data[key].albumcover}">
        </a>
        <h3>${data[key].rankingtitle}</h3>
        <p><span class="replays">${data[key].replays}</span> replays</p>
        </div>`;
    }
    return html;

}