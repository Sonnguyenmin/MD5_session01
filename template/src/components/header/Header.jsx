import './header.css';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="grid wide">
          <div className="row sm-gutter">
            <div className="col l-6 m-6 c-6">
              <div className="header-wrapper">
                <h3 className="header-title">RIKKEI ACADEMY</h3>
                <div className="header-inner">
                  <h2 className="header-name">BEST DESIGN</h2>
                  <h1 className="header-description">MOBILE</h1>
                  <h1 className="header-description">APPLICATIONS</h1>
                  <button className="btn">HEAD HOME</button>
                </div>
                <div className="header-box">
                  <div className="header-item"></div>
                  <div className="header-item violet"></div>
                  <div className="header-item"></div>
                </div>
              </div>
            </div>
            <div className="col l-6 m-6 c-6">
              <div className="header-img">
                <div className="header-icon">
                  <i class="fa-solid fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
