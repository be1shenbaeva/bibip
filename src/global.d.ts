type Trip = {
  Id: string;
  RouterId: string;
  ScheduleTripId: string;
  RouterName: string;
  RouterNum: string | null;
  Carrier: string;
  Bus: Bus;
  Driver1: null | string;
  Driver2: null | string;
  Frequency: string;
  WaybillNum: null | string;
  Status: string;
  StatusPrint: string;
  StatusReason: null | string;
  StatusComment: null | string;
  StatusDate: null | string;
  Departure: Location;
  DepartureTime: string;
  ArrivalToDepartureTime: string;
  Destination: Location;
  ArrivalTime: string;
  Distance: string;
  Duration: string;
  TransitSeats: boolean;
  FreeSeatsAmount: number;
  PassengerFareCost: string;
  Fares: [];
  Platform: number;
  OnSale: boolean;
  Route: [];
  Additional: boolean;
  AdditionalTripTime: [];
  TransitTrip: null;
  SaleStatus: null;
  ACBPDP: null;
  FactTripReturnTime: null;
  Currency: Currency;
  PrincipalTaxId: string;
  CarrierData: CarrierData;
};

type Bus = {
  Id: string;
  Model: string;
  LicencePlate: string;
  Name: string;
  SeatsClass: string;
  SeatCapacity: number;
  StandCapacity: number;
  BaggageCapacity: number;
  SeatsScheme: [];
  GarageScheme: null;
};

enum Currency {
  RUB = "RUB",
}

interface Location {
  Name: string;
  Code: string;
  Id: string;
  Country: string;
  Region: string;
  District: null | string;
  Automated: boolean;
  HasDestinations: boolean;
  UTC: string;
  GPSCoordinates: string;
  LocationType: string;
  Locality: string;
  StoppingPlace: null | string;
  Address: string;
  Phone: null | string;
}

type CarrierData = {
  CarrierName: string;
  CarrierTaxId: string;
  CarrierStateRegNum: string;
  CarrierPersonalData: CarrierPersonalData[];
  CarrierAddress: string;
  CarrierWorkingHours: string;
};

type CarrierPersonalData = {
  Name: string;
  Caption: string;
  Mandatory: boolean;
  PersonalIdentifier: boolean;
  Type: string;
  ValueVariants: [];
  InputMask: null;
  Value: string;
  ValueKind: null;
  DefaultValueVariant: DefaultValueVariant;
  DocumentIssueDateRequired: null | string;
  DocumentIssueOrgRequired: null | string;
  DocumentValidityDateRequired: null | string;
  DocumentInceptionDateRequired: null | string;
  DocumentIssuePlaceRequired: null | string;
  Value1: null | string;
  Value2: null | string;
  Value3: null | string;
  Value4: null | string;
  Value5: null | string;
};

type DefaultValueVariant = {
  Name: null | string;
  InputMask: null | string;
  ValueProperty1: null | string;
  ValueProperty2: null | string;
  ValueProperty3: null | string;
  ValueProperty4: null | string;
  ValueProperty5: null | string;
};

export interface TravelDirection {
  id: string;
  name: string;
  locality: string;
}

export interface DirectionsResponse {
  travel_directions: TravelDirection[];
}

interface TripsResponse {
  trips: Trip[] | undefined;
}

type Seat = {
  XPos: number;
  YPos: number;
  SeatNum: number;
};

interface ReservedSeat extends Seat {
  Reserved: boolean;
}

type BusScheme = {
  Id: string;
  Model: string;
  LicencePlate: string;
  BaggageCapacity: number;
  GarageNum: string | null;
  Name: string;
  SeatCapacity: number;
  SeatsClass: string;
  SeatsScheme: Seat[];
};

interface ResponseBusSchemeData {
  return: {
    Elements: BusReserved[];
  };
  Bus: Bus;
}

interface BusReserved {
  ForCurrentOrder: boolean;
  Number: number;
  ParentTicketSeatNum: number;
  Status: string;
  Type: string;
}

interface Order {
  Amount: string;
  Currency: Currency;
  Customer: null | string;
  Departure: Location;
  DepartureTime: string;
  Destination: Location;
  LoyaltyCard: null | string;
  Number: string;
  OccupiedSeats: BusReserved[];
  Reserve: null | string;
  SecondsToUnlockSeats: null | string;
  Service: null | string;
  Tickets: [];
  Trip: Trip;
}

interface PersonalData {
  name: string;
  value: string;
  value_kind: string;
}

interface Passenger {
  number: string;
  seat_num: string;
  fare_name: string;
  personal_data: PersonalData[];
}

interface OrderTicket {
  order_id: string;
  passengers: Passenger[];
}

interface ReservedOrder {
  TicketSeats: ReservedElement[];
  return: Order;
}

interface ReservedElement {
  Destination: string;
  FareName: string;
  ParentTicketSeatNum: null | number;
  SeatNum: number;
  TicketNumber: string;
}

interface TicketData {
  number: string;
  seat_num: string;
  fare_name: string;
  personal_data: PersonalDataItem[];
}

interface PersonalDataItem {
  name: string;
  value: string;
  value_kind: string;
}

export interface TicketInfo {
  arrival_time: string;
  departure_id: string;
  departure_name: string;
  departure_time: string;
  destination_name: string;
  is_returned: boolean;
  licence_plate: string;
  order_id: string;
  payment_id: string | null;
  receipt_email: string | null;
  route_name: string;
  seat_num: string;
  ticket_num: string;
  token: string;
  total_amount: string;
  total_amount_avibus: string;
}

export type Ticket = {
  order_id: string;
  token: string;
  route_name: string;
  departure_name: string;
  destination_name: string;
  departure_time: string;
  arrival_time: string;
  seat_num: string;
  total_amount_avibus: string;
  total_amount: string;
  ticket_num: string;
  licence_plate: string;
  departure_id: string;
  payment_id: null | string;
  receipt_email: null | string;
  is_returned: boolean;
  token_tinkoff: null | string;
  payment_id_tinkoff: null | string;
};
