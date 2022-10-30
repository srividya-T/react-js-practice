import React from "react";
import Counter from "./Counter";
import NewclickCounter1 from "./NewclickCounter1";
import NewHovercounter1 from "./NewHovercounter1";
import NewParentcom from "./NewParentcom";

export const AllCounters = () => {
  return (
    <div>
      {/* <NewHovercounter1/>
        <hr/>
        <NewclickCounter1/> */}
      {/* <NewParentcom/> */}
      <Counter
        render={(count, incrementCount, decrementCount) => (
          <NewHovercounter1
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      />
      <Counter
        render={(count, incrementCount, decrementCount) => (
          <NewclickCounter1
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      />
    </div>
  );
};
