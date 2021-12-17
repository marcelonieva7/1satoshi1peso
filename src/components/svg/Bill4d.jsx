import { Svg } from 'react-svg-path';

const Bill4d = ({digit}) => (
  <Svg width="100%" height="100%" viewBox="0 0 138.56 54.97" preserveAspectRatio="none">
    <path sx="" sy="" cx="" cy="" id="svg_1" strokeWidth="4.36px" strokeMiterlimit="10" stroke="#c14632" fill="#fff" d="m127.09,2.18l-106.24,0a9.29,9.29 0 0 0 -9.29,9.29l0,11.94l-7.25,4.23l7.25,4.26l0,11.6a9.29,9.29 0 0 0 9.29,9.29l106.24,0a9.29,9.29 0 0 0 9.29,-9.29l0,-32a9.29,9.29 0 0 0 -9.29,-9.32z" className="cls-1"/>
    <text sx="" sy="" cx="" cy="" id="svg_2" x="27.07" y="37.66" fontWeight="700" fontFamily="Ubuntu-Bold, Ubuntu" fill="#c14632" fontSize="30px" className="cls-2">{digit}</text>
  </Svg>
)

export default Bill4d