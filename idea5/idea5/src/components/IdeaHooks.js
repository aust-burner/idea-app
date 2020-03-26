import React, { useState } from 'react';

const IdeaHook = () => {
    const [name, setName] = useState('Austin')
    return (
        <div>
            {name}
            <button onClick={() => setName('Freddie')}>Change Name</button>
        </div>
    )
}

export default IdeaHook