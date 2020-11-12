
const Navigation = ({onRouteChange}) =>{
    return(
        <div >
          <header className="bg-white black-80 tc pv4 avenir">
            <p to={"/"} className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
              <svg className="white" data-icon="skull" viewBox="0 0 32 32" style={{ fill: 'currentcolor' }}><title>skull icon</title><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
            </p>
            <h1 className="mt2 mb0 baskerville i fw1 f1">The All In One Shop</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked">Where you can find all your needs</h2>
            <nav className="  pointer mw8 center mt4">
              <button onClick={()=> onRouteChange('/')} className="f6  br-pill ba ph4 pv2 mb2 dib black" >Home</button>
              <button onClick={()=> onRouteChange('/shop')} className="f6  br-pill ba ph4 pv2 mb2 dib black" >Shop</button>
              <button onClick={()=> onRouteChange('/about')} className="f6  br-pill ba ph4 pv2 mb2 dib black" >About</button>
              <button onClick={()=> onRouteChange('/contact')} className="f6  br-pill ba ph4 pv2 mb2 dib black">Contact</button>
              <button onClick={()=> onRouteChange('/login')} className="f6  br-pill ba ph4 pv2 mb2 dib black">Login</button>
              <button onClick={()=> onRouteChange('/register')} className="f6  br-pill ba ph4 pv2 mb2 dib black">Signup</button>
            </nav>
          </header>

        </div>
    );
}

export default Navigation;