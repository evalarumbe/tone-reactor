'use client';

import React, { useState, useEffect } from 'react';
import { muteAll } from '../lib/tone';

function ToggleMute() {
  const [ isMute, setIsMute ] = useState(false);

  useEffect(() => {
    muteAll(isMute);
  }, [isMute]);

  async function handleToggleMute (): Promise<void> {
    setIsMute(!isMute);
  }

  return (
    <button onClick={handleToggleMute} className={`${isMute ? 'bg-blue-300' : 'bg-blue-500'} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40`}>{isMute ? 'Muted' : 'Mute'}</button>
  );
}

export default ToggleMute;
