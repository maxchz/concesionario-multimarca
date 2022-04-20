import PublicLayout from 'layouts/PublicLayout';
import React from 'react';
import {useDarkMode} from 'context/darkMode';

const Index = () => {

  const {darkMode}= useDarkMode();
  return (
    <PublicLayout>
          <div className={`flex h-full bg-gray-${darkMode ? "900":"50"}`}>Contenido o Home de Consecionario</div>

    </PublicLayout>
  )
}

export default Index;