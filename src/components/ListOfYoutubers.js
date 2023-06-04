import { Link } from "react-router-dom";
const ListOfYoutubers = () => {
  return (
    <div className="container Container">

      {/* Title one */}
      <div className="row mt-5">
        <Link
          class="nav-link fs-1 text-center text-info"
          to="https://www.youtube.com/@cristian.dascalu"
          target="_blank"
        >
          Cristian Dascalu
        </Link>
      </div>

      {/* First Row */}
      <div className="row mt-5">

        {/* Col 1 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/eD3SuXZM2ao"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                Povestea lui Roonie 🚀
              </h5>

              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/eD3SuXZM2ao"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Second Col */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/2Vjx-kvmIsY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                Cum am invatat INFORMATICA?
              </h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/2Vjx-kvmIsY"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Col 3 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/bqvo5S32I0Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                New York e STARE DE SPIRIT
              </h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/bqvo5S32I0Q"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Col 4 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/mpWTY58_Sm8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Boody */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                Rătăcind prin munții României
              </h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/mpWTY58_Sm8"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Title two */}
      <div className="row mt-5">
        <Link
          class="nav-link fs-1 text-center text-info"
          to="https://www.youtube.com/@DailyStoic"
          target="_blank"
        >
          Ryan Holiday
        </Link>

        {/* Row 2 */}
      </div>
      <div className="row mt-5">

        {/* Col 1 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/Y3w2r5JD0u0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                How To Let Go And Stop Worrying
              </h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/Y3w2r5JD0u0"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/6Fif4OZwf-A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                Kick Ass Morning Motivational
              </h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/6Fif4OZwf-A"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Col 3 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/6FMK0qNp3TY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                5 Crazy Days In The Life Of A Stoic
              </h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/6FMK0qNp3TY"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Col 4 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/LQ5ZRQRH6Vc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                How Stoics Develop a Strong Mindset
              </h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/LQ5ZRQRH6Vc"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Title three */}
      <div className="row mt-5">
        <Link
          class="nav-link fs-1 text-center text-info"
          to="https://www.youtube.com/@shawnmendes"
          target="_blank"
        >
          Shawn Mendes
        </Link>
      </div>

      {/* Row 3 */}
      <div className="row mt-5">
        {/* Col 1 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/lY2yjAdbvdQ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">Treat You Better</h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/lY2yjAdbvdQ"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Col 2 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/dT2owtxkU8k"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">
                There's Nothing Holdin' Me Back
              </h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/dT2owtxkU8k"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Col 3 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className="iframe"
              src="https://www.youtube.com/embed/36tggrpRoTI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">In My Blood</h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/36tggrpRoTI"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
          </div>
        </div>

        {/* Col 4 */}
        <div className="col">
          <div className="card C">
            {/* Video */}
            <iframe
              className='iframe'
              src="https://www.youtube.com/embed/LueM9tEu2wI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen="true"
            ></iframe>

            {/* Card Body */}
            <div className="card-body">
              <h5 className="card-title fs-2 text-dark">Bad Reputation</h5>
              <Link
                class="btn btn-dark"
                to="https://www.youtube.com/embed/LueM9tEu2wI"
                target="_blank"
              >
                Linkul catre video
              </Link>
            </div>
            {/* End of the body card */}
          </div>
          {/* End of the card*/}
        </div>
        {/* End of the col */}
      </div>
      {/* End of the  row */}
    </div>
    // End of the container 
  );
};

export default ListOfYoutubers;
