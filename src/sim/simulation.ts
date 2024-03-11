import {Agent} from "./agent.ts";

export interface SimulationState {
  time: number;
  agents: Agent[];
  locations: Location[];
}

export function simulate(state: SimulationState): SimulationState {
  return state;
}
