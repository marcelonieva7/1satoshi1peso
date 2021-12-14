import Path, { Svg, Line, Rect } from 'react-svg-path';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { cls6 } from '../assets/styles/ProgressSvg.module.css'

const Path1 = ({widthRatio}) => {
  const path = new Path()
    .m(43.67*widthRatio,76.34)
    .l(0,-75.34)
    .l(widthRatio*1194.66,0)
    .a(19.28,19.28, 0, 0, 1, 19.26,19.27)
    .l(0,36.81)
    .a(19.28,19.28, 0, 0, 1, -19.26,19.26)
    .l(widthRatio*-1294.66, 0)
  return path.toComponent({ fill: '#a49995'});
}

const Path2 = ({widthRatio}) => {
  const path = new Path()
    .m(1320.8*widthRatio-80.3,0.5)
    .l(60+46.3*widthRatio,0)
    .a(18.79,18.79, 0, 0, 1, 18.79,18.79)
    .l(0,38.76)
    .a(18.79,18.79, 0, 0, 1, -18.79,18.79)
    .l(-46.3*widthRatio-60,0)
  return path.toComponent({ "strokeMiterlimit": "10", stroke: "#000", fill: "#fff"});
}

const Path3 = ({widthRatio, ratio}) => {
  const path = new Path()
    .m(20+(80*widthRatio)+(1240*widthRatio*ratio-100*ratio),43)
    .l(widthRatio*-1240*ratio+100*ratio,0)
    .c(-0.3,0, -0.54,-1.57, -0.54,-3.5)
    .l(0,0)
    .c(0,-1.93, 0.24,-3.5, 0.54,-3.5)
    .l(ratio*1240*widthRatio-100*ratio,0)
    .c(0.3,0, 0.54,1.57, 0.54,3.5)
    .l(0,0)
    .c(0,1.91, -0.24,3.5, -0.54,3.5)
  return path.toComponent({ fill: '#282828'});
}

const Path4 = ({widthRatio}) => {
  const path = new Path()
    .m(widthRatio*80.6+20,76.84)
    .l(widthRatio*-76.23,0)
    .a(20,20, 0, 0, 1, -20,-20)
    .l(0,-36.34)
    .a(20,20, 0, 0, 1, 20,-20)
    .l(widthRatio*76.23,0)
    .l(0,76.34)
  return path.toComponent({ fill: '#282828'});
}

