import {Hardware} from './Hardware';

export interface HardwareAction {
  type: 'create' | 'update' | 'delete';
  hardware?: Hardware;
  message?: string;
}
