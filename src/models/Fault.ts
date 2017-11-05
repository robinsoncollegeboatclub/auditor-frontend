import { Moment } from "moment";

export interface Fault {
  id: number;
  description: string;
  assignee: string;
  itemName: string;
  itemDescription: string;
  status: string;
  dateCreated: Moment;
  dateModified: Moment;
  owner: number;
}

export interface CreateFaultDTO {
  description: string;
  assignee: string;
  itemName: string;
  itemDescription: string;
  status?: string;
}

export interface UpdateFaultDTO {
  description?: string;
  assignee?: string;
  itemName?: string;
  itemDescription?: string;
  status?: string;
}

export interface APIFault {
  id?: number;
  description?: string;
  assignee?: string;
  item_name?: string;
  item_description?: string;
  status?: string;
  date_created?: string;
  date_modified?: string;
  owner?: number;
}

export default Fault;
