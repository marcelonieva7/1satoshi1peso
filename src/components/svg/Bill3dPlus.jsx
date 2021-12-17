import { Svg } from 'react-svg-path';

const Bill3dPlus = ({digit, handleClick}) => (
  <Svg width="100%" height="100%" viewBox="0 0 201.56 78.91" preserveAspectRatio="none">
    <path sx="" sy="" cx="" cy="" className="cls-1" d="m99.55,21.92l-79.06,0a9.13,9.13 0 0 0 -9.13,9.13l0,9.77l-7.12,4.18l7.12,4.19l0,9.43a9.13,9.13 0 0 0 9.13,9.13l79.06,0a9.12,9.12 0 0 0 9.12,-9.13l0,-27.57a9.12,9.12 0 0 0 -9.12,-9.13z" fill="#fff" stroke="#554c80" strokeMiterlimit="10" strokeWidth="4.28px" id="svg_1"/>
    <text sx="" sy="" cx="" cy="" className="cls-2" fontSize="30px" fill="#544c80" fontFamily="Ubuntu-Bold, Ubuntu" fontWeight="700" y="55.22" x="23.21" id="svg_2">{digit}</text>
    <circle sx="" sy="" className="cls-3" cx="116.71" cy="23.24" r="23.24" fill="#554c80" id="svg_3" onClick={handleClick}/>
    <path sx="" sy="" cx="" cy="" className="cls-4" d="m109.16,21.92l6.23,0l0,-6.8l2.61,0l0,6.8l6.24,0l0,2.6l-6.24,0l0,6.84l-2.64,0l0,-6.84l-6.23,0l0.03,-2.6z" fill="#fff" id="svg_4" onClick={handleClick}/>
  </Svg>
)

export default Bill3dPlus