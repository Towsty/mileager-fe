export interface Vehicle {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  odometer?: number;
}

export interface MileageEntry {
  id: string;
  date: string;
  odometer: number;
  vehicleId: string;
  notes?: string;
}

export interface VehicleStats {
  vehicle: Vehicle;
  totalMiles: number;
  entries: number;
  averageMilesPerDay: number;
  lastEntry: MileageEntry | undefined;
} 