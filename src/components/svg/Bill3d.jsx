import { Svg } from 'react-svg-path';

const Bill3d = ({digit}) => (
  <Svg width="100%" height="100%" viewBox="0 0 158.14 69.72" preserveAspectRatio="none">
    <path sx="" sy="" cx="" cy="" id="svg_1" strokeWidth="6px" strokeMiterlimit="10" stroke="#2d3c5c" fill="#fff" d="m119.49,3l-90.78,0a12.79,12.79 0 0 0 -12.79,12.79l0,9.69l-10,5.82l10,5.88l0,9.21a12.79,12.79 0 0 0 12.79,12.79l90.78,0a12.79,12.79 0 0 0 12.79,-12.79l0,-30.6a12.79,12.79 0 0 0 -12.79,-12.79z" className="cls-1"/>
    <text sx="" sy="" cx="" cy="" id="svg_2" x="36.52" y="41.32" fontWeight="700" fontFamily="Ubuntu-Bold, Ubuntu" fill="#2d3c5c" fontSize="30px" className="cls-2">{digit}</text>
  </Svg>
)

export default Bill3d