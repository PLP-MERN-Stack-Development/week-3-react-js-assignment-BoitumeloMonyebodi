// =================== pages/Home.jsx ===================
import React from 'react';
import Card from '../components/Card';
import Button from '../components/button.jsx';

const Home = () => (
  <div className="space-y-4 flex flex-col items-center sm:items-start w-full">
    <Card title="Welcome">
      <p className="mb-4">This is Boitumelo's responsive React + Tailwind project scaffold.</p>
      <Button variant="primary">Click Me</Button>
    </Card>
  </div>
);

export default Home;

