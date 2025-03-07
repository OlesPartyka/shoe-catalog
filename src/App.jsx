function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-40">
        <div className="header__left d-flex align-center">
          <img width={40} height={40} src="./img/logo.png" alt="logo" />
          <div className="header__info">
            <h3 className="text-uppercase">Sneakers catalog</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
        <ul className="header__right d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="./img/cart.svg" alt="cart" />
            <span>1200 $</span>
          </li>
          <li>
            <img width={18} height={18} src="./img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <section className="content p-40">
        <h1 className="mb-40">All sneakers</h1>

        <div className="d-flex justify-between">
          <article className="card">
            <img width={133} height={112} src="./img/sneakers/1.jpg" alt="Sneakers" />
            <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>1299 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
              </button>
            </div>
          </article>

          <article className="card">
            <img width={133} height={112} src="./img/sneakers/2.jpg" alt="Sneakers" />
            <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>1299 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
              </button>
            </div>
          </article>

          <article className="card">
            <img width={133} height={112} src="./img/sneakers/3.jpg" alt="Sneakers" />
            <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>1299 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
              </button>
            </div>
          </article>

          <article className="card">
            <img width={133} height={112} src="./img/sneakers/4.jpg" alt="Sneakers" />
            <h5>Nike Blazer Mid Suede Men's Sneakers</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>1299 $</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="Plus" />
              </button>
            </div>
          </article>

        </div>
        
      </section>
    </div>
  );
}

export default App;
