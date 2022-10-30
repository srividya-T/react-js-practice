import React from "react";
import ClickCounter from "./ClickCounter";
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export const Allcounters2 = () => {
  return (
    <div>
      {/* <ClickCounter/>
        <HoverCounter/> */}
      <Counter
        render={(count, incrementCount, decrementCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      />
      <Counter
        render={(count, incrementCount, decrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
          />
        )}
      />
    </div>
  );
};
