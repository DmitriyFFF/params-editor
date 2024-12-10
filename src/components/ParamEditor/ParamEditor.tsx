import React from "react";
export interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
  colors: string[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  values: {
    [key: number]: string,
  }
}

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
      <div className="container">
        {params.map((param) => (
          <div className="param" key={param.id}>
            <label className="paramName">{param.name}</label>
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
