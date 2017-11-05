import Fault, { CreateFaultDTO, UpdateFaultDTO } from "../models/Fault";

export interface FaultService {
  createFault(fault: CreateFaultDTO): Promise<Fault>;
  getFaults(): Promise<Fault[]>;
  updateFault(id: number, fault: UpdateFaultDTO): Promise<Fault>;
}

export default FaultService;
