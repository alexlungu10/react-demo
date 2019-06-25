import * as React from "react";
export default  class Person extends React.Component{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const age=22;
        const vin=1234;

        Person.getName();
        return (
            <div> <p>My name is {Person.getName()}, I'm {age}  </p>


                <form>
                    <input className="input-el" type="text" value={vin}
                           placeholder="insert VIN" />
                </form>
                <br/>
                <p>Vin is: {vin}</p>

                <input value={vin} className="input-el" type="text" placeholder="insert VIN"  max={5}></input>
                <button value={vin} >Submit</button>

            </div>
        );

    }

    static getName():string {
        return "andy";
    }

}
