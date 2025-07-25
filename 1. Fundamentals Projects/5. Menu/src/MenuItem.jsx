const MenuItem = ({ img, title, price, desc }) => {
  return (
    <div>
      <article className="menu-item">
        <img src={img} alt={title} className="img" />
        <div className="item-info">
          <header>
            <h5>{title}</h5>
            <span className="item-price">${price}</span>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
    </div>
  )
}
export default MenuItem
