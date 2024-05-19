'use client'

import React, { useState, useEffect } from 'react';
import Sample from './Sample';

function Samples() {
    const [soundIds, setAudioIds] = useState([557976, 557977, 557978]) // fallback IDs
    
    useEffect(() => {

    }, []); // TODO: dependencies?

    return (
        <ul className="grid grid-cols-3">
          <li><Sample key="sample-1" soundId={soundIds[0]} /></li>
          <li><Sample key="sample-2" soundId={soundIds[1]} /></li>
          <li><Sample key="sample-3" soundId={soundIds[2]} /></li>
        </ul>
    );
}

export default Samples;
