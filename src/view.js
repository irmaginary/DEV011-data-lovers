// estas funciones son de ejemplo

export const renderItems = (items) => {
  console.log(items, "*****");
  const res = [];
  items.forEach((item) => 
  {
    res.push(`
    <li class="personaje" itemscope itemtype="Personaje">
        <h2 itemprop="name">${item.name}</h2>
        <div>
          <img itemprop="image" src="${item.image}">
        </div>
        <h3>Especie: <span itemscope itemprop="species">${item.species}</span></h3>
        <div class="info">
          <div>
            <div>Tipo: <span itemprop="type">${item.type}</span></div>
            <div>Status: <span itemprop="status">${item.status}</span></div>
          </div>
          <div>
            <div>Gender: <span itemprop="gender">${item.gender}</span></div>
            <div>Origen: <span itemprop="origin">${item.origin.name}</span></div>
          </div>
        </div>
    </li>`);
  });

return res;
};


