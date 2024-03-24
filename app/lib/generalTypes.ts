
// interface Client {
//     id: number;
//     firstName: string;
//     lastName: string;
//     address: string;
//     plan: string;
//     description?: string;
//     status: status
//     createAt?: string;
// }

import { Clients } from "@prisma/client";

// interface Incident {
//     name: string;
//     address: string;
//     description: string;
// }

export enum Status {
  NEW = "NEW",
  TO_CONFIRM = "TO_CONFIRM",
  FOR_VIEW = "FOR_VIEW",
  TO_CONNECT = "TO_CONNECT",
  INCIDENT = "INCIDENT",
  COMPLETE = "COMPLETE",
  REJECTED = "REJECTED",
}


// export type ClientWithStatus = Clients & {
//   status: Status;
// };

// export type ClientWithStatus = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   address: string;
//   description: string | null;
//   createdAt: Date;
//   tvPlanId: number | null;
//   internetPlanId: number;
//   statusId: number;
//   status: Status; // Ensure this matches the structure returned by Prisma
// };