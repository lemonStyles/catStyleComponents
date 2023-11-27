//created using doStyle 
const img =  (props) => {
        
      return `
  <div>
    <title>cat</title>
    <img src="./asset/img/cat-2.jpg" />
  </div>
`;
    }


const installation =  (props) => {
        
      return `
  <div>
    <h1 class="text">installation</h1>
    <pre>Download at https://cat-style-componentse.webpage</pre>
    <pre>then open the downloaded csc and run it.</pre>
    <pre>Run terminal and type npm start</pre>
    <pre>then it will appear</pre>
    <pre>
            > cat-style-components@1.0.0 start
            > node @style/server.js
            
             web page running on  http://localhost:3500
             ^_~  Enjoy your code and start working on your project!
             O_O   set doStyle in the catStyleComponents.json file
    
            encryptionMode  false
            </pre
    >
  </div>
`;
    }


const about =  (props) => {
        
      return `
  <h1 class="text">
    csc is a compiler, from csc syntax code to javascript. By using csc, writing
    will be easier. The writing is the same as writing html in general, although
    there is a little code added. using csc can create components.
  </h1>
  <h1 class="text">
    by using csc you can only create a static web with little reactive
  </h1>
  <h1 class="text">
    <a style="color: blueviolet" href="#installation">installation 🚀</a>
  </h1>
`;
    }


const home =  (props) => {
        
      return `
  <h1 class="text">home</h1>
  ${btn({ name: "click", })}
`;
    }


const use =  (props) => {
        
      return `
  <style>
    .main-content {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      opacity: 10;
    }
  </style>

  <h1 class="text">How to use</h1>
  <center>
    <img src="./asset/img/import.png" />
    <h3 class="text">import the required csc file</h3>
  </center>
  <img src="./asset/img/router.png" />
  <h3 class="text">set up a router</h3>
  <center>
    <img src="./asset/img/page.png" />
    <h3 class="text">
      example component, in it there is type="async" to create an async
      component and if you want to create without async then create it with
      type="#". and in it there is also a component="page1" it is the name of
      the component. remember the name of the component that should not be made:
      page, router. to set the default component you can set in
      catStyleComponents.json in it there are
    </h3>
    <pre>
        "defaultComponents": "home", //is the main component if the router is empty
        "defaultPage" : "page1" //is the main page       
      </pre
    >
  </center>
  <img src="./asset/img/setRouter.png" />
  <h3 class="text">
    to specify where router-related components are displayed.
  </h3>
  <center>
    <img src="./asset/img/json.png" />
    <h3 class="text">
      In addition, there is also a feature to randomize the code generation
      string stored in "public/pageScript/index.js". You can set it in
      catStyleComponents.json by changing "encryptionMode": "false", to
      "encryptionMode": "true", and can also configure according to
      <a
        href="https://github.com/javascript-obfuscator/javascript-obfuscator"
        target="_blank"
        style="color: blue; text-decoration: underline"
        >https://github.com/javascript-obfuscator/javascript-obfuscator</a
      >
    </h3>
  </center>
  <img src="./asset/img/btn.png" />
  <h3 class="text">button component with props</h3>
  <img src="./asset/img/props.png" />
  <h3 class="text">component call with props</h3>
  <img src="./asset/img/props2.png" />
  <h3 class="text">if calling the async component with await</h3>
  <center>
    <img src="./asset/img/use.png" />
    <h3 class="text">
      to include scripts in components that are in the same file,
      <br />
      can only use arrow functions and cannot use const directly only the
      function name so that it can be read by the component
    </h3>
  </center>
  <img src="./asset/img/create.png" />
  <h3 class="text">
    to create a global script,
    <br />
    like writing js code in general
  </h3>
`;
    }


const btn =  (props) => {
        Ifclick = () => {
    alert("alert");
  };
  console.log("a");
      return `
  <button onclick="Ifclick()">${props.name}</button>
`;
    }

const page1 = async (props) => {
        
      return `
  <div class="container">
    <div class="content">
      <header class="header">
        <a href="#">
          <h1 class="title white">@cat style components v-1</h1>
        </a>
      </header>
      <div class="main-content">
        <a href="#image"><button class="btn">image 📸</button></a>
        <a href="#about"><button class="btn">about 👌</button></a>
        <a href="#Howtouse"><button class="btn">How to use 🔎</button></a>
        ${await router(null)}
      </div>
    </div>
  </div>
`;
    }

async function router() {
    let fragment = window.location.hash;
    let page;
    let [route] = fragment.split("/");

    switch (route) {
      case '#about':
        page = about();
        break;
      case '#image':
        page = img();
        break;
      case '#installation':
        page = installation();
        break;
      case '#Howtouse':
        page = use();
        break;
      default:
        page = home();
        break;
    }

    return page;
  }

const page = async () => {
document.getElementById("app").innerHTML = await  page1();
};
window.addEventListener("hashchange", page);
page();