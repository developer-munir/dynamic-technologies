import React from 'react';

const Questions = () => {
    return (
      <div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">Questions</div>
          <div className="collapse-content">
            <div className="mt-3">
              <p className="text-2xl">Qs: How does react Work?</p>
              <p className="font-thin">
                <span className="font-semibold">Ans:</span> React creates a
                VIRTUAL DOM in memory. Instead of manipulating the browser's DOM
                directly, React creates a virtual DOM in memory, where it does
                all the necessary manipulating, before making the changes in the
                browser DOM.
              </p>
            </div>
            <div className="mt-3">
              <p className="text-2xl">
                Qs: difference between props and state in react?
              </p>
              <p className="font-thin">
                <span className="font-semibold">Ans:</span> The key difference
                between props and state is that state is internal and controlled
                by the component itself while props are external and controlled
                by whatever renders the component.
              </p>
            </div>
            <div className="mt-3">
              <p className="text-2xl">Qs: When to use useeffect in react?</p>
              <p className="font-thin">
                <span className="font-semibold">Ans:</span> useEffect () is for
                side-effects A functional React component uses props and/or
                state to calculate the output. If the functional component makes
                calculations that don't target the output value, then these
                calculations are named side-effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Questions;