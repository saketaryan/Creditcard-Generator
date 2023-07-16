import { useState } from "react";
import Card from "./components/Card";
import CardBack from "./components/CardBack";
import Form from "./components/Form";

const defaultValues = {
  'name': 'JANE APPLESEED',
  'cardNumber': '0000 0000 0000 0000',
  'MM': '00',
  'YY': '00',
  'cvc': '000'
}

function App() {

  const [cardState, updateCardState] = useState(defaultValues);

  const updateCardValue = (name, cardNumber, mm, yy, cvc)=>{
    const newValues = {
      'name': name,
      'cardNumber': cardNumber,
      'MM': mm,
      'YY': yy,
      'cvc': cvc
    }
    updateCardState(newValues);
  }

  return (
     <>
      <div className="flex">
        <div className="w-35 left"></div>
        <div className="absolute Cards">
            <div className="Card"><Card card={cardState} /></div>
            <div className="Card-Back"><CardBack card={cardState} /></div>
        </div>
        <div className="w-65 right">
          <Form updateCardValue={updateCardValue} />
        </div>
      </div>
    </>
  );
}

export default App;
