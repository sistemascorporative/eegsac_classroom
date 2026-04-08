import { TbPointFilled } from "react-icons/tb";


const List = ({list, icon}) => {
  return(
    <ul className="mt-3 flex flex-col space-y-2">
      {list.map((li, index) => (
        <li key={index} className="flex gap-1 items-center">
          {icon}
          <p className="">{li}</p>
        </li>
      ))}
    </ul>
  );
};

const ListIcon = ({list, icon}) => {
  return(
    <ul className="mt-3 flex flex-col space-y-2">
      {list.map((li, index) => (
        <li key={index} className="flex gap-1">
          <span className="mt-1">{icon}</span>
          <p className="">{li}</p>
        </li>
      ))}
    </ul>
  );
};

const ListIconWithBg = ({list, icon}) => {
  return(
    <ul className="mt-3 flex flex-col space-y-3">
      {list.map((li, index) => (
        <li key={index} className="bg-gray-100 rounded flex gap-3 p-2 h-full items-center">
          <span className="mt-1">{icon}</span>
          <p className="">{li}</p>
        </li>
      ))}
    </ul>
  );
};

const ListPoint = ({list}) => {
  return(
    <ul className="list-disc pl-8 text-[15px] text-gray-600 marker:text-sky-600">
      {list.map((li, index) => (
        <li key={index} className="mt-1">
          {li}
        </li>
      ))}
    </ul>
  );
};

const ListPointBold = ({list}) => {
  return(
    <ul className="ml-3 space-y-2">
      {list.map((li, index) => {
        const [beforeColon, afterColon] = li.split(':', 2); // Divide el texto en dos partes
        return (
          <li key={index} className="flex gap-1 text-primary">
            <TbPointFilled className="mt-1" style={{minHeight:14, minWidth:14, maxHeight:14, maxWidth:14}}/>
            <p>
              <strong>{beforeColon}:</strong>{afterColon}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const ListNumbered = ({list}) => {
  return(
    <ul className="ml-3 space-y-2">
      {list.map((li, index) => (
        <li key={index} className="flex gap-1">
          <span className="text-sm text-gray-500">{index + 1}.</span>
          <p>{li}</p>
        </li>
      ))}
    </ul>
  );
};


const ListNumberedBold = ({list}) => {
  return (
    <ul className="ml-4 space-y-2">
      {list.map((li, index) => {
        const [beforeColon, afterColon] = li.split(':', 2); // Divide el texto en dos partes
        return (
          <li key={index} className="flex gap-2 text-gray-500">
            <span className="font-bold">{index + 1}.</span>
            <p>
              <strong>{beforeColon}:</strong> {afterColon}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const ListNumberedCon = ({list, start=1 }) => {
  return(
    <ul className="ml-3 space-y-2">
      {list.map((li, index) => (
        <li key={index} className="flex gap-1">
          <span className="text-sm text-gray-500">{start + index}.</span>
          <p>{li}</p>
        </li>
      ))}
    </ul>
  );
};

const ListNumberedBoldCon = ({ list, start = 1 }) => {
  return (
    <ul className="ml-4 space-y-2">
      {list.map((li, index) => {
        const [beforeColon, afterColon] = li.split(':', 2); // Divide el texto en dos partes
        return (
          <li key={index} className="flex gap-2 text-gray-500">
            {/* Personalización de la numeración, empezando desde 'start' */}
            <span className="font-bold">{start + index}.</span>
            <p>
              {/* Resaltado en negrita del texto antes de ':' */}
              <strong>{beforeColon}:</strong> {afterColon}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

const ListResponsive = ({list, icon}) => {
  return(
    <div className="flex flex-wrap">
      {list.map((li, index) => (
        <div className="p-1 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-2 h-full items-center">
            {icon}
            <p className="ml-2">{li}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
const ListResponsive3Col = ({list, icon}) => {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((li, index) => (
        <div key={index} className="p-1 w-full">
          <div className="bg-gray-100 rounded flex p-2 h-full items-center">
            <span className="w-5">{icon}</span>
            <p className="ml-2">{li}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ListLettered = ({ list }) => {
  return (
    <ol className="ml-3 space-y-2">
      {list.map((li, index) => (
        <li key={index} className="flex gap-1">
          {/* Convertimos el índice en una letra minúscula usando el código ASCII */}
          <span className="text-sm text-gray-500">
            {String.fromCharCode(97 + index)}.
          </span>
          <span>{li}</span>
        </li>
      ))}
    </ol>
  );
};

export {
  List,
  ListIcon,
  ListIconWithBg,
  ListPoint, ListPointBold,
  ListNumbered, ListNumberedBold,
  ListNumberedBoldCon, ListNumberedCon,
  ListLettered,
  ListResponsive,
  ListResponsive3Col
};