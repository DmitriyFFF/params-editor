export interface Param {
  id: number;
  name: string;
  type: 'string';
}

export interface ParamValue {
  paramId: number;
  value: string;
}

export interface Model {
  paramValues: ParamValue[];
  colors: string[];
}

export interface Props {
  params: Param[];
  model: Model;
}

export interface State {
  values: {
    [key: number]: string,
  }
}