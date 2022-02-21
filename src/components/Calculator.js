import React from "react";
import NumberButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';
import { CalculatorStyles } from "./styles/Styles";

const Calculator = () => (
    <CalculatorStyles>
        <div className="display" id="display">
            <h1>Calculator</h1>
            <Display />
        </div>
        <div className="number-pad">
            <ClearButton />
            <BackButton />
            <NegativeButton />
            <div id="divide">
            <FunctionButton buttonValue="/" />
            </div>
            <div id="seven">
            <NumberButton buttonValue={7} />
            </div>
            <div id="eight">
            <NumberButton buttonValue={8} />
            </div>
            <div id="nine">
            <NumberButton  buttonValue={9} />
            </div>
            <div id="multiply">
            <FunctionButton buttonValue="*" />
            </div>
            <div id ="four">
            <NumberButton id="four" buttonValue={4} />
            </div>
            <div id="five">
            <NumberButton  buttonValue={5} />
            </div>
            <div id="six">
            <NumberButton  buttonValue={6} />
            </div>
            <div id="subtract">
            <FunctionButton buttonValue="-" />
            </div>
            <div id="one">
            <NumberButton buttonValue={1} />
            </div>
            <div id="two">
            <NumberButton buttonValue={2} />
            </div>
            <div id="three">
            <NumberButton buttonValue={3} />
            </div>
            <div id="add">
            <FunctionButton buttonValue="+" />
            </div>
            <div className="zero-button" id="zero">
                <NumberButton buttonValue={0} />
            </div>
            <div id="decimal">
                <NumberButton buttonValue="." />
                </div>
                <EqualButton />
                </div>
            </CalculatorStyles>
);

export default Calculator;