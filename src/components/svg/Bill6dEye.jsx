import { Svg } from 'react-svg-path';

const Bill6dEye = ({digit, handleClick}) => (
  <Svg width="100%" height="100%" viewBox="0 0 245.52 91.96" preserveAspectRatio="none">
    <path sx="" sy="" cx="" cy="" id="svg_1" strokeWidth="6px" strokeMiterlimit="10" stroke="#c14632" fill="#fff" d="m209.49,23.24l-180.78,0a12.79,12.79 0 0 0 -12.79,12.76l0,13.72l-10,5.82l10,5.87l0,13.21a12.79,12.79 0 0 0 12.79,12.79l180.78,0a12.79,12.79 0 0 0 12.79,-12.79l0,-38.62a12.79,12.79 0 0 0 -12.79,-12.76z" className="cls-1"/>
    <text sx="" sy="" cx="" cy="" id="svg_2" x="42.19" y="68.22" fill="#c14632" fontWeight="700" fontFamily="Ubuntu-Bold, Ubuntu" fontSize="36px" className="cls-2">{digit}</text>
    <circle sx="" sy="" id="svg_3" fill="#c14632" r="23.24" cy="23.24" cx="222.28" className="cls-3" onClick={handleClick}/>
    <path sx="" sy="" cx="" cy="" id="svg_4" fill="#fff" d="m237.59,22.75c-0.28,-0.3 -6.93,-7.25 -15.31,-7.25s-15,7 -15.31,7.25a0.71,0.71 0 0 0 0,1c0.28,0.3 6.93,7.24 15.31,7.24s15,-6.94 15.31,-7.24a0.71,0.71 0 0 0 0,-1zm-15.31,6.76a6.28,6.28 0 1 1 6.28,-6.28a6.28,6.28 0 0 1 -6.28,6.28zm-5.71,-11.44a7.68,7.68 0 0 0 0,10.34a26.21,26.21 0 0 1 -8.08,-5.17a26.18,26.18 0 0 1 8.08,-5.17zm11.43,10.35a7.7,7.7 0 0 0 0,-10.35a26.37,26.37 0 0 1 8.06,5.17a26.37,26.37 0 0 1 -8.06,5.18z" className="cls-4" onClick={handleClick}/>
    <circle sx="" sy="" id="svg_5" fill="#fff" r="2.91" cy="23.24" cx="222.28" className="cls-4" onClick={handleClick}/>
  </Svg>
)

export default Bill6dEye