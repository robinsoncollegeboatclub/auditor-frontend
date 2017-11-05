import axios, { AxiosResponse } from "axios";
import { injectable } from "inversify";
import { camelCase, mapKeys, snakeCase } from "lodash";

import FaultService from "../FaultService";
import Fault, { APIFault, CreateFaultDTO, UpdateFaultDTO } from "../../models/Fault";

@injectable()
export class FaultServiceImpl implements FaultService {
  public async createFault(createFaultDto: CreateFaultDTO): Promise<Fault> {
    const response: AxiosResponse = await axios.post(
      `${process.env.API_URL}/faults/`,
      this.mapToExternal({
        ...createFaultDto,
        status: "todo",
      }),
    );

    const fault: APIFault = response.data;
    return this.mapToInternal(fault);
  }

  public async getFaults(): Promise<Fault[]> {
    const response: AxiosResponse = await axios.get(`${process.env.API_URL}/faults/`);
    const faults: APIFault[] = response.data;
    return faults.map((fault: APIFault) => this.mapToInternal(fault));
  }

  public async updateFault(id: number, updateFaultDto: UpdateFaultDTO): Promise<Fault> {
    const response: AxiosResponse = await axios.patch(
      `${process.env.API_URL}/faults/${id}/`,
      this.mapToExternal(updateFaultDto),
    );

    const fault: APIFault = response.data;
    return this.mapToInternal(fault);
  }

  private mapToExternal(fault: Fault | CreateFaultDTO | UpdateFaultDTO): APIFault {
    return mapKeys(fault, (value, key) => snakeCase(key)) as APIFault;
  }

  private mapToInternal(fault: APIFault): Fault {
    return mapKeys(fault, (value, key) => camelCase(key)) as Fault;
  }
}
