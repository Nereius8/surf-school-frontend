export interface Surfboard {
    id?: number;
    model: string;
    type: string;
    size: string;
    rentalPricePerHour: number;
    isAvailable: boolean;
    imageSrc?: string;
}