const Path5 = ({widthRatio}) => {
  const path = new Path()
    .m(1341*widthRatio,33.38)
    .a(13.21,13.21, 0, 0, 1, -5.45,-3.37)
    .a(28.19,28.19, 0, 0, 1, -3.78,-5.05)
    .l(0.87,-0.87)
    .a(0.62,0.62, 0, 0, 0, 0.1,-0.77)
    .c(-0.09,-0.17, -0.2,-0.34, -0.3,-0.51)
    .a(36.49,36.49, 0, 0, 0, -5.33,-7.55)
    .a(14.78,14.78, 0, 0, 0, -4.49,-3.12)
    .l(1.09,-1.09)
    .a(0.63,0.63, 0, 0, 1, 0.39,-0.19)
    .a(1.33,1.33, 0, 0, 0, 0.84,-0.38)
    .a(13.72,13.72, 0, 0, 0, 1.31,-3.28)
    .a(13.56,13.56, 0, 0, 0, -3.28,1.31)
    .a(1.39,1.39, 0, 0, 0, -0.39,0.84)
    .a(0.62,0.62, 0, 0, 1, -0.18,0.39)
    .l(-21.4,21.41)
    .l(-21.39,-21.41)
    .a(0.61,0.61, 0, 0, 1, -0.18,-0.39)
    .a(1.37,1.37, 0, 0, 0, -0.39,-0.84)
    .a(13.41,13.41, 0, 0, 0, -3.28,-1.32)
    .a(13.56,13.56, 0, 0, 0, 1.31,3.28)
    .a(1.32,1.32, 0, 0, 0, 0.84,0.39)
    .a(0.58,0.58, 0, 0, 1, 0.39,0.19)
    .l(1.09,1.09)
    .a(14.78,14.78, 0, 0, 0, -4.49,3.12)
    .a(37.13,37.13, 0, 0, 0, -5.34,7.54)
    .l(-0.3,0.52)
    .a(0.64,0.64, 0, 0, 0, 0.11,0.77)
    .l(0.87,0.87)
    .a(27.76,27.76, 0, 0, 1, -3.78,5)
    .a(13.21,13.21, 0, 0, 1, -5.45,3.37)
    .l(-1.05,0.35)
    .l(13.65,13.69)
    .l(0.39,-0.13)
    .a(14.49,14.49, 0, 0, 0, 6,-3.71)
    .a(32.35,32.35, 0, 0, 0, 4.46,-6.09)
    .a(0.64,0.64, 0, 0, 0, -0.09,-0.78)
    .l(-0.88,-0.88)
    .a(34.25,34.25, 0, 0, 1, 5,-7)
    .a(13.34,13.34, 0, 0, 1, 4.58,-3)
    .l(6.69,6.7)
    .l(-11,11)
    .l(1.31,1.31)
    .l(11,-11)
    .l(11,11)
    .l(1.31,-1.31)
    .l(-11,-11)
    .l(6.69,-6.69)
    .a(13.2,13.2, 0, 0, 1, 4.58,3)
    .a(34.18,34.18, 0, 0, 1, 5,7)
    .l(-0.88,0.88)
    .a(0.65,0.65, 0, 0, 0, -0.09,0.79)
    .a(32.67,32.67, 0, 0, 0, 4.46,6.09)
    .a(14.59,14.59, 0, 0, 0, 6,3.71)
    .l(0.39,0.12)
    .l(13.65,-13.65)
    .l(-1.18,-0.35)
    .m(-62,9.2)
    .a(13.9,13.9, 0, 0, 1, -1.73,1.47)
    .l(-3.86,-3.86)
    .a(20.37,20.37, 0, 0, 0, 3.41,-3.41)
    .l(-4,-4)
    .a(20,20, 0, 0, 1, -3.41,3.41)
    .l(4,4)
    .a(20.41,20.41, 0, 0, 1, -3.09,2)
    .l(-4,-4)
    .a(19.21,19.21, 0, 0, 0, 3.09,-2)
    .l(-3.74,-3.74)
    .a(14.68,14.68, 0, 0, 0, 1.72,-1.48)
    .a(18.26,18.26, 0, 0, 0, 1.68,-1.94)
    .l(3.75,3.75)
    .a(19.7,19.7, 0, 0, 0, 2,-3.17)
    .l(4.12,4.12)
    .a(22.7,22.7, 0, 0, 1, -1.86,2.77)
    .l(3.82,3.82)
    .a(19.25,19.25, 0, 0, 1, -1.89,2.26)
    .l(-0.01,0)
    .m(5.5,-18.8)
    .l(3.53,3.52)
    .c(-0.2,0.18, -0.39,0.35, -0.58,0.54)
    .a(23.2,23.2, 0, 0, 0, -2.69,3.3)
    .l(-3.81,-3.81)
    .a(20.65,20.65, 0, 0, 0, -2.52,4.13)
    .l(-4.19,-4.2)
    .a(21,21, 0, 0, 1, 2.52,-4.11)
    .l(4.19,4.19)
    .a(21,21, 0, 0, 1, 3.55,-3.56)
    .l(-4.18,-4.19)
    .a(21,21, 0, 0, 0, -3.56,3.55)
    .l(-3.61,-3.61)
    .a(22.89,22.89, 0, 0, 1, 2.68,-3.32)
    .l(0.58,-0.53)
    .l(3.91,3.91)
    .a(20.89,20.89, 0, 0, 1, 4,-2.48)
    .l(4.19,4.19)
    .a(21.81,21.81, 0, 0, 0, -4,2.48)
    .l(-0.01,0)
    .m(32.72,7.36)
    .a(23.2,23.2, 0, 0, 0, -2.69,-3.3)
    .c(-0.2,-0.19, -0.39,-0.36, -0.59,-0.53)
    .l(3.53,-3.53)
    .a(21.48,21.48, 0, 0, 0, -4,-2.48)
    .l(4.19,-4.18)
    .a(21.24,21.24, 0, 0, 1, 4,2.47)
    .l(3.9,-3.9)
    .c(0.2,0.17, 0.4,0.34, 0.59,0.53)
    .a(23,23, 0, 0, 1, 2.67,3.32)
    .l(-3.61,3.61)
    .a(21,21, 0, 0, 0, -3.55,-3.56)
    .l(-4.19,4.19)
    .a(20.62,20.62, 0, 0, 1, 3.55,3.56)
    .l(4.19,-4.19)
    .a(21.08,21.08, 0, 0, 1, 2.53,4.12)
    .l(-4.13,4.19)
    .a(20.79,20.79, 0, 0, 0, -2.53,-4.12)
    .l(-3.86,3.8)
    .m(18.44,7)
    .l(-4,4)
    .a(20.5,20.5, 0, 0, 1, -3.1,-2)
    .l(4,-4)
    .a(20,20, 0, 0, 1, -3.41,-3.41)
    .l(-4,4)
    .a(20.37,20.37, 0, 0, 0, 3.41,3.41)
    .l(-3.86,3.86)
    .a(15.51,15.51, 0, 0, 1, -1.73,-1.47)
    .a(19.25,19.25, 0, 0, 1, -1.93,-2.27)
    .l(3.82,-3.82)
    .a(21.61,21.61, 0, 0, 1, -1.86,-2.77)
    .l(4.12,-4.12)
    .a(19.7,19.7, 0, 0, 0, 2,3.17)
    .l(3.75,-3.75)
    .a(20.87,20.87, 0, 0, 0, 1.74,2.03)
    .a(14.68,14.68, 0, 0, 0, 1.72,1.48)
    .l(-3.72,3.7)
    .a(19.92,19.92, 0, 0, 0, 3.06,2)
    .l(-0.01,-0.04)
  return path.toComponent();
}

