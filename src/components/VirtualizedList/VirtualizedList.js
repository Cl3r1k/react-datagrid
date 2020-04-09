import React, { useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

export const VirtualizedList = ({
  dataLength,
  rowHeight,
  headerHeight,
  stickyHeader,
  className,
  renderItem,
  boundaryItems,
}) => {
  const containerHeight = dataLength * rowHeight;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemsToRender, setItemsToRender] = useState(
    Math.floor(window.innerHeight / rowHeight)
  );

  const viewportRef = useRef(null);

  const scrollHandler = useCallback(() => {
    const { scrollTop } = viewportRef.current;
    const itemsLimitToScroll = 3;
    const deltaScroll =
      scrollPosition < scrollTop
        ? scrollTop - scrollPosition
        : scrollPosition - scrollTop;
    if (deltaScroll > rowHeight * itemsLimitToScroll) {
      setScrollPosition(scrollTop);
    }
  }, [rowHeight, scrollPosition]);

  useEffect(() => {
    const windowResizeHandler = () => {
      const { clientHeight } = viewportRef.current;
      const newItemsToRender = Math.floor(clientHeight / rowHeight);
      if (itemsToRender !== newItemsToRender) {
        setItemsToRender(newItemsToRender);
      }
    };

    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', windowResizeHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, [itemsToRender, rowHeight, scrollHandler, stickyHeader]);

  const startIndexToRender = Math.floor(
    scrollPosition / rowHeight - boundaryItems
  );
  const endIndexToRender =
    startIndexToRender + itemsToRender + 2 * boundaryItems;

  return (
    <div
      ref={viewportRef}
      style={{
        width: '100%',
        // height: '600px',
        overflow: 'auto',
        height: '100%',
      }}
      className={className}
      onScroll={scrollHandler}
    >
      <div
        style={{
          // backgroundColor: '#e0ddc0',
          height: containerHeight,
          position: 'relative',
          // overflow: 'auto',
          width: '100%',
          // height: '100%',
        }}
      >
        {stickyHeader}
        {Array(dataLength)
          .fill(0)
          .map((item, index) => {
            if (index >= startIndexToRender && index <= endIndexToRender) {
              return renderItem(index, {
                position: 'absolute',
                top: index * rowHeight + headerHeight,
              });
            }

            return null;
          })}
      </div>
    </div>
  );
};

VirtualizedList.propTypes = {
  dataLength: PropTypes.number,
  rowHeight: PropTypes.number,
  headerHeight: PropTypes.number,
  stickyHeader: PropTypes.element,
  className: PropTypes.string,
  renderItem: PropTypes.func.isRequired,
  boundaryItems: PropTypes.number,
};

VirtualizedList.defaultProps = {
  dataLength: 0,
  rowHeight: 0,
  headerHeight: 0,
  stickyHeader: undefined,
  className: '',
  boundaryItems: 3, // Default value
};
