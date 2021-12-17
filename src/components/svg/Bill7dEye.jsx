import { Svg } from 'react-svg-path';

const Bill7dEye = ({digit, handleClick}) => (
  <Svg width="100%" height="100%" viewBox="0 0 274.63 87.09" preserveAspectRatio="none">
    <rect sx="" sy="" cx="" cy=""  id="svg_1" strokeWidth="6px" strokeMiterlimit="10" stroke="#2d3c5c" fill="#fff" rx="12.79" height="61.18" width="249.36" y="21.37" x="3" className="cls-1"/>
    <text sx="" sy="" cx="" cy="" id="svg_2" x="38.21" y="63.35" fill="#2d3c5c" fontWeight="700" fontFamily="Ubuntu-Bold, Ubuntu" fontSize="36px" className="cls-2">{digit}</text>
    <circle sx="" sy="" id="svg_3" fill="#2d3c5c" r="23.24" cy="23.24" cx="251.4" className="cls-3"onClick={handleClick}/>
    <path sx="" sy="" cx="" cy="" id="svg_4" fill="#fff" d="m266.71,22.75c-0.28,-0.3 -6.93,-7.25 -15.31,-7.25s-15,7 -15.31,7.25a0.71,0.71 0 0 0 0,1c0.27,0.25 6.91,7.25 15.31,7.25s15,-6.94 15.31,-7.24a0.71,0.71 0 0 0 0,-1.01zm-15.31,6.76a6.28,6.28 0 1 1 6.27,-6.28a6.29,6.29 0 0 1 -6.27,6.28zm-5.71,-11.44a7.67,7.67 0 0 0 0,10.34a26.26,26.26 0 0 1 -8.07,-5.17a26.18,26.18 0 0 1 8.07,-5.17zm11.4,10.35a7.7,7.7 0 0 0 0,-10.35a26.29,26.29 0 0 1 8.05,5.17a26.16,26.16 0 0 1 -8.05,5.18z" className="cls-4" onClick={handleClick}/>
    <circle sx="" sy="" id="svg_5" fill="#fff" r="2.91" cy="23.24" cx="251.4" className="cls-4" onClick={handleClick}/>
  </Svg>
)

export default Bill7dEye