import React, { useRef } from "react";
import "./Form.css";

const Form = (props) => {

    const updateCardValue = props.updateCardValue;

    const nameRef = useRef(null);
    const cardNumberRef = useRef(null);
    const mmRef = useRef(null);
    const yyRef = useRef(null);
    const cvcRef = useRef(null);

    const validation = (name, cardNumber, mm, yy, cvc)=>{
        if(name.length<8) {
            alert('Name length is too short!');
            return false;
        }

        if(cardNumber.length!==20){
            alert('Card Number Not Valid!');
            return false;
        }

        const currentYear = new Date().getFullYear() % 100;

        const month = parseInt(mm, 10);
    
        if (isNaN(month) || month < 1 || month > 12) {
            alert('Invalid month!');
            return false;
        }
    
        const year = parseInt(yy, 10);
    
        if (isNaN(year) || year < currentYear || year > currentYear + 10) {
            alert('Invalid year!');
            return false;
        }

        if(cvc>999||cvc<100){
            alert("Invalid CVC!");
            return false;
        }


        return true;
    }

    const handleClick = ()=>{
        const name = nameRef.current.value;
        let cardNumber = cardNumberRef.current.value;
        cardNumber = cardNumber.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
        console.log(cardNumber)
        const mm = mmRef.current.value;
        const yy = yyRef.current.value;
        const cvc = cvcRef.current.value;
        if(!validation(name, cardNumber, mm, yy, cvc)) return;
        updateCardValue(name,cardNumber,mm,yy,cvc);
    }

  return (
    <>
      <div className="w-50">
        <div className="flex-col det">
          <label for="fname">CARDHOLDER NAME</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="e.g. Jane Appleseed"
            ref={nameRef}
          />
        </div>
        <div className="flex-col det">
          <label for="fname">CARD NUMBER</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="e.g. 1234 5678 9123 0000"
            ref={cardNumberRef}
          />
        </div>
        <div className="flex justify-center">
          <div className="w-50">
            <div className="flex-col det">
              <label for="fname">EXP. DATE (MM/YY) </label>
              <div className="flex">
                <input
                  className="mx-1"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="MM"
                  ref={mmRef}
                />
                <input
                  className="mx-1"
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="YY"
                  ref={yyRef}
                />
              </div>
            </div>
          </div>
          <div className="w-50">
            <div className="flex-col det">
              <label for="fname">CVC</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="e.g. 123"
                ref={cvcRef}
              />
            </div>
          </div>
        </div>
        <div className="confirm">
        <input onClick={handleClick} type="submit" value="Confirm" />
        </div>
      </div>
    </>
  );
};

export default Form;
