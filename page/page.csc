<import src="src/img.csc" />
<import src="src/installation.csc" />
<import src="src/about.csc" />
<import src="src/home.csc" />
<import src="src/Howtouse.csc" />
<import src="src/button.csc" />

<script router>
  about = about();
  image = img();
  installation = installation();
  Howtouse = use();
</script>



<view type="async" components="page1">
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
        <await-router() />
      </div>
    </div>
  </div>
</view>