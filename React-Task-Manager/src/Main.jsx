import { useState } from "react";

const Main = (prop) => {
  // console.log(newtodo.newtodo)
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    prop.input(prop.id, newValue);
  };

  const [isReadOnly, setIsReadOnly] = useState(true);

  const handleEdit = (e) => {
    if (e.target.innerText == "SAVE") {
      setIsReadOnly(true);
      e.target.innerText = "EDIT";
    } else {
      setIsReadOnly(false);
      e.target.innerText = "SAVE";
    }
  };

  return (
    <>
      <main>
        <section className="task-list">
          <h2>Tasks</h2>
          <div className="task">
            <div className="content">
              <input
                type="text"
                className="text"
                value={prop.newtodo}
                readOnly={isReadOnly}
                onChange={handleInputChange}
              />
            </div>
            <div className="actions">
              <button className="edit" onClick={handleEdit}>
                edit
              </button>
              <button className="delete" onClick={() => prop.onDel(prop.id)}>
                delete
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
