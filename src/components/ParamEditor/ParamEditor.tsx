import React from "react";

interface Param {
  id: number;
  name: string;
  // type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  // colors: string[];
}

interface Props {
  params: Param[];
  model: Model;
}

class ParamEditor extends React.Component<Props> {
  public state = {
    model: this.props.model,
    params: this.props.params,
    editedParams: [],
  };

  public getModel = (): Model => {
    return this.state.model;
  };

  public handleParamChange = (paramId: number, value: string) => {
    const editedParams = this.state.editedParams.map((param) =>{
      if (param === paramId) {
        return {
          paramId,
          value,
        };
      }
      return param;
    });
    this.setState({
      editedParams,
    });
  };

  public render() {
    const { params, model } = this.props;
    // const { editedParams } = this.state;

    return (
      <div>
        {params.map((param) => (
          <div key={param.id}>
            <label>{param.name}</label>
            <input 
              type="text"
              value={model.paramValues.find((value) => value.paramId === param.id)?.value}
              onChange={(e) => this.handleParamChange(param.id, e.target.value)}
              />
          </div>
        ))}
      </div>
    )
  }
}

export default ParamEditor;
