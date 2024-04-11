export const nav = () => {
  return `
    <nav class="nav">
      <ul class="nav__list">
        <li id="btn-home" class="nav__item nav__item--btn-1">
          <a href="/" class="nav__link">Home</a>
        </li>
        <li id="btn-about" class="nav__item nav__item--btn-1">
          <a href="/about" class="nav__link">About</a>
        </li>
        <li class="nav__item nav__item--btn-1">
          <a href="products" class="nav__link">Products</a>
        </li>
      </ul>
      <div class="nav__btns">
      <div id="btn-cart" class="nav__item nav__item--btn-2">
        <a href="/cart" class="nav__link">
          <span class="btn-nav__body">Cart</span>
          <div class="btn-nav__append">
            <img src="./assets/icon/cart-icon.svg" alt="">
          </div>
        </a>
      </div>
      <div id="btn-login" class="nav__item nav__item--btn-2">
        <a href="/login" class="nav__link">
          <span class="btn-nav__body">Login</span>
          <div class="btn-nav__append">
            <img src="./assets/icon/user-icon.svg" alt="">
          </div>
        </a>
      </div>
      </div>
    </nav>
  `;
};
