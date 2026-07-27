export interface TransportRoute {
    id?: number;
    destinationBeach: string;
    departureTime: string;
    availableSeats: number;
    pricePerSeat: number;
    isFull: boolean;
}