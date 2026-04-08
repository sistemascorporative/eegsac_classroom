import { useState, useEffect } from "react";

function Tab() {

  const [toggleState, setToggle] = useState(1);
  const toggleTab = (index) => {
      setToggle(index);
  }

  return (
    <div className="tab-container">
      <div className="tabs">
        <div className={toggleState === 1 ? "tab-item active" : "tab-item"} onClick={() => toggleTab(1)}>Tab 1</div>
        <div className={toggleState === 2 ? "tab-item active" : "tab-item"} onClick={() => toggleTab(2)}>Tab 2</div>
        <div className={toggleState === 3 ? "tab-item active" : "tab-item"} onClick={() => toggleTab(3)}>Tab 3</div>
      </div>
      <div className="tab-content">
        <div className={toggleState === 1 ? "tab-pane active" : "tab-pane"}>
          <h2>Content 1</h2>
        </div>
      </div>
      <div className="tab-content">
        <div className={toggleState === 2 ? "tab-pane active" : "tab-pane"}>
          <h2>Content 2</h2>
        </div>
      </div>
      <div className="tab-content">
        <div className={toggleState === 3 ? "tab-pane active" : "tab-pane"}>
          <h2>Content 3</h2>
        </div>
      </div>
    </div>
  )
}

const SimpleTab = ({activeKey, children}) => {

  const [key, setKey] = useState(activeKey);

  return (
    <div className="tab-container">
      <div className="tabs">
        {children.map(item => {
          return(
            <div key={item.props.akey} className={key === item.props.akey ? "tab-item active" : "tab-item"}
              onClick={() => setKey(item.props.akey)}>
              {item.props.title}
            </div>
          )
        })}
      </div>
      <div className="tab-content">
        {children.map(item => {
          return(
            <div key={item.props.akey} className={key === item.props.akey ? "tab-pane active" : "tab-pane"}>
              <h2>{item.prop}</h2>
              <p>{item.props.children}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const TabSections2 = ({activeKey, sections}) => {

  const [key, setKey] = useState(activeKey);

  return (
    <div className="tab-container">
      <div className="tabs">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={key === index ? "tab-item active" : "tab-item"}
            onClick={() => setKey(index)}
          >
            {`Tab ${index + 1}`}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={key === index ? "tab-pane active" : "tab-pane"}
          >
            <SectionComponent />
          </div>
        ))}
      </div>
    </div>
  )
}

const TabSections = ({ activeKey=0, sections }) => {
  const [activeTab, setActiveTab] = useState(activeKey);

  useEffect(() => {
    setActiveTab(0); // Reinicia a 0 al cambiar las secciones
  }, [sections]);
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleNext = () => {
    setActiveTab((prev) => (prev < sections.length - 1 ? prev + 1 : prev));
  };

  const handlePrevious = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className="w-auto space-y-3">
      <div className="flex flex-wrap gap-1 mx-auto">
        <span className="text-center text-[14px] px-4 py-2 bg-white rounded-lg border border-b-4 border-gray-300">
          Secciones:
        </span>
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className={`min-w-[40px] rounded-lg px-3 py-2 text-center text-[15px] cursor-pointer transition-all duration-500 ease-in-out
              ${
                activeTab === index
                ? 'bg-sky-400 bg-opacity-20 border border-b-4 border-sky-500 text-primary opacity-100'
                : 'bg-white opacity-60 border border-b-4 border-gray-400 hover:bg-sky-400 hover:bg-opacity-20 hover:border-[#357EC2] hover:border-opacity-10'
              }`}
            onClick={() => handleTabClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="px-5 py-7 bg-white rounded-lg shadow-lg space-y-5">
        <div>
          {sections.map((SectionComponent, index) => (
            <div
              key={index}
              className={`${
                activeTab === index ? 'block' : 'hidden'
              } text-[#333]`}
            >
              <SectionComponent key={index} />
            </div>
          ))}
        </div>
        <div className="px-5 flex flex-row gap-5 justify-center">
          <button
            className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
            onClick={handlePrevious}
            disabled={activeTab === 0}
          >
            ⭠  <span className="ml-2">Anterior</span>
          </button>
          <button
            className="text-sm px-auto py-2 min-w-[100px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
            onClick={handleNext}
            disabled={activeTab === sections.length - 1}
          >
            <span className="mr-2">Siguiente</span>  ⭢
          </button>
        </div>
      </div>
    </div>
  );
};

export {Tab, SimpleTab, TabSections}