const ProgressSvg = ({className, ratio}) => {
  const { width } = useWindowDimensions();
  const widthRatio = width < 1368.59 ? width/1368.59 : 1
  return (
    <Svg
      width={1368.59*widthRatio}
      height={77.34}
      className={className}
    >
      <Path1 widthRatio={widthRatio}/>
      <Path2 widthRatio={widthRatio}/>
      <Line 
        ex={92.04} 
        ey={39.48} 
        sx={1255.44} 
        sy={39.48}
        fill="#fff"
      />
      <Rect 
        cx={widthRatio*700-30}
        cy={39.98} 
        height={7}
        width={1240*widthRatio-100}
        fill="#87807e"
        strokeMiterlimit="10"
        stroke="#000"
      />
      <Line 
        ex={92.04} 
        ey={39.48} 
        sx={272.79} 
        sy={39.48}
        fill="#282828"
      />
      <Path3 ratio={ratio} widthRatio={widthRatio}/>
      <Path4 widthRatio={widthRatio}/>
      <text id="svg_12" x={widthRatio*30.4} y="45.46" fontWeight="700" fontFamily="Ubuntu-Bold, Ubuntu" fontSize={`${width < 768 ? "10px" : "15px"}`} fill="#fff" className="cls6">INICIO</text>
      <text id="svg_9" x={width < 768 ? (widthRatio*1278-13/widthRatio) : (widthRatio*1325-60)} y="68.1" fontWeight="700" fontFamily="Ubuntu-Bold, Ubuntu" fontSize={`${width < 768 ? "10px" : "15px"}`} className={cls6}>LLEGADA</text>
      <Path5 widthRatio={widthRatio}/>
    </Svg>
  )
}

export default ProgressSvg