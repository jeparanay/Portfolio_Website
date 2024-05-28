class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
      .p-no-margin {
      	margin-bottom: 0px;
      }

      .fa {
      	width: 15px;
      	margin-right: 10px;
      }
      footer {
      	background-color: #fbfbfd;
      	color: #343a40;
      	border-top: 1px solid #ececec;
      }
      footer ul li a {
      	color: #343a40;
      }
      footer ul li a:hover {
      	color: #568056;
      	text-decoration: none;
      	font-weight: 500;
      }
      .input-group {
      	max-width: 300px;
      }
      .footer-copyright {
      	font-size: 0.9rem;
      }
      .btn-outline-dark {
      	color: #343a40;
      	background-color: transparent;
      	background-image: none;
      	border-color: #343a40;
      }


      </style>

      <!-- Footer -->
      <footer class="page-footer font-small pt-5 mt-5">
        <div class="text-center text-md-left container-fluid">
          <div class="row">
            <div class="col-lg-5 col-md-5 mb-sm-5 mb-5">
              <!--
              <h6 class="text-uppercase">Thanks for Viewing</h6>
              -->
              <p> <strong>By Day: </strong> Principal Product Designer at Motional.
              <br><strong>By Night: </strong> Painting, coding websites, & updating my portfolio.</p>
              <!-- Left Col Text -->
              <p>I'm currently available for freelance design & art commissions. Message me for more information.</p>
              <a href="mailto:jeparanay@comcast.net?Subject=Hello!" class="btn btn-dark" role="button" aria-pressed="true" target="_top"><span class="fa fa-envelope"></span>Say Hello!</a>
            </div>
            <div class="offset-lg-3 offset-md-1 col-lg-2 col-md-3 mb-md-0 mt-xs-3">
              <h5>Find Me On</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="https://www.linkedin.com/in/juliaparanay/!"><span class="fa fa-linkedin"></span>LinkedIn</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/jeparanay"><span class="fa fa-facebook-f"></span>Facebook</a>
                </li>
                <li>
                  <a href="https://dribbble.com/jeparanay"><span class="fa fa-dribbble"></span>Dribbble</a>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-3 mb-md-0 mb-3">

              <h5 class="text-uppercase">___________</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="https://www.instagram.com/julabean.creative/"><span class="fa fa-instagram"></span>Creative</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/jeparanay/"><span class="fa fa-instagram"></span>Personal</a>
                </li>
                <li>
                  <a href="https://www.behance.net/JuliaParanay"><span class="fa fa-behance"></span>Behance</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright text-center mb-3"> &copy; 2023 Copyright: Website designed and developed by Julia Paranay</div>
      </footer>
      <!-- Footer -->
    `;
  }
}

customElements.define('footer-component', Footer);
