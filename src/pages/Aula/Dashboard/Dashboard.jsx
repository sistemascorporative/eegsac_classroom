import menuItems from '../../../pathMenu/MenuItemsPath';


function Dashboard() {
  return (
    <div className="space-y-5">
      <h2 className="text-center">Bienvenidos al aula virtual de
        <span className="text-sky-700 uppercase"> Expert Engineers </span>
        <span className="text-sky-900 uppercase">Group SAC</span></h2>
      <p>En el menú de nuestra plataforma usted encontrará 3 items, a continuación le explicamos que contiene cada submenú.</p>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {menuItems().map((item, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg text-primary flex flex-row gap-4">
            <span className="text-primary w-10">{item.iconFill}</span>
            <div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Dashboard