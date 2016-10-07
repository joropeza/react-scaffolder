import React, { PropTypes } from 'react';
import renderCopyright from './copyright';
import renderWatermark from './watermark';


const footer = props => {
    const copyright = renderCopyright();
const watermark = renderWatermark();

    return (
        <div>
            <div>
    {copyright}
</div>
<div>
    {watermark}
</div>

        </div>
    )
};

footer.propTypes = {
    label: PropTypes.string,
};

footer.defaultProps = {
    label: 'Hello World',
};

export default footer;
