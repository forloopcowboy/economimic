import {Agent} from "./agent.ts";

export interface SimulationState {
  time: number;
  agents: Agent[];
  locations: Location[];
}

export function simulate(state: SimulationState): SimulationState {
  // TODO: make agents go from one location to another in random fashion
  return state;
}
