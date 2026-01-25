import { useState } from 'react';
import "./CssPlayground.css";

export default function CssPlayground() {
    const [fontWeight, setFontWeight] = useState(500);
    const [fontStretch, setFontStretch] = useState('normal');
    const [fontStyle, setFontStyle] = useState('normal');
    const [color, setColor] = useState('#ffffff');
    const [backgroundColor, setBackgroundColor] = useState('#f40000');
    const [border, setBorder] = useState('thin solid red');
    const [borderRadius, setBorderRadius] = useState(29);
    const [height, setHeight] = useState(256);
    const [width, setWidth] = useState(48);
    const [padding, setPadding] = useState(1.2);
    const [margin, setMargin] = useState(0);
    const [fontSize, setFontSize] = useState(32);

    const [borderUnit, setBorderUnit] = useState('px');
    const [heightUnit, setHeightUnit] = useState('px');
    const [widthUnit, setWidthUnit] = useState('px');
    const [paddingUnit, setPaddingUnit] = useState('em');
    const [marginUnit, setMarginUnit] = useState('px');

    const previewStyle: React.CSSProperties = {
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
        fontStretch: fontStretch,
        fontStyle: fontStyle,
        color: color,
        backgroundColor: backgroundColor,
        border: border,
        borderRadius: `${borderRadius}${borderUnit}`,
        height: `${height}${heightUnit}`,
        width: `${width}${widthUnit}`,
        padding: `${padding}${paddingUnit}`,
        margin: `${margin}${marginUnit}`,
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
    };

    return (
        <div className="flex h-screen">
            {/* Controls Panel */}
            <div className="w-80 p-6 overflow-y-auto border-r-4 border-cyan-400">
                <h2 className="text-2xl font-bold mb-6">Controls</h2>

                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">
                        font-size: ({fontSize})
                    </label>
                    <div>
                        <input
                            type="range"
                            min="0"
                            max="256"
                            step="1"
                            value={fontSize}
                            onChange={(e) => setFontSize(Number(e.target.value))}
                            className="w-2/3 mr-4"
                        />
                        <input
                            type="number"
                            min="0"
                            max="256"
                            step="1"
                            value={fontSize}
                            onChange={(e) => setFontSize(Number(e.target.value))}
                            className="w-1/4"
                        />
                    </div>
                </div>

                {/* Font Weight */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">
                        font-weight: ({fontWeight})
                    </label>
                    <div>
                        <input
                            type="range"
                            min="100"
                            max="900"
                            step="100"
                            value={fontWeight}
                            onChange={(e) => setFontWeight(Number(e.target.value))}
                            className="w-2/3 mr-4"
                        />
                        <input
                            type="number"
                            min="100"
                            max="900"
                            step="100"
                            value={fontWeight}
                            onChange={(e) => setFontWeight(Number(e.target.value))}
                            className="w-1/4"
                        />
                    </div>
                </div>

                {/* Font Stretch */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">font-stretch:</label>
                    <select
                        value={fontStretch}
                        onChange={(e) => setFontStretch(e.target.value)}
                        className="w-full p-2 border rounded"
                    >
                        <option value="normal">normal</option>
                        <option value="ultra-condensed">ultra-condensed</option>
                        <option value="extra-condensed">extra-condensed</option>
                        <option value="condensed">condensed</option>
                        <option value="semi-condensed">semi-condensed</option>
                        <option value="semi-expanded">semi-expanded</option>
                        <option value="expanded">expanded</option>
                        <option value="extra-expanded">extra-expanded</option>
                        <option value="ultra-expanded">ultra-expanded</option>
                    </select>
                </div>

                {/* Font Style */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">font-style:</label>
                    <select
                        value={fontStyle}
                        onChange={(e) => setFontStyle(e.target.value)}
                        className="w-full p-2 border rounded "
                    >
                        <option value="normal">normal</option>
                        <option value="italic">italic</option>
                        <option value="oblique">oblique</option>
                    </select>
                </div>

                {/* Color */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">color:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="w-full h-10 rounded cursor-pointer"
                    />
                </div>

                {/* Background Color */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">background-color:</label>
                    <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="w-full h-10 rounded cursor-pointer"
                    />
                </div>

                {/* Border */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">border:</label>
                    <input
                        type="text"
                        value={border}
                        onChange={(e) => setBorder(e.target.value)}
                        className="w-full p-2 border rounded "
                    />
                </div>

                {/* Border Radius */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">
                        border-radius: ({borderRadius})
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={borderRadius}
                        onChange={(e) => setBorderRadius(Number(e.target.value))}
                        className="w-full mb-2"
                    />
                    <div>
                        <label className="text-xs text-gray-600">unit:</label>
                        <select
                            value={borderUnit}
                            onChange={(e) => setBorderUnit(e.target.value)}
                            className="ml-2 p-1 border rounded text-sm "
                        >
                            <option value="px">px</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="%">%</option>
                        </select>
                    </div>
                </div>

                {/* Height */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">
                        height: ({height})
                    </label>
                    <input
                        type="range"
                        min="50"
                        max="500"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-full mb-2"
                    />
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                        className="w-20 p-1 border rounded text-sm  mb-2"
                    />
                    <div>
                        <label className="text-xs text-gray-600">unit:</label>
                        <select
                            value={heightUnit}
                            onChange={(e) => setHeightUnit(e.target.value)}
                            className="ml-2 p-1 border rounded text-sm "
                        >
                            <option value="px">px</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="%">%</option>
                        </select>
                    </div>
                </div>

                {/* Width */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">
                        width: ({width})
                    </label>
                    <input
                        type="range"
                        min="20"
                        max="300"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="w-full mb-2"
                    />
                    <input
                        type="number"
                        value={width}
                        onChange={(e) => setWidth(Number(e.target.value))}
                        className="w-20 p-1 border rounded text-sm  mb-2"
                    />
                    <div>
                        <label className="text-xs text-gray-600">unit:</label>
                        <select
                            value={widthUnit}
                            onChange={(e) => setWidthUnit(e.target.value)}
                            className="ml-2 p-1 border rounded text-sm "
                        >
                            <option value="px">px</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                            <option value="%">%</option>
                        </select>
                    </div>
                </div>

                {/* Padding */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">
                        padding: ({padding})
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        step="0.1"
                        value={padding}
                        onChange={(e) => setPadding(Number(e.target.value))}
                        className="w-full mb-2"
                    />
                    <div>
                        <label className="text-xs text-gray-600">unit:</label>
                        <select
                            value={paddingUnit}
                            onChange={(e) => setPaddingUnit(e.target.value)}
                            className="ml-2 p-1 border rounded text-sm "
                        >
                            <option value="px">px</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                        </select>
                    </div>
                </div>

                {/* Margin */}
                <div className="mb-6">
                    <label className="block text-sm font-semibold mb-2">
                        margin: ({margin})
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={margin}
                        onChange={(e) => setMargin(Number(e.target.value))}
                        className="w-full mb-2"
                    />
                    <div>
                        <label className="text-xs text-gray-600">unit:</label>
                        <select
                            value={marginUnit}
                            onChange={(e) => setMarginUnit(e.target.value)}
                            className="ml-2 p-1 border rounded text-sm "
                        >
                            <option value="px">px</option>
                            <option value="em">em</option>
                            <option value="rem">rem</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Preview Panel */}
            <div className="flex flex-col p-12">
                <div className="bg-gray-800 rounded-lg p-8 h-full">
                    <h1 className="text-4xl font-bold mb-8 ">Playground</h1>

                    {/* CSS Code Display */}
                    <div className="p-4 rounded mb-8 text-sm font-mono">
                        <div>font-size: {fontSize}px;</div>
                        <div>font-weight: {fontWeight};</div>
                        <div>font-stretch: {fontStretch};</div>
                        <div>font-style: {fontStyle};</div>
                        <div>color: {color};</div>
                        <div>background-color: {backgroundColor};</div>
                        <div>border: {border};</div>
                        <div>border-radius: {borderRadius}{borderUnit};</div>
                        <div>height: {height}{heightUnit};</div>
                        <div>width: {width}{widthUnit};</div>
                        <div>padding: {padding}{paddingUnit}</div>
                        <div>margin: {margin}{marginUnit}</div>
                    </div>


                </div>

            </div>
            {/* Preview Element */}
            <div className="w-max flex justify-center items-center">
                <div style={previewStyle}>
                    <span>P</span>
                    <span>L</span>
                    <span>A</span>
                    <span>Y</span>
                </div>
            </div>
        </div >
    );
}
