import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [menu, setMenu] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/menu')
      .then(response => response.json())
      .then(data => setMenu(data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  return (
    <div>
      <h1>My Restaurant Menu</h1>
      <ul>
        {menu.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;


