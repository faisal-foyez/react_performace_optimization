import React from 'react';

function ChildOne ({count}) {
  console.log('childone rendering')
  return (
    <div>
      Child One
    </div>
  )
}

// const memoizedChildOne = React.memo(ChildOne);
// export default memoizedChildOne;
export default ChildOne;
