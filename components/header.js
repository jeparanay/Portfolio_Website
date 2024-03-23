class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>

      .hamburgernav {
        margin-top: -50px;
        height:65px;
        clear:both;
        float: right;
      }

      .hamburgernav ul li {
        float: left;
        top: 6px;
        position: relative;
        background: rgba(255, 255, 255, 0.5);
        padding: 6px 10px;
        padding-right: 30px;
      }

      .hamburgernav ul li:first-child{
        border-radius: 20px 0px 0px 20px;
        padding-left: 15px;
      }

      header h1 {
        text-transform: uppercase;
        float:left;
        padding-left: 30px;
        padding-top: 8px;
        padding-bottom: 8px;
        padding-right: 15px;
        margin-top: 15px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 0px 20px 20px 0px;
      }

      header a {
        color: black;
      }

      .hello h2 {
        margin-top: 20px;
      }
      .header {
        top:0;
        z-index: 100;
        position:fixed;
        width: 100%;
        height: 45px;
      }

      .selected {
        color: black;
        border-bottom: 4px solid black;
        padding-bottom: 4px;
      }

      .header h1 a:hover {
        color: #568056;
        border-bottom: 0px;
      }

      .header a:hover{
        text-decoration: none;
        color:#568056;
        border-bottom: 4px solid #568056;
        padding-bottom: 4px;
      }

      .show {
          margin-top: -60px;
      }








      @media (max-width: 992px) {

              .hamburger {
                  width: 50px;
                  height: 28px;
                  position: absolute;
                  right: 0;
                  display: block;
                  margin-top: 20px;
                  margin-bottom: 20px;
                  z-index: 5;
                  background: rgba(255, 255, 255, 0.5);
                  border-radius: 4px;
                  padding-top: 4px;
                  padding-left: 13px;
                  border-radius: 20px 0px 0px 20px;
              }

              .hamburger:hover {
                box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
              }

              .line {
              	width: 25px;
              	height: 3px;
              	margin: 3px 0;
              	background: black;
              }

              .hamburgernav {
              	padding-top: 10px;
              	height: auto;
              	display: none;
              	width: 100%;
              	height: 105vh;
              	font-size: 30px;
              	text-align: center;
              	opacity: 0;
              	background: linear-gradient(45deg, #de89d8, #d189de, #aa89de, #89b3de, #89c6de, #89d2de, #89deca, #ddde89, #dec489);
              	background-size: 300% 300%;
              	-webkit-animation: rainbow 10s ease infinite;
              	-z-animation: rainbow 10s ease infinite;
              	-o-animation: rainbow 10s ease infinite;
              	animation: rainbow 10s ease infinite;
              }

              .hamburgernav ul {
                height:500px;
                margin: 0 auto;
                padding-top: 100px;

              }

              .hamburgernav ul li {
                float:none;
                top: 6px;
                position: relative;
                background: none;
                padding: 10px;
                padding-bottom: 10px;
                textalign:center;
              }

              .show {
                  display: block;
              }
      }



      </style>
      <header class="header">
  			<div class="moveover">
        <h1 class="h6"><strong>Julia Paranay</strong></h1>
  			<nav class='hamburgernav'>
  				<ul>
  					<li> <a href="index.html">Design Work</a> </li>
            <!-- <li> <a href="gdprojects.html">Other Projects</a></li> -->
            <li> <a href="feed.html">Creative Feed</a> </li>
            <li> <a href="about.html">About Me</a> </li>
            <li> <a href="images/resume/Resume_Julia_Paranay_2024.pdf" target="_blank">Resume</a></li>
  				</ul>
  			</nav>
        </div>
        <div class="hamburger">
  				<div class="line"></div>
  				<div class="line"></div>
  				<div class="line"></div>
  			</div>
  		</header>
    `;
  }
}

customElements.define('header-component', Header);

var active = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        active = i;
    }
}

  document.links[active].className = 'selected';
