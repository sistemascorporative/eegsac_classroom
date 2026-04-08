export const getColorByEstCur = (state) => {
  let color = '';
  let borderColor = '';
  let textColor = '';

  switch (state) {
    case 'Pendiente':
      color = '#F5ECA1'; //naranja
      borderColor = '#D3BF13';
      textColor = '#D3BF13';
      break;
    case 'En curso':
      color = '#96D1F1'; //azul
      borderColor = '#299CDB';
      textColor = '#299CDB';
        break;
    case 'Finalizado': //verde
      color = '#C3E7C7';
      borderColor = '#78DB83';
      textColor = '#78DB83';
      break;
    default:
      color = '#E1E1E1'; // Gris por defecto
      borderColor = '#555555';
      textColor = '#555555';

  }
  return {
    backgroundColor: color,
    border: `3px solid ${borderColor}`,
    color: textColor,
    fontSize: '12px',
    fontWeight: 'bold',
    width: '80%',
    maxWidth: '100px',
    height: '80%',
    borderRadius: '5px',
    justifyContent: 'center',
    verticalAlign: 'middle',
  };
};