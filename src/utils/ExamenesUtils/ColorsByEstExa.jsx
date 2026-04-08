export const getColorByEstExa = (state) => {
  let color = '';
  let borderColor = '';
  let textColor = '';

  switch (state) {
    case 'Pendiente':
      color = '#F3D7B6'; //naranja
      borderColor = '#EC8511';
      textColor = '#EC8511';
      break;
    case 'Reprobado'://rojo
      color = '#F9BEB6';
      borderColor = '#E43E27';
      textColor = '#E43E27';
      break;
    case 'Aprobado'://verde
      color = '#CBF1C1';
      borderColor = '#45C822';
      textColor = '#45C822';
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
    minWidth: '74px',
    maxWidth: '95px',
    height: '80%',
    borderRadius: '5px',
    justifyContent: 'center',
    verticalAlign: 'middle',
    padding: '3px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
};