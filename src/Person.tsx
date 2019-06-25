import * as React from "react";
//import Any = jasmine.Any;

export default class Person extends React.Component<Props,State> {

    constructor(props:Props) {
        super(props);
        this.changeVin = this.changeVin.bind(this);
        this.state={vin:'1234'}
    }

    changeVin(e:any){
    this.setState({vin:e.target.value})
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const age = 22;

        Person.getName();
        return (
            <div><p>My name is {Person.getName()}, I'm {age}  </p>


                <form>
                    <input value={this.state.vin} className="input-el" type="text" placeholder="insert VIN" max={5}
                           onChange={this.changeVin} maxLength={5}></input>
                    <button >Submit</button>
                </form>
                <br/>
                <p>Vin is: {this.state.vin}</p>



            </div>
        );

    }

    static getName(): string {
        return "andy";
    }



}

interface Props {
//... // your props validation
}

interface State {
  vin:string
}
