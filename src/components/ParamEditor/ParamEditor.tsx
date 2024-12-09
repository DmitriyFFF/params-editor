import React from "react";
import { 
  Props, 
  State, 
  Model, 
  ParamValue, 
} from "../../utils/types";

class ParamEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialState: {[key: number]: string} = {};

    for (const paramValue of props.model.paramValues) {
      initialState[paramValue.paramId] = paramValue.value;
    }

    this.state = {
      values: initialState,
    };
  }

  public getModel = (): Model => {
    const paramValues: ParamValue[] = [];

    for (const key in this.state.values) {
      paramValues.push({
        paramId: Number(key),
        value: this.state.values[key], 
      });
    }
    return {
      paramValues,
      colors: [],
    };
  };

  private handleParamChange = (paramId: number, value: string): void => {
    this.setState(prev => ({
      values: {
        ...prev.values,
        [paramId]: value
      }
    }));
  };

  public render() {
    const { params } = this.props;
    const { values } = this.state;

    return (
      <div>
        {params.map((param) => (
          <div key={param.id}>
            <label>{param.name}</label>
            <input 
              type="text"
              value={values[param.id]}
              onChange={(e) => this.handleParamChange(param.id, e.target.value)}
              />
          </div>
        ))}
      </div>
    )
  }
}

export default ParamEditor;
