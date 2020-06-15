import React, { useState, useEffect } from 'react';
import { useWindowSize } from '../utils/Hooks';

function App() {
    const size = useWindowSize();

    return (
        <div>
            <h1> Hello World </h1>
            <div>
                Width: {size.width}
            </div>
            <div>
                Height: {size.height}
            </div>
        </div>
    );
}

export default App;