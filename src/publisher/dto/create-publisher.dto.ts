export class CreatePublisherDto {

    id: number;
    name: string;
    siret: number;
    phone: string

    constructor(id: number, name: string, siret: number, phone: string) {
        this.id = id;
        this.name = name;
        this.siret = siret;
        this.phone = phone;
    }

}
