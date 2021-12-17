import { Svg } from 'react-svg-path';

const Bill5dEye = ({digit, handleClick}) => (
  <Svg width="100%" height="100%" viewBox="0 0 201.56 78.91" preserveAspectRatio="none">
    <path sx="" sy="" cx="" cy="" id="svg_1" strokeWidth="4.97px" strokeMiterlimit="10" stroke="#554c80" fill="#fff" d="m167,23.24l-143.2,0a10.59,10.59 0 0 0 -10.6,10.6l0,11.35l-8.28,4.81l8.28,4.87l0,10.95a10.59,10.59 0 0 0 10.6,10.6l143.2,0a10.6,10.6 0 0 0 10.6,-10.6l0,-32a10.6,10.6 0 0 0 -10.6,-10.58z" className="cls-1"/>
    <text sx="" sy="" cx="" cy="" id="svg_2" x="30.65" y="62.81" fill="#544c80" fontWeight="700" fontFamily="Ubuntu-Bold, Ubuntu" fontSize="36px" className="cls-2">{digit}</text>
    <circle sx="" sy="" id="svg_3" fill="#544c80" r="23.24" cy="23.24" cx="178.32" className="cls-3" onClick={handleClick}/>
    <path sx="" sy="" cx="" cy="" id="svg_4" fill="#fff" d="m193.63,22.75c-0.28,-0.3 -6.93,-7.25 -15.31,-7.25s-15,7 -15.31,7.25a0.71,0.71 0 0 0 0,1c0.28,0.3 6.93,7.24 15.31,7.24s15,-6.94 15.31,-7.24a0.71,0.71 0 0 0 0,-1zm-15.31,6.76a6.28,6.28 0 1 1 6.27,-6.28a6.29,6.29 0 0 1 -6.27,6.28zm-5.71,-11.44a7.7,7.7 0 0 0 0,10.34a26.26,26.26 0 0 1 -8.07,-5.17a26.18,26.18 0 0 1 8.07,-5.17zm11.39,10.35a7.7,7.7 0 0 0 0,-10.35a26.37,26.37 0 0 1 8.06,5.17a26.37,26.37 0 0 1 -8.06,5.18z" className="cls-4" onClick={handleClick}/>
    <circle sx="" sy="" id="svg_5" fill="#fff" r="2.91" cy="23.24" cx="178.32" className="cls-4" onClick={handleClick}/>
  </Svg>
)

export default Bill5dEye