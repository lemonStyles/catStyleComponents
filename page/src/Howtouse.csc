<view type="#" components="use">
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
</view>
