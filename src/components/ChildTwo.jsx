import React from 'react';

function ChildTwo ({count}) {
  console.log('childtwo rendering')
  
  return (
    <div>
      Child Two
    </div>
  )
}

// const memoizedChildTwo = React.memo(ChildTwo);
// export default memoizedChildTwo;
export default ChildTwo;
