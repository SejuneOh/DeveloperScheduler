export interface IGoals {
  id: string;
  properties: {
    Due_Date: {
      start: string;
      type: string;
    };
    Goals: {
      text: string;
      type: string;
    };
    State: {
      status: string;
      color: string;
      type: string;
    };
    Type: {
      name: string;
      color: string;
      type: string;
    };
    Year: {
      name: string;
      color: string;
      type: string;
    };
  };
  Projects: Array<any>;
}

export interface IProjects {
  id: string;
  properties: {
    State: {
      status: string;
      color: string;
      type: string;
    };
    Name: {
      text: string;
      type: string;
    };
    Goals: {
      relation: Array<any>;
      type: string;
    };
    Percent: {
      number: number;
      type: string;
    };
  };
  Actions: Array<any>;
}

export interface IActions {
  id: string;
  properties: {
    Name: {
      text: string;
      type: string;
    };
    Date: {
      start: string;
      type: string;
    };
    Done: {
      checkbox: boolean;
      type: string;
    };
    Projects: {
      relation: Array<any>;
      type: string;
    };
  };
}

export interface IType {}
