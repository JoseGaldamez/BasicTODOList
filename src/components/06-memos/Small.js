import React, {memo} from 'react';

const Small = memo(({value}) => {

    console.log("Me volví a ejecutar :(");
    return (
        <small>
            {value}
        </small>
    );
});

export default Small;