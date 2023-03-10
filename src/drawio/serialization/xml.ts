export interface MxFile {
  ":@": {
    compressed: false;
    modified: string;
  };
  mxfile: Diagram[];
}

export interface Diagram {
  ":@": {
    id: string;
    name: string;
  };
  diagram: MxGraphModel[];
}

interface MxGraphModel {
  ":@": {
    grid?: "0" | "1";
    gridSize?: number;
    guides?: "0" | "1";
    tooltips?: "0" | "1";
    connect?: "0" | "1";
    arrows?: "0" | "1";
    fold?: "0" | "1";
    page?: "0" | "1";
    pageScale?: number;
    pageWidth?: number;
    pageHeight?: number;
    math?: "0" | "1";
    shadow?: "0" | "1";
  };
  mxGraphModel: [
    {
      root: MxElement[];
    }
  ];
}

export type MxElement = MxCell | MxObject;

export interface MxObject {
  ":@": {
    id: string;
    label: string;
    placeholders?: "0" | "1";
    [key: string]: string;
  };
  object: MxCell[];
}

export interface MxCell {
  ":@": {
    id?: string;
    parent?: string;
    value?: string;
    style?: string;
    vertex?: "0" | "1";
    edge?: "0" | "1";
    source?: string;
    target?: string;
  };
  mxCell: MxGeometry[];
}

export interface MxGeometry {
  ":@": {
    x?: number;
    y?: number;
    height?: number;
    width?: number;
    relative?: "0" | "1";
    as: "geometry";
  };
  mxGeometry: (MxPoint | MxArray)[];
}

export interface MxArray {
  ":@": {
    as: "points";
  };
  Array: MxPoint[];
}

export interface MxPoint {
  ":@": {
    as?: "sourcePoint" | "targetPoint";
    x?: number;
    y?: number;
  };
  mxPoint: [];
}
