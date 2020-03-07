import { PropertyBuilderTypes } from "@enums/propertyBuilderTypes";

export default interface PropertyBuilderModel {
    Type: PropertyBuilderTypes;
    Data: string[];
    AppendTo: string;
    ParameterKey: string;
    ShouldEncrypt: boolean;
}
