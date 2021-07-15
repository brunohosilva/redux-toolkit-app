export interface DraggableState {
  config: ConfigsType;
}

interface AllConfigs {
  text: string;
}

interface DefaultConfigs {
  text: string;
  value: string;
}

export interface ConfigsType {
  all: AllConfigs[];
  default: DefaultConfigs[];
}
