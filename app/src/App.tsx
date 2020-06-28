import React, { useContext } from 'react';

import './App.css';
import NumBtn from './components/NumBtn';
import OperatorBtn from './components/OperatorBtn';
import Result from './components/Result';
import Context from './components/Context';
import {
  onAllClearClick,
  onClearClick,
  onEqualClick,
  onDivideClick,
  onMultiplyClick,
  onPlusClick,
  onMinusClick,
} from './reducers';

const App: React.FC = () => {
  const { state } = useContext(Context);

  return (
    <>
      <div>
        <Result
          result={state.showingResult ? state.resultValue : state.inputValue}
        />
      </div>
      <div>
        <div>
          <NumBtn n={7} />
          <NumBtn n={8} />
          <NumBtn n={9} />
        </div>
        <div>
          <NumBtn n={4} />
          <NumBtn n={5} />
          <NumBtn n={6} />
        </div>
        <div>
          <NumBtn n={1} />
          <NumBtn n={2} />
          <NumBtn n={3} />
        </div>
        <div>
          <NumBtn n={0} />
        </div>
        <div>
          <OperatorBtn o="+" action={onPlusClick()} />
          <OperatorBtn o="-" action={onMinusClick()} />
          <OperatorBtn o="*" action={onMultiplyClick()} />
          <OperatorBtn o="/" action={onDivideClick()} />
        </div>
        <div>
          <OperatorBtn o="C" action={onClearClick()} />
          <OperatorBtn o="AC" action={onAllClearClick()} />
          <OperatorBtn o="=" action={onEqualClick()} />
        </div>
      </div>
    </>
  );
};

export default App;
