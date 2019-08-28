import React from 'react';
import PropTypes, {arrayOf} from 'prop-types';

const PhotoGrid = ({photos, gridClass, imgClass}) => {
    return (
        <div className={gridClass}>
            {photos.map(src => {
                return (
                    <div
                        key={src}
                        className={imgClass}
                        style={{
                            backgroundImage: `url(${src})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                );
            })}
        </div>
    );
};

PhotoGrid.propTypes = {
    photos: arrayOf(PropTypes.string.isRequired),
    gridClass: PropTypes.string,
    imgClass: PropTypes.string,
};

export default PhotoGrid;
