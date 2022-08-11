console.log("Index!");

const DOMHandler = function(parentSelector) {
  const parent = document.querySelector(parentSelector);
  if (!parent) throw new Error("Parent not found");

  return {
    Load(module) {
      parent.innerHTML = module;
      module.addListeners();
    }
  }
}

const App = DOMHandler("#root");
console.log(App);

// Crear Modulos
function createHeader() {
  const template = `<h1>Header</h1>`;
  
  const listenHeaderCLick = () => {
    const h1 = document.querySelector("h1");
    h1.addEventListener("click", () => console.log("Header click"));
  }
  return {
    toString() {
      return template;
    },
    addListeners() {
      listenHeaderCLick();
    }
  }
}

const Header = createHeader();
App.Load(Header);