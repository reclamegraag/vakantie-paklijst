import React, { useState } from 'react';

const PackingList = () => {
  const initialCategories = [
    {
      name: 'Kleding',
      items: [
        'T-shirts', 'Broeken', 'Shorts', 'Ondergoed', 'Sokken', "Pyjama's", 
        'Zwemkleding', 'Regenjas', 'Wandelschoenen', 'Slippers', 'Pet of hoed',
        'Warme trui of fleece', 'Sportkleding', 'Dresscode kleding (indien nodig)'
      ]
    },
    {
      name: 'Toiletartikelen',
      items: [
        'Tandenborstel', 'Tandpasta', 'Deodorant', 'Zonnebrandcrème', 'Aftersun', 
        'Shampoo', 'Conditioner', 'Bodylotion', 'Insectenspray', 'Scheerspullen',
        'Haarborstel/kam', 'Lippenbalsem', 'Medicijnen', 'EHBO-kit', 'Handdoeken'
      ]
    },
    {
      name: 'Documenten en Geld',
      items: [
        'Paspoorten', 'ID-kaarten', 'Rijbewijs', 'Verzekeringspapieren', 
        'Reserveringsbevestigingen', 'Europese zorgpas', 'Creditcard', 'Contant geld',
        'Kopieën van belangrijke documenten', 'Reisgids of kaarten'
      ]
    },
    {
      name: 'Elektronica',
      items: [
        'Telefoons', 'Opladers', 'Powerbank', 'Camera', 'E-readers of tablets',
        'Hoofdtelefoon', 'Verloopstekkers', 'Wekker'
      ]
    },
    {
      name: 'Voor de auto',
      items: [
        'Navigatiesysteem', 'Parkerschijf', 'EHBO-kit', 'Reservesleutel', 
        'Gevarendriehoek', 'Reservelampjes', 'Waarschuwingshesjes', 'Snacks en water',
        'Zonnebril', 'Tollbadge of wegenvignet (indien nodig)'
      ]
    },
    {
      name: 'Activiteiten',
      items: [
        'Wandelrugzakken', 'Waterflessen', 'Verrekijker', 'Strandlakens', 
        'Strandspeelgoed', 'Boeken of spelletjes', 'Dagrugzak', 'Wandelstokken',
        'Zwembril en snorkel', 'Picknickdeken', 'Fotocamera'
      ]
    },
    {
      name: 'Overig',
      items: [
        'Zaklamp', 'Paracetamol', 'Pleisters', 'Zonnebrillen', 'Wasmiddel', 
        'Vuilniszakken', 'Snacks voor onderweg', 'Notitieboekje en pen',
        'Reiskussen', 'Oordopjes', 'Wasknijpers en waslijn'
      ]
    }
  ];

  const [categories, setCategories] = useState(initialCategories.map(category => ({
    ...category,
    items: category.items.map(item => ({ name: item, collected: false, packed: false }))
  })));

  const handleToggle = (categoryIndex, itemIndex, type) => {
    setCategories(prevCategories => {
      const newCategories = [...prevCategories];
      newCategories[categoryIndex].items[itemIndex][type] = !newCategories[categoryIndex].items[itemIndex][type];
      return newCategories;
    });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Vakantie Paklijst</h1>
      {categories.map((category, categoryIndex) => (
        <div key={category.name} style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>{category.name}</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '8px', textAlign: 'left', width: '60%' }}>Item</th>
                <th style={{ padding: '8px', textAlign: 'center', width: '20%' }}>Verzameld</th>
                <th style={{ padding: '8px', textAlign: 'center', width: '20%' }}>Ingepakt</th>
              </tr>
            </thead>
            <tbody>
              {category.items.map((item, itemIndex) => (
                <tr key={item.name} style={{ borderBottom: '1px solid #e0e0e0' }}>
                  <td style={{ padding: '8px' }}>{item.name}</td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={item.collected}
                      onChange={() => handleToggle(categoryIndex, itemIndex, 'collected')}
                    />
                  </td>
                  <td style={{ padding: '8px', textAlign: 'center' }}>
                    <input
                      type="checkbox"
                      checked={item.packed}
                      onChange={() => handleToggle(categoryIndex, itemIndex, 'packed')}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PackingList